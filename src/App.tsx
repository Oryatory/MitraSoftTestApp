import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import PostsPage from "./pages/postsPage/postsPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import UserPostsPages from "./pages/UserPostsPage.tsx/UserPostsPages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/users/:id" element={<UserPostsPages />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
