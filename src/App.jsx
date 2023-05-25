import Header from "./components/header/header";
import { createBrowserHistory } from "history";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PostsPage from "./pages/posts/postsPage";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostsPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
