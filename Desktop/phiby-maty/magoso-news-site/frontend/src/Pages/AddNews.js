import styled from "styled-components";
import { useState } from "react";
import Nav from "../Components/Nav";

const NewsCont = styled.div`
//padding: 1em;
// text-align:center;
// `;
const Div = styled.div`
//   width: 80%;
//   margin: 0 auto;
// `;
const ImgInput = styled.div``;
const P = styled.p``;
const Input = styled.input`
// //   padding: 1em;
//   font-size: 1rem;
//  border: none;
// outline: none;
// //   box-shadow: 0 0 5px lightgrey;
// //   width: 700px;
`;
const Article = styled.div`
  padding: 0.5em 0;
`;
const Label = styled.label`
//   font-size: 1rem;
// // //   display: block;
// //   width: 150px;
// // `;
const Container = styled.div`
   display: flex;
  align-items: center;
//   gap: 1em;
  margin: 0.5em 0;
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  padding: 1em 2.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  color: ;
  box-shadow: 0 0 5px lightgrey;
  font-size: 1rem;
`;


const AddNews = () => {
  const [stateData, setStateData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    body: "",
    category: "",
    tags: []
  });

  const [error, setError] = useState({
    imageError: "",
    titleError: "",
    authorError: "",
    descriptionError: "",
    bodyError: "",
    categoryError: "",
    tagsError: []
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    const CLOUDINARY_URL =
      "https://api.cloudinary.com/v1_1/daxw1ffrz/image/upload";
    const CLOUDINARY_UPLOAD_PRESET = "magosotoday";
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setStateData((prev) => ({ ...prev, image: data.secure_url }));
        if (data.secure_url !== "") {
          const uploadedFileUrl = data.secure_url;
          localStorage.setItem("passportUrl", uploadedFileUrl);
        }
      })

      .catch((err) => console.error(err));
  };
  const HandleAddNews = async () => {
    try {
      if (stateData.image === "") {
        setError({ ...error, imageError: "Enter your image " });
      }
      if (stateData.title === "") {
        setError({ ...error, titleError: "Enter your title" });
      }
      if (stateData.author === "") {
        setError({ ...error, authorError: "Enter your author's name" });
      }
      if (stateData.description === "") {
        setError({ ...error, descriptionError: "Enter your describ" })
      }
      if (stateData.body === "") {
        setError({ ...error, bodyError: "Enter your body" });
      }
      if (stateData.category === "") {
        setError({ ...error, categoryError: "Enter your category" });
      }
      if (stateData.tags === "") {
        setError({ ...error, tagsError: "Enter your tag" });
      }

      else {
        const response = await fetch("http://localhost:4000/api/posts/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(stateData),
        });
        const responseJson = await response.json();
        // console.log(error)
        console.log(responseJson);
        console.log(JSON.stringify(stateData));
        if (response.ok) {
          setStateData({
            title: "",
            author: "",
            description: "",
            body: "",
            category: "",
            tags: "",
          })
        }

      }
    }
    catch (error) {

    }
  }




  return (
    <NewsCont>
      <Nav />
      <Div>
        <Container>
          <Label>Image:</Label>
          <ImgInput>
            <P style={{ color: "red" }}></P>

            <Input type="file" onChange={(e) => handleImageChange(e)} />
          </ImgInput>
        </Container>
        <Article>
          <Container>
            <P style={{ color: "red" }}>{error.titleError} </P>
            <Label>Title:</Label>
            <Input value={stateData.title} type="text" onChange={(e) => setStateData((prev) => ({ ...prev, title: e.target.value }))} />
          </Container>

          <Container>
            <P style={{ color: "red" }}>{error.authorError} </P>
            <Label>Author:</Label>
            <Input value={stateData.author} type="text" required onChange={(e) => setStateData((prev) => ({ ...prev, author: e.target.value }))} />
          </Container>

          <Container>
            <P style={{ color: "red" }}>{error.descriptionError} </P>
            <Label>Description:</Label>
            <Input value={stateData.description} type="text" required onChange={(e) => setStateData((prev) => ({ ...prev, description: e.target.value, }))} />
          </Container>

          <Container>
            <P style={{ color: "red" }}>{error.bodyError} </P>
            <Label>Body:</Label>
            <Input value={stateData.body} type="text" required onChange={(e) => setStateData((prev) => ({ ...prev, body: e.target.value }))} />
          </Container>

          <Container>
            <P style={{ color: "red" }}>{error.categoryError} </P>
            <Label>Category:</Label>
            <Input value={stateData.category} type="text" required onChange={(e) => setStateData((prev) => ({ ...prev, category: e.target.value }))} />
          </Container>
          <Container>
            <P style={{ color: "red" }}>{error.tagsError} </P>
            <Label>Tags:</Label>
            <Input value={stateData.tags} type="text" onChange={(e) => { const tags = e.target.value.split(","); setStateData((prev) => ({ ...prev, tags })); }} />
          </Container>
        </Article>
        <Button onClick={() => HandleAddNews()}>Add News</Button>
      </Div>
    </NewsCont>
  );
};
export default AddNews;
