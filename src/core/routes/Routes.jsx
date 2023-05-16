import { Route, Routes } from "react-router-dom";
import InboxPage from "../../components/pages/inbox-page/InboxPage";
import SpamPage from "../../components/pages/spam-page/SpamPage";
import TrashPage from "../../components/pages/trash-page/TrashPage";
import IndividualMailPage from "../../components/pages/individual-mail-page/IndividualMailPage";
import PageNotFound from "../../components/pages/page-not-found-page/PageNotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InboxPage />} />
      <Route path="/spam" element={<SpamPage />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="/mail/:mailId" element={<IndividualMailPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
