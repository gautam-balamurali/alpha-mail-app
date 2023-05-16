import { useNavigate } from "react-router-dom";
import { useMailbox } from "../../../core/contexts/MailboxContext";
import Button from "../../shared/button-component/Button";
import { backButtonLabel } from "../../../config/app-config";

const IndividualMail = ({ mailDetails }) => {
  const { currentMailbox } = useMailbox();
  const { subject, content, fromMailAddress, from } = mailDetails;
  const navigate = useNavigate();

  const goBackButtonClickHandler = () => {
    navigate(`/${currentMailbox === "inbox" ? "" : currentMailbox}`);
  };

  return (
    <div className="mail-card read" style={{ margin: "1rem auto" }}>
      <h3>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1rem" }}
        >
          subject
        </span>
        Subject: {subject}
      </h3>
      <div className="address-content">
        <strong>From: </strong>
        <span className="mail-from">{from}</span>
        <span className="mail-address">{`<${fromMailAddress}>`}</span>
        <br />
        <strong>To: </strong>
        <span className="mail-to">Me</span>
        <span className="mail-address">{`<ash@alphamail.com>`}</span>
      </div>
      <p>{content}</p>
      <Button
        className={"btn-read"}
        label={backButtonLabel}
        clickHandlerFunction={goBackButtonClickHandler}
      />
    </div>
  );
};

export default IndividualMail;
