import React, { useEffect, useState } from "react";
const IndexPage = () => {
  const [fetchedData, setFetchedData] = useState<string>("");
  useEffect(() => {
    fetch(
      `/.netlify/functions/firstfunction?name=Hello From First ServerLess Function`
    )
      .then((res) => res.json())
      .then((data) => setFetchedData(data.message));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Gatsby Stater For Serverless Function Hello World</h1>
      <h1>{fetchedData }</h1>
    </div>
  );
};
export default IndexPage;
