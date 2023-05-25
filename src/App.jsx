import Header from "./components/header/header";
import { createBrowserHistory } from "history";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PostsPage from "./pages/posts/postsPage";
import AboutMePage from "./pages/AboutMe/AboutMePage";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/about" element={<AboutMePage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
