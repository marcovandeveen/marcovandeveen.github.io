import {useCallback, useRef} from "react";
import {useHistory} from "react-router";
import {debounce} from "../utils/common.js";
import {UIStore} from "../stores/UIStore.js";
const useSearchQueryUpdater = () => {
  const history = useHistory();
  const updateSearchPath = useRef(debounce((query) => {
    history.push(`/q/${encodeURIComponent(query)}`);
  }, 250));
  const updateSearchQuery = useCallback((query) => {
    UIStore.update((state) => {
      state.searchQuery = query;
    });
    updateSearchPath.current(query);
  }, []);
  const resetSearchQuery = useCallback(() => {
    UIStore.update((state) => {
      state.searchQuery = "";
    });
    history.push("/");
  }, [history]);
  return {updateSearchQuery, resetSearchQuery};
};
export default useSearchQueryUpdater;
