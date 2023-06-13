import Search from "./Search";
import Sidebar from "./Sidebar"
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minWidth: "100%",
          minHeight: 1000,
          flexWarp: 'wrap'
        }}
      >
        <Sidebar />
        <Search />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );} 

export default Home;
