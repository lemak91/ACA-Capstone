import Search from "./Search";
import Sidebar from "./Sidebar"

function Home() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'row',
      minWidth: '100%'
      }}>
      <Sidebar />
      <Search />
    </div>
  );} 

export default Home;
