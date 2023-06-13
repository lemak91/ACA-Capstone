import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Collectionfetch from "./Collectionfetch";
import { useState, useEffect } from "react";

function Collection() {
  // const [collection, setCollection] = useState([]);
  // const getCollection = async () => {
  //   const resp = await fetch(`http://localhost:4000/release`);
  //   const json = await resp.json();
  //   // console.log(json.resp.results);
  //   setCollection(json);
  // };

  // useEffect(() => {
  //   getCollection();
  // }, []);
  // console.log(collection);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minWidth: "100%",
          minHeight: 1000,
          flexWarp: "wrap",
        }}
      >
        {/* <div>
        My Collection
      </div>
      <div>
        {collection.map((item) => (
          <div
            key={item.id}
          >
            <img src={item.Thumbnail} />
            <p>{item.Title}</p>
          </div>
        ))}
      </div> */}
        <Sidebar />
        <Collectionfetch />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Collection;
