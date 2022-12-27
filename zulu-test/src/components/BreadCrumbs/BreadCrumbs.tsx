import { Product } from "@/models";
import { Box, Breadcrumbs, Link } from "@mui/material";
import { useEffect, useState } from "react";
function BreadCrumbs() {
  const [category, setCategory] = useState([""]);
  useEffect(() => {
    const list: [] = JSON.parse(localStorage.getItem("filterList") || "");
    const itemCategory = list.map((product: Product) => {
      return product.category;
    });
    setCategory(itemCategory);
  }, []);
  return (
    <Box marginTop={10}>
      <Breadcrumbs>
        <Link underline="hover" href="#">
          Inicio
        </Link>
        <Link> {category[0]} </Link>
      </Breadcrumbs>
    </Box>
  );
}
export default BreadCrumbs;
