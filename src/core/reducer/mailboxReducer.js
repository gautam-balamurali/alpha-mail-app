export const mailboxReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADER_INITIATED":
      return { ...state, isLoading: true };
    case "LOADER_STOPPED":
      return { ...state, isLoading: false };
    case "FETCH_ERROR_DETAILS":
      return { ...state, errorDetails: payload };
    case "FETCH_MAILS":
      return {
        ...state,
        allMails: [...payload],
        inbox: [...payload.filter((mail) => mail.mailbox === "inbox")],
        spam: [...payload.filter((mail) => mail.mailbox === "spam")],
        trash: [...payload.filter((mail) => mail.mailbox === "trash")],
      };
    case "CHANGE_UNREAD_STATUS":
      return {
        ...state,
        allMails: payload.allMails,
        [state.currentMailbox]: payload.updatedMails,
      };
    case "TOGGLE_READ_UNREAD":
      return {
        ...state,
        allMails: payload.allMails,
        [state.currentMailbox]: payload.updatedMails,
      };
    case "TOGGLE_STAR_UNSTAR":
      return {
        ...state,
        allMails: payload.allMails,
        [state.currentMailbox]: payload.updatedMails,
      };
    case "MOVE_TO_MAILBOX":
      return {
        ...state,
        previousState: { ...state },
        [state.currentMailbox]: [...payload.updatedCurrentMailbox],
        [payload.mailbox]: [...payload.updatedMailboxWithNewMail],
      };
    case "UNDO_MOVE_TO_MAILBOX":
      return {
        ...state.previousState,
        previousState: null,
      };
    case "APPLY_CHECKBOX_FILTERS":
      return {
        ...state,
        [state.currentMailbox]: [...payload.updatedMails],
        checkboxFilters: payload.newAppliedFilterValues,
      };
    case "APPLY_SEARCH_FILTERS":
      return {
        ...state,
        [state.currentMailbox]: [...payload.updatedMails],
        searchFilters: payload.newAppliedFilterValues,
      };
    case "CHANGE_MAILBOX":
      return { ...state, currentMailbox: payload };
    case "SHOW_TOASTER":
      return { ...state, showToaster: true, toasterMessage: payload };
    case "HIDE_TOASTER":
      return { ...state, showToaster: false, toasterMessage: "" };
    default:
      return state;
  }
};
