import { useState } from "react";
import axios from "axios";

const JobSearch = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:5000/api/search/jobpost", {
        params: {
          title: title,
          location: location,
        },
      })
      .then((response) => {
        console.log(response.data);
        // Navigate to job listing page with search results
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên công việc"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Địa điểm"
        value={location}
        onChange={handleLocationChange}
      />
      <button type="submit">Tìm kiếm</button>
    </form>
  );
};

export default JobSearch;
