import { useEffect, useState } from "react";
import { SearchInput } from "@/components";
import axios from "axios";
import { Product } from "@/models";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [products, setProduct] = useState<Product[]>([
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
    setLoading(true);
    axios({
      method: "POST",
      url: `${import.meta.env.VITE_BASE_API_URL}/auth/login`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Author: "Iván Camilo Hernandez León",
      },
      data: {
        username: "mor_2314",
        password: "83r5^_",
      },
    })
      .then((data) => {
        localStorage.setItem("BearerToken", JSON.stringify(data.data.token));
        setIsLogin(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [setIsLogin]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearerToken")}`,
        Author: "Iván Camilo Hernandez León",
      },
    })
      .then((data) => {
        localStorage.setItem("fakestore", JSON.stringify(data.data));
        setProduct(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProduct]);

  if (isLoading) {
    return <h3>Autenticando...</h3>;
  } else {
    return <>{<SearchInput />}</>;
  }
};
export default Login;
