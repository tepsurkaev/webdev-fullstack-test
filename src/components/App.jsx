import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import PostPage from "../redux/features/PostPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
