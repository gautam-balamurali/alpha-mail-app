import { NavLink } from "react-router-dom";
import { useMailbox } from "../../../core/contexts/MailboxContext";

const Navbar = () => {
  const { inbox, spam, trash, dispatch } = useMailbox();
  return (
    <nav className="navigation">
      <NavLink
        className="nav-link"
        to="/"
        onClick={() => dispatch({ type: "CHANGE_MAILBOX", payload: "inbox" })}
      >
        <span className="material-symbols-outlined">inbox</span>
        <span style={{ display: "inline-block" }}>{"\u00A0Inbox"}</span>
        <span className="mails-count">
          {inbox.length ? `${inbox.length}` : ""}
        </span>
      </NavLink>
      <NavLink
        className="nav-link"
        to="/spam"
        onClick={() => dispatch({ type: "CHANGE_MAILBOX", payload: "spam" })}
      >
        <span className="material-symbols-outlined">error</span>
        <span style={{ display: "inline-block" }}>{"\u00A0Spam"}</span>
        <span className="mails-count">
          {spam.length ? `${spam.length}` : ""}
        </span>
      </NavLink>
      <NavLink
        className="nav-link"
        to="/trash"
        onClick={() => dispatch({ type: "CHANGE_MAILBOX", payload: "trash" })}
      >
        <span className="material-symbols-outlined">delete</span>
        <span style={{ display: "inline-block" }}>{"\u00A0Trash"}</span>
        <span className="mails-count">
          {trash.length ? `${trash.length}` : ""}
        </span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
