import { useMailbox } from "../../../core/contexts/MailboxContext";
import Mailbox from "../../features/mailbox/Mailbox";

const SpamPage = () => {
  const { spam } = useMailbox();
  return <Mailbox mailbox={spam} />;
};

export default SpamPage;
