import { useMailbox } from "../../../core/contexts/MailboxContext";
import LoadingErrorIndicator from "../../shared/loading-error-indicator-component/LoadingErrorIndicator";
import Toaster from "../../shared/toaster-component/Toaster";
import MailCard from "../mail-card/MailCard";
import Filters from "./Filters";
import MailboxStatus from "./MailboxStatus";

const Mailbox = ({ mailbox }) => {
  const { isLoading, errorDetails, currentMailbox, showToaster } = useMailbox();
  const currentMailboxHeading =
    currentMailbox[0].toUpperCase() + currentMailbox.substring(1);
  return (
    <div className="main-content">
      <Filters />
      <MailboxStatus mailbox={mailbox} />
      <LoadingErrorIndicator isLoading={isLoading} errorState={errorDetails} />
      {mailbox.length > 0 && (
        <ul className="mail-card-list">
          {mailbox.map((mail) => (
            <MailCard key={mail.mId} mailDetails={mail} />
          ))}
        </ul>
      )}
      {mailbox.length < 1 && !isLoading && !errorDetails?.status && (
        <h2 className="empty-mailbox">
          No mails found in the {currentMailboxHeading}.
        </h2>
      )}
      {showToaster && <Toaster />}
    </div>
  );
};

export default Mailbox;
