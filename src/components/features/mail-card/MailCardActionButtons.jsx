import { useMailbox } from "../../../core/contexts/MailboxContext";
import RenderMailCardActionButtons from "./RenderMailCardActionButtons";

const MailCardActionButtons = ({ mailDetails }) => {
  const {
    currentMailbox,
    toggleReadUnreadMail,
    toggleStarUnstarMail,
    moveMailToMailboxHandler,
  } = useMailbox();

  const moveMailToMailboxActionButtons = [
    {
      condition: currentMailbox === "inbox" || currentMailbox === "trash",
      label: "Report Spam",
      mailbox: "spam",
      className: "btn-spam",
      color: "#16bf16",
    },
    {
      condition: currentMailbox === "inbox" || currentMailbox === "spam",
      label: "Delete",
      mailbox: "trash",
      className: "btn-del",
      color: "#ff0000",
    },
    {
      condition: currentMailbox === "trash" || currentMailbox === "spam",
      label: "Move to Inbox",
      mailbox: "inbox",
      className: "btn-inbox",
      color: "#0000ff",
    },
  ];

  return (
    <RenderMailCardActionButtons
      moveMailToMailboxActionButtons={moveMailToMailboxActionButtons}
      mailDetails={mailDetails}
      toggleReadUnreadMail={toggleReadUnreadMail}
      toggleStarUnstarMail={toggleStarUnstarMail}
      moveMailToMailboxHandler={moveMailToMailboxHandler}
    />
  );
};

export default MailCardActionButtons;
