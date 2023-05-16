const applySearchFilter = (list, searchValue) =>
  list.filter(
    (mail) =>
      mail.subject.toLowerCase().includes(searchValue.toLowerCase()) ||
      mail.content.toLowerCase().includes(searchValue.toLowerCase())
  );

const filterListByCheckbox = (list, checkboxValues) =>
  checkboxValues.length < 1
    ? list
    : list.filter((elm) =>
        checkboxValues.some((checkboxValue) => elm[checkboxValue])
      );

export const updateUnreadStatusOfTheMail = (mailId, state) => {
  let updatedMails = [...state[state.currentMailbox]];
  updatedMails = updatedMails.map((mail) =>
    mail.mId === mailId ? { ...mail, unread: false } : mail
  );
  updatedMails = applySearchFilter(
    updatedMails,
    state.searchFilters[state.currentMailbox]
  );
  updatedMails = filterListByCheckbox(
    updatedMails,
    state.checkboxFilters[state.currentMailbox]
  );
  const allMails = state.allMails.map((mail) =>
    mail.mId === mailId ? { ...mail, unread: false } : mail
  );
  return { updatedMails, allMails };
};

export const togglePropertyValuesOfLists = (mailId, state, property) => {
  let updatedMails = [...state[state.currentMailbox]];
  updatedMails = updatedMails.map((mail) =>
    mail.mId === mailId ? { ...mail, [property]: !mail[property] } : mail
  );
  updatedMails = applySearchFilter(
    updatedMails,
    state.searchFilters[state.currentMailbox]
  );
  updatedMails = filterListByCheckbox(
    updatedMails,
    state.checkboxFilters[state.currentMailbox]
  );
  const allMails = state.allMails.map((mail) =>
    mail.mId === mailId ? { ...mail, [property]: !mail[property] } : mail
  );
  return { updatedMails, allMails };
};

export const updateMailboxWithNewMail = (mailId, mailbox, state) => {
  let updatedMails = [...state[state.currentMailbox]];
  const movedMail = state.allMails.find((mail) => mail.mId === mailId);
  movedMail.mailbox = mailbox;
  updatedMails = updatedMails.filter((mail) => mail.mId !== mailId);
  let updatedMailboxWithNewMail = [movedMail, ...state[mailbox]];
  updatedMailboxWithNewMail = applySearchFilter(
    updatedMailboxWithNewMail,
    state.searchFilters[mailbox]
  );
  updatedMailboxWithNewMail = filterListByCheckbox(
    updatedMailboxWithNewMail,
    state.checkboxFilters[mailbox]
  );
  let updatedCurrentMailbox = [...updatedMails];
  updatedCurrentMailbox = applySearchFilter(
    updatedCurrentMailbox,
    state.searchFilters[state.currentMailbox]
  );
  updatedCurrentMailbox = filterListByCheckbox(
    updatedCurrentMailbox,
    state.checkboxFilters[state.currentMailbox]
  );
  return { updatedCurrentMailbox, updatedMailboxWithNewMail };
};

export const updateListWithAppliedCheckboxFilters = (event, state) => {
  const { name, value, checked } = event.target;
  const newAppliedFilterValues = {
    ...state.checkboxFilters,
    [name]: checked
      ? [...state.checkboxFilters[name], value]
      : state.checkboxFilters[name].filter((elm) => elm !== value),
  };
  let updatedMails = applySearchFilter(
    state.allMails,
    state.searchFilters[name]
  );
  updatedMails = filterListByCheckbox(
    updatedMails,
    newAppliedFilterValues[name]
  );
  updatedMails = updatedMails.filter(
    (mail) => mail.mailbox === state.currentMailbox
  );
  return { updatedMails, newAppliedFilterValues };
};

export const updateListWithAppliedSearchFilters = (event, state) => {
  const { name, value } = event.target;
  const newAppliedFilterValues = {
    ...state.searchFilters,
    [name]: value,
  };
  let updatedMails = applySearchFilter(state.allMails, value);
  updatedMails = filterListByCheckbox(
    updatedMails,
    state.checkboxFilters[name]
  );
  updatedMails = updatedMails.filter(
    (mail) => mail.mailbox === state.currentMailbox
  );
  return { updatedMails, newAppliedFilterValues };
};
