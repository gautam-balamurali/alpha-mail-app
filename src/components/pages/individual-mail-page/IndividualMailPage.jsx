import { useParams } from "react-router-dom";
import IndividualMail from "../../features/individual-mail/IndividualMail";
import { useMailbox } from "../../../core/contexts/MailboxContext";

const IndividualMailPage = () => {
  const { mailId } = useParams();
  const { allMails } = useMailbox();

  const mailDetails = allMails.find((mail) => mail.mId === mailId);

  return <IndividualMail mailDetails={mailDetails} />;
};

export default IndividualMailPage;
