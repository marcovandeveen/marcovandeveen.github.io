import {useQuery} from "react-query";
import {getMediaById} from "../services/api.service.js";
export default function useMedia(mediaId, enabled = true) {
  return useQuery(["media", mediaId], () => getMediaById(mediaId), {
    enabled: !!mediaId && enabled,
    keepPreviousData: true
  });
}
