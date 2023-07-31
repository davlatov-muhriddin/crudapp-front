import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContent() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addCardContent = async (e) => {
    e.preventDefault();
    await axios.post("https://crudapp-rho.vercel.app/api/cardcontent/add", {
      imageUrl,
      title,
      description,
    });

    navigate("/");

    setImageUrl("");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container pt-5">
      <form onSubmit={addCardContent}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter Image Url"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <label htmlFor="image">Image Url</label>
        </div>
        <div className="d-flex gap-3">
          <div className="form-floating w-50">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Your Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title">Title</label>
          </div>

          <div className="form-floating w-50">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Your Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <button className="btn btn-success mt-3">Send</button>
      </form>
    </div>
  );
}

export default AddContent;
