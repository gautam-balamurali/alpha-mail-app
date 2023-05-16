const MailboxStatus = ({ mailbox }) => {
  const totalUnreadMailsCount = mailbox.filter((mail) => mail.unread).length;
  const totalStarredMailsCount = mailbox.filter(
    (mail) => mail.isStarred
  ).length;

  return (
    <div className="mailbox-status">
      <p>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1rem" }}
        >
          mark_email_unread
        </span>
        {`\u00A0Unread: ${totalUnreadMailsCount}`}
      </p>
      <p>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1rem" }}
        >
          star
        </span>
        {`\u00A0Starred: ${totalStarredMailsCount}`}
      </p>
    </div>
  );
};

export default MailboxStatus;
