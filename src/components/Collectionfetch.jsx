import React from "react";
import { useState, useEffect } from "react";

function Collectionfetch() {
  const [collection, setCollection] = useState([]);
  const getCollection = async () => {
    const resp = await fetch(`https://capstone-discogs.onrender.com/release`);
    const json = await resp.json();
    // console.log(json.resp.results);
    setCollection(json);
  };

  useEffect(() => {
    getCollection();
  }, []);
  console.log(collection);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          margin: 30,
        }}
      >
        My Collection
      </div>
      <div
        className="Search"
        style={{
          margin: 20,
        }}
      >
        {collection.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              border: "1px solid black",
              margin: 1,
              padding: 10,
            }}
            key={item.id}
          >
            <img src={item.Thumbnail} />
            <p>{item.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collectionfetch;
