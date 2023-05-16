//This needs to be re-factored

export const initialStateofMailBoxReducer = {
  allMails: [],
  inbox: [],
  spam: [],
  trash: [],
  checkboxFilters: {
    inbox: [],
    spam: [],
    trash: [],
  },
  searchFilters: {
    inbox: "",
    spam: "",
    trash: "",
  },
  currentMailbox: "inbox",
  isLoading: false,
  errorDetails: null,
  showToaster:false,
  toasterMessage:''
};
