import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/v1/api");
      const data = await res.json();

      if (data) {
        setMessage(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl">Welcome to brainiark</h1>
      {message && <p>{message}</p>}
    </>
  );
};

export default App;
