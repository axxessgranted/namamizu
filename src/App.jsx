import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import About from "./routes/About";
import PostPage from "./routes/PostPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:year/:month/:day/:slug" element={<PostPage />} />
      </Routes>
    </Layout>
  );
}
