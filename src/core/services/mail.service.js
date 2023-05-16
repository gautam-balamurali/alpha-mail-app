import { apiEndpoint } from "../../config/app-config";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === apiEndpoint) {
        resolve({
          status: 200,
          message: "Success",
          data: {
            mails: [
              {
                mId: "guid-1",
                unread: false,
                isStarred: false,
                subject: "Training Program",
                content:
                  "About Microsoft Virtual Academy: Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
                mailbox: "inbox",
                fromMailAddress: "satya@microsoft.com",
                from: "Microsoft Team",
              },
              {
                mId: "guid-2",
                unread: true,
                isStarred: false,
                subject: "Empower your future",
                content:
                  "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
                mailbox: "inbox",
                fromMailAddress: "satya@microsoft.com",
                from: "Microsoft Team",
              },
              {
                mId: "guid-3",
                unread: true,
                isStarred: true,
                subject: "Pre Approved Loan",
                content:
                  "Congratulations! Credit card is being shipped to you today!",
                mailbox: "inbox",
                fromMailAddress: "loan@pnb.com",
                from: "PNB Bank",
              },
              {
                mId: "guid-4",
                unread: true,
                isStarred: false,
                subject: "You won a lottery!",
                content:
                  "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
                mailbox: "spam",
                fromMailAddress: "angel123@gmail.com",
                from: "Angel Priya",
              },
              {
                mId: "guid-5",
                unread: true,
                isStarred: false,
                subject: "Invact Finance Program",
                content:
                  "About Microsoft Virtual Academy: Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
                mailbox: "inbox",
                fromMailAddress: "satya@microsoft.com",
                from: "Microsoft Team",
              },
              {
                mId: "guid-6",
                unread: false,
                isStarred: false,
                subject: "neoG Camp Interview",
                content:
                  "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
                mailbox: "inbox",
                fromMailAddress: "tany@neog.com",
                from: "NeoG",
              },
              {
                mId: "guid-7",
                unread: true,
                isStarred: false,
                subject: "Pre Approved Loan 1",
                content:
                  "Congratulations! Credit card is being shipped to you today!",
                mailbox: "inbox",
                fromMailAddress: "loan@sbi.com",
                from: "SBI Bank",
              },
              {
                mId: "guid-8",
                unread: true,
                isStarred: false,
                subject: "You won a lottery! 8th time",
                content:
                  "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
                mailbox: "spam",
                fromMailAddress: "angel@gmail.com",
                from: "Angel Maria",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Mails not found.",
        });
      }
    }, 2000);
  });
};
