import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default App;
