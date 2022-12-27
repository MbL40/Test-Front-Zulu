import { SearchInput } from "@/components";
import { Product } from "@/models";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function DetailProduct() {
  let searchParams = useLocation();
  const [detailProduct, setDetailProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const idProduct = searchParams.pathname.split("/")[2];
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_BASE_API_URL}/products/${idProduct}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearerToken")}`,
        Author: "Iván Camilo Hernandez León",
      },
    })
      .then((data) => {
        setDetailProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <span>Cargando...</span>;
  } else {
    return (
      <>
        <div
          className="container"
          style={{
            maxWidth: "935px",
            margin: "0 auto",
            padding: "1rem",
            marginTop: "3rem",
          }}
        >
          <CardDetail>
            <CardDetailLeft>
              <img src={detailProduct?.image} width="400px"></img>
              <div>
                <h2>Descripción del producto</h2>
                <p>{detailProduct?.description}</p>
              </div>
            </CardDetailLeft>
            <div>
              <h3> {detailProduct?.title} </h3>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                }}
              >
                $ {detailProduct?.price}{" "}
              </p>
              <ButtonBuy>Comprar</ButtonBuy>
            </div>
          </CardDetail>
        </div>
        <SearchInput />
      </>
    );
  }
}

export default DetailProduct;

export const CardDetail = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1rem;
`;

export const CardDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const ButtonBuy = styled.div`
  width: auto;
  text-align: center;
  color: #fff;
  background-color: #558af9;
  padding: 1rem;
`;
