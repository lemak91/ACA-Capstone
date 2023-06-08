import axios from "axios";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import { Box } from "@mui/material";

import "../Search.css";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div style={{ minWidth: "90%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
          Search through Discogs database of records and add them to your
          collection!
        </div>
        <div className="Search" style={{ margin: 20 }}>
          <input
            style={{
              width: 350,
              border: "3px solid",
              background: "transparent",
              padding: "15px 30px",
              borderRadius: "50px",
              outline: "none",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button
            style={{ marginLeft: "10px" }}
            onClick={async () => {
              const resp = await fetch(
                `http://localhost:4000/search?artist=${query}`
              );
              const json = await resp.json();
              console.log(json.resp.results);
              setSearchResult([...json.resp.results]);
              // console.log(searchResult);
            }}
          >
            Search
          </button>
        </div>

        <div
          className="Search"
          style={{
            margin: 20,
          }}
        >
          {searchResult.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                fontSize: "32px",
                fontWeight: "bold",
              }}
              key={item.id}
            >
              <img src={item.thumb} />
              {item.title}{" "}
              <Box
                sx={{
                  "& > :not(style)": {
                    m: -0.001,
                  },
                }}
              >
                <Icon sx={{ margin: "none" }}>add_circle</Icon>{" "}
                <p style={{ fontSize: 17, display: "inline" }}>
                  Add to Collection
                </p>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

// function Search() {
//   const [input, setInput] = useState("");
//   console.log(input);

//   const search = () => {
//     axios
//       .get(
//         "https://api.discogs.com/oauth/identity",
//         // `https://api.discogs.com/database/search?${input}&{?title,release_title,artist,label}`
//         // `https://api.discogs.com/database/search?artist=${input}`
//         // "https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1",
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             Authorization: {
//               "OAuth oauth_consumer_key": "MieGBYUBZfycgTModAOD",
//               "oauth_nonce": "random_string_or_timestamp",
//               "oauth_signature": "BEHTbOwaacKGgntUjvCUBLVwZdkbfkmX&",
//               "oauth_signature_method": "PLAINTEXT",
//               "oauth_timestamp": Date.now(),
//               "oauth_callback": "your_callback",
//             },
//             "User-Agent": "ThisIsTheLemakUserAgent",
//           },
//         }
//       )

//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     search();
//   }, [input]);

//   return (
//     <form>
//       <TextField
//         id="search-bar"
//         className="text"
//         onChange={(e) => setInput(e.target.value)}
//         label="Search Release"
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//       />
//       <IconButton type="submit" aria-label="search">
//         <SearchIcon style={{ fill: "blue" }} />
//       </IconButton>
//     </form>
//   );
// }

// export default Search;
