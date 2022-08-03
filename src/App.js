import React, { useEffect, useState } from "react";
import { Table, SearchInput } from "./component";
import "./App.css";

function App() {
  const columns = React.useMemo(
    () => [
      {
        title: "Name",
      },
      {
        title: "Username",
      },
      {
        title: "Email",
      },
      {
        title: "Phone",
      },
    ],
    []
  );

  const [datas, setDatas] = useState([]);

  const [backUp, setBackUp] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setDatas(json);
        setBackUp(json);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchInput = (e) => {
    e.preventDefault();
    const indicator = search.search("@");
    if (indicator > 0) {
      const filter = datas.filter(
        (data) => data.email.toLowerCase() === search.toLowerCase()
      );
      setDatas(filter);
    } else if (search === "") {
      setDatas(backUp);
    } else {
      const filter = datas.filter(
        (data) => data.name.toLowerCase() === search.toLowerCase()
      );
      setDatas(filter);
    }
    setSearch("");
  };

  return (
    <div className="App">
      <h2 className="title">User List</h2>
      <SearchInput
        handleChange={handleChange}
        searchInput={searchInput}
        value={search}
      />
      <Table datas={datas} columns={columns} loading={loading} />
    </div>
  );
}

export default App;
