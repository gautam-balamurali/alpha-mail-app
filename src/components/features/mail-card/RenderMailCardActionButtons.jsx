import {
  markAsReadButtonLabel,
  markAsUnreadButtonLabel,
} from "../../../config/app-config";
import { useMailbox } from "../../../core/contexts/MailboxContext";
import Button from "../../shared/button-component/Button";

const RenderMailCardActionButtons = ({
  moveMailToMailboxActionButtons,
  mailDetails,
  toggleReadUnreadMail,
  moveMailToMailboxHandler,
}) => {
  const { mId: mailId, unread } = mailDetails;
  const { showToaster } = useMailbox();

  return (
    <div className="btn-actions">
      <Button
        label={unread ? markAsReadButtonLabel : markAsUnreadButtonLabel}
        clickHandlerFunction={toggleReadUnreadMail}
        params={mailId}
        className={"btn-read"}
        style={{ color: "#155b9e" }}
      />
      {moveMailToMailboxActionButtons.map(
        ({ condition, label, mailbox, className, color }, index) =>
          condition && (
            <Button
              key={index}
              label={label}
              clickHandlerFunction={moveMailToMailboxHandler}
              params={[mailId, mailbox]}
              className={className}
              style={{ color }}
              disabled={showToaster}
            />
          )
      )}
    </div>
  );
};

export default RenderMailCardActionButtons;
