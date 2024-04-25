import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/post";
import Header from "./components/Header";
import CreatePost from "./components/Createpost";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <Post></Post>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
