import { Link } from "react-router-dom";
import MailCardActionButtons from "./MailCardActionButtons";
import { starButtonLabel, unstarButtonLabel } from "../../../config/app-config";
import { useMailbox } from "../../../core/contexts/MailboxContext";
import Button from "../../shared/button-component/Button";

const MailCard = ({ mailDetails }) => {
  const { mId, unread, isStarred, subject, content } = mailDetails;
  const { toggleStarUnstarMail, viewMailDetailsHandler } = useMailbox();

  return (
    <li className={`mail-card ${unread ? "unread" : "read"}`}>
      <div className="flex-content">
        <h3 className="mail-subject">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1rem" }}
          >
            subject
          </span>
          {subject}
        </h3>
        <Button
          label={isStarred ? unstarButtonLabel : starButtonLabel}
          clickHandlerFunction={toggleStarUnstarMail}
          params={mId}
          className={isStarred ? "btn-star" : "btn-unstar"}
        />
      </div>
      <p className="mail-content">{content}</p>
      <div className="flex-content">
        <Link
          className="details-link"
          to={`/mail/${mId}`}
          onClick={() => viewMailDetailsHandler(mId)}
        >
          View Details
        </Link>
        <MailCardActionButtons mailDetails={mailDetails} />
      </div>
    </li>
  );
};

export default MailCard;
