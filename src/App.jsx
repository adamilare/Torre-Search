import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Search from "./pages/search";
import NotFound from "./pages/NotFound";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/search" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
