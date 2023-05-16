import { useMailbox } from "../../../core/contexts/MailboxContext";
import Mailbox from "../../features/mailbox/Mailbox";

const InboxPage = () => {
  const { inbox } = useMailbox();
  return <Mailbox mailbox={inbox} />;
};

export default InboxPage;
