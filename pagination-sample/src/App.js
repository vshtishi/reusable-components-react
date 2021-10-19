import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  console.log(data)
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Sample Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <div className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key="follower.id" {...follower} />
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
