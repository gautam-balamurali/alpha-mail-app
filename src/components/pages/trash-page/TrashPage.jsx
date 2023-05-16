import { useMailbox } from "../../../core/contexts/MailboxContext";
import Mailbox from "../../features/mailbox/Mailbox";

const TrashPage = () => {
  const { trash } = useMailbox();
  return <Mailbox mailbox={trash} />;
};

export default TrashPage;
