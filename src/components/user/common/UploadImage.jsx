import React from "react";
import api from "../../../services/axiosConfig";

const UploadImage = () => {
  const [image, setImage] = React.useState(null);
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    } else {
      try {
        const formData = new FormData();
        formData.append("image", image);
        console.log(formData, "formData");

        const response = await api.post("/upload", formData);
        console.log(response, "response");
        alert("Image uploaded successfully!");
      } catch (error) {
        console.log(error, "error in upload");
      }
    }
  };
  return (
    <div>
      <h2>Uppload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
