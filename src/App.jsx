import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Search from "./pages/search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
