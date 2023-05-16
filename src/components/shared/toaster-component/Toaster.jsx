import { useEffect } from "react";
import { undoButtonLabel } from "../../../config/app-config";
import { useMailbox } from "../../../core/contexts/MailboxContext";
import Button from "../button-component/Button";

const Toaster = () => {
  const { dispatch, toasterMessage } = useMailbox();

  const hideToaster = () => {
    dispatch({ type: "HIDE_TOASTER" });
  };

  const undoButtonClickHandler = () => {
    dispatch({ type: "UNDO_MOVE_TO_MAILBOX" });
  };

    useEffect(() => {
      setTimeout(() => hideToaster(), 3000);
    });

  return (
    <div className="toaster">
      <p>{toasterMessage}</p>
      <Button
        label={undoButtonLabel}
        className={"btn-undo"}
        clickHandlerFunction={undoButtonClickHandler}
      />
      <Button
        label={"x"}
        clickHandlerFunction={hideToaster}
        className={"toaster-close-btn"}
      />
    </div>
  );
};

export default Toaster;
