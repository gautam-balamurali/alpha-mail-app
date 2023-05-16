import { createContext, useContext, useReducer } from "react";
import { mailboxReducer } from "../reducer/mailboxReducer";
import useApiDataFetcher from "../utils/custom-hooks/useApiDataFetcher";
import { initialStateofMailBoxReducer } from "../reducer/initialStateOfMailboxReducer";
import {
  togglePropertyValuesOfLists,
  updateListWithAppliedCheckboxFilters,
  updateListWithAppliedSearchFilters,
  updateMailboxWithNewMail,
  updateUnreadStatusOfTheMail,
} from "../utils/helper-functions/helper-functions";

export const MailboxContext = createContext();

export const MailboxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    mailboxReducer,
    initialStateofMailBoxReducer
  );

  useApiDataFetcher(dispatch);

  const viewMailDetailsHandler = (mailId) => {
    const { updatedMails, allMails } = updateUnreadStatusOfTheMail(
      mailId,
      state
    );
    dispatch({
      type: "CHANGE_UNREAD_STATUS",
      payload: { updatedMails, allMails },
    });
  };

  const toggleReadUnreadMail = (mailId) => {
    const { updatedMails, allMails } = togglePropertyValuesOfLists(
      mailId,
      state,
      "unread"
    );
    dispatch({
      type: "TOGGLE_READ_UNREAD",
      payload: { updatedMails, allMails },
    });
  };

  const toggleStarUnstarMail = (mailId) => {
    const { updatedMails, allMails } = togglePropertyValuesOfLists(
      mailId,
      state,
      "isStarred"
    );
    dispatch({
      type: "TOGGLE_STAR_UNSTAR",
      payload: { updatedMails, allMails },
    });
  };

  const moveMailToMailboxHandler = ([mailId, mailbox]) => {
    const { updatedCurrentMailbox, updatedMailboxWithNewMail } =
      updateMailboxWithNewMail(mailId, mailbox, state);
    dispatch({
      type: "MOVE_TO_MAILBOX",
      payload: { updatedCurrentMailbox, updatedMailboxWithNewMail, mailbox },
    });
    showToaster(`Moved mail from ${state.currentMailbox} to ${mailbox}.`);
  };

  const handleCheckboxFiltersOnChange = (event) => {
    const { updatedMails, newAppliedFilterValues } =
      updateListWithAppliedCheckboxFilters(event, state);
    dispatch({
      type: "APPLY_CHECKBOX_FILTERS",
      payload: { updatedMails, newAppliedFilterValues },
    });
  };

  const handleSearchFiltersOnChange = (event) => {
    const { updatedMails, newAppliedFilterValues } =
      updateListWithAppliedSearchFilters(event, state);
    dispatch({
      type: "APPLY_SEARCH_FILTERS",
      payload: { updatedMails, newAppliedFilterValues },
    });
  };

  const showToaster = (message) => {
    dispatch({
      type: "SHOW_TOASTER",
      payload: message,
    });
  };

  return (
    <MailboxContext.Provider
      value={{
        ...state,
        dispatch,
        toggleReadUnreadMail,
        toggleStarUnstarMail,
        moveMailToMailboxHandler,
        handleCheckboxFiltersOnChange,
        handleSearchFiltersOnChange,
        viewMailDetailsHandler,
      }}
    >
      {children}
    </MailboxContext.Provider>
  );
};

export const useMailbox = () => useContext(MailboxContext);
