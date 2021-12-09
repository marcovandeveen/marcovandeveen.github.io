import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600,
      refetchOnWindowFocus: false,
      retryOnMount: false
    }
  }
});
function QueryProvider({children}) {
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, children);
}
export default QueryProvider;
