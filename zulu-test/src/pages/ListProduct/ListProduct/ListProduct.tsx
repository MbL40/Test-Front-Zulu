import { SearchInput } from "@/components";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Product } from "@/models";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const ListProduct = () => {
  const history = useNavigate();
  const [searchParam] = useSearchParams();
  const [filterProduct, setFilterProduct] = useState<Product[]>([
    {
      category: "",
      count: 0,
      description: "",
      id: "",
      image: "",
      rate: 0,
      price: "",
      title: "",
    },
  ]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParam]);
    const productsStore = JSON.parse(localStorage.getItem("fakestore") || "");
    if (productsStore) {
      const filterObj = productsStore.filter((product: Product) => {
        return product.title.toLowerCase().includes(currentParams.search);
      });
      localStorage.setItem("filterList", JSON.stringify(filterObj.slice(0, 4)))
      setFilterProduct(filterObj.slice(0, 4));
    }
  }, [searchParam]);

  const detailProduct = (product: Product) => {
    history({
      pathname: `/products/${product.id}`,
    });
  };

  return (
    <>
      <SearchInput />
      <div className="containerBread">
        <BreadCrumbs />
      </div>
      <ContainerList>
        {filterProduct.map((product) => (
          <Card
            key={product.id}
            onClick={() => {
              detailProduct(product);
            }}
          >
            <CardImagen src={product.image} alt={product.title} />
            <CardContent>
              <p style={{ fontSize: "24px" }}>$ {product.price}</p>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>{product.title}</div>
                <div style={{ width: "100%", textAlign: "center" }}>
                  {product.category}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </ContainerList>
    </>
  );
};

export default ListProduct;

export const ContainerList = styled.div`
  width: 1190px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 40px;
  background-color: #fff;
  padding: 1rem;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardImagen = styled.img`
  object-fit: contain;
  width: 150px;
  height: 200px;
  margin-right: 2rem;
`;
