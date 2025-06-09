import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  console.log(apiUrl);

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("Please add a valid file and submit");
      return;
    }

    const formData = new FormData();
    formData.append("uploaded_file", file);

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/file/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Submission Successfull", response.data);
    } catch (error) {
      console.log("Error in submmission file", error);
    }
  };

  const handleFileChange = (e) => {
    setFile((prev) => e.target.files[0]);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="uploaded_file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
