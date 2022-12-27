import { SearchInput } from "@/components";
import { FormGroup, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function CrudProduct() {
  const location = useLocation();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [productoInfo, setProductInfo] = useState({
    description: "",
    title: "",
    price: "",
    category: "",
    image: "",
  });
  const stateCrud = location.pathname.split("/")[2];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    switch (stateCrud) {
      case "agregar":
        addProduct();
        break;
      case "actualizar":
        updateProduct();
      case "eliminar":
        deleteProduct();
    }
  };

  const addProduct = () => {
    axios({
      url: "https://fakestoreapi.com/products",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Author: "Iván Camilo Hernandez León",
      },
      data: {
        description,
        title,
        price,
        image,
        category,
      },
    })
      .then((res) => {
        alert(`Se creó el product ${res.data.title}`);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const updateProduct = () => {
    axios({
      url: "https://fakestoreapi.com/products/1",
      method: "PUT",
      data: {
        description,
        title,
        price,
        image,
        category,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearerToken")}`,
        Author: "Iván Camilo Hernandez León",
      },
    })
      .then((res) => {
        alert(`Se actualizó el producto ${res.data.title}`);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const deleteProduct = () => {
    axios({
      url: "https://fakestoreapi.com/products/1",
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearerToken")}`,
        Author: "Iván Camilo Hernandez León",
      },
    }).then((res) => {
      alert("Se eliminó el producto" + res.data.title);
      window.location.reload();
    });
  };
  if (stateCrud === "actualizar" || stateCrud === "agregar") {
    return (
      <>
        <SearchInput />
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <h2>{stateCrud.toUpperCase()} PRODUCTO</h2>
            <FormGroup
              row={true}
              style={{
                marginBottom: "1rem",
                gap: "20px",
              }}
            >
              <TextField
                id="filled-basic"
                label="Title"
                variant="filled"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Price"
                variant="filled"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
            <FormGroup row={true} style={{ marginBottom: "1rem", gap: "20px" }}>
              <TextField
                id="filled-basic"
                label="Description"
                variant="filled"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Image"
                variant="filled"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </FormGroup>
            <TextField
              id="filled-basic"
              label="Category"
              variant="filled"
              style={{ width: "100%" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              {stateCrud.toUpperCase()} Producto
            </Button>
          </Form>
        </ContainerForm>
      </>
    );
  } else {
    return (
      <>
        <SearchInput />
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <h2>{stateCrud.toUpperCase()} PRODUCTO</h2>
            <FormGroup
              row={true}
              style={{
                marginBottom: "1rem",
                gap: "20px",
              }}
            >
              <TextField
                id="filled-basic"
                label="Id del producto"
                variant="filled"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%" }}
              />
            </FormGroup>
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Eliminar Producto
            </Button>
          </Form>
        </ContainerForm>
      </>
    );
  }
}

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export default CrudProduct;
