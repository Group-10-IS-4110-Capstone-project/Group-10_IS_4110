import React, { useState } from "react";
import "./Advertistement.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const userid = localStorage.getItem("userid");

  //     const postData = {
  //       Subject: title,
  //       Description: description,
  //     };

  //     const formData = new FormData();
  //     formData.append("Picture", image);

  //     formData.append("data", JSON.stringify(postData));

  //     const response = await fetch(
  //       `http://localhost:3001/content/create/${userid}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(postData),
  //       }
  //     );

  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error("Failed to create post");
  //     }
  //     // const data = await response.json();
  //     console.log("Response:", data);
  //     // You can display a success message to the user or redirect to another page

  //     const imageFormData = new FormData();
  //     imageFormData.append("image", image);

  //     const imageResponse = await fetch("http://localhost:3001/upload/upload", {
  //       method: "POST",
  //       body: imageFormData,
  //     });

  //     if (!imageResponse.ok) {
  //       throw new Error("Failed to upload image");
  //     }else{
  //       console.log(imageResponse)
  //     }

  //     setTitle("");
  //     setDescription("");
  //     setImage(null);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     // Handle errors, such as displaying an error message to the user
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://localhost:3001/upload/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    console.log(data.imagePath);
    contenupload(data.imagePath);
    setShowForm(false);
    alert("Post successfully created!");

    setTitle("");
    setDescription("");
    setImage(null);

    event.target.reset();
  };

  const contenupload = async (imagefile) => {
    const userid = localStorage.getItem("userid");

    const postData = {
      Subject: title,
      Description: description,
      Picture: imagefile,
    };

    const response = await fetch(
      `http://localhost:3001/content/create/${userid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    // const data = await response.json();
    console.log("Response:", data);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create Post</h5>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <label for="inputNanme4" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNanme4"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <label for="inputEmail4" className="form-label ">
                Description
              </label>
              <textarea
                id="subject"
                className="form-control"
                placeholder="Write something.."
                name="description"
                value={description}
                onChange={handleInputChange}
              ></textarea>
              {/* <input type="email" className="form-control dis" id="inputEmail4"/> */}
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="inputAddress"
                placeholder="upload image"
                onChange={handleImageChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
