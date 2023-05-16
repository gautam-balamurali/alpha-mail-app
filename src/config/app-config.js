//API Endpoint

export const apiEndpoint = "https://example.com/api/mails";

//Input Field Constants

export const inputFieldFilters = [
  {
    type: "text",
    label: '🔍 ',
    placeholder: 'Search mail'
  },
  {
    type: "checkbox",
    value: "unread",
    label: "Show unread mails",
  },
  {
    type: "checkbox",
    value: "isStarred",
    label: "Show starred mails",
  },
];

//Button Labels

export const backButtonLabel = "Go Back";
export const markAsReadButtonLabel = "Mark as Read";
export const markAsUnreadButtonLabel = "Mark as Unread";
export const starButtonLabel = "✰";
export const unstarButtonLabel = "⭐";
export const undoButtonLabel = 'undo';
