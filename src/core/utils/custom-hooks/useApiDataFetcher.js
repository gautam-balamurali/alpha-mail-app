import { useEffect } from "react";
import { fakeFetch } from "../../services/mail.service";
import { apiEndpoint } from "../../../config/app-config";

const useApiDataFetcher = (dispatch) => {
  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADER_INITIATED" });
      try {
        const response = await fakeFetch(apiEndpoint);
        const {
          status,
          data: { mails },
        } = response;
        if (status === 200) dispatch({ type: "FETCH_MAILS", payload: mails });
      } catch (error) {
        console.error(error);
        dispatch({ type: "FETCH_ERROR_DETAILS", payload: error });
      } finally {
        dispatch({ type: "LOADER_STOPPED" });
      }
    })();
  }, [dispatch]);
};

export default useApiDataFetcher;
