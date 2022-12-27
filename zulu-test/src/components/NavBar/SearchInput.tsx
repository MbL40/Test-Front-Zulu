import styled from "styled-components";

import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
const options = [
  "Agregar producto",
  "Actualizar producto",
  "eliminar producto",
];

const SearchInput = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchInput, setSearchInput] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setSearchInput(searchInput);
  }, [searchInput]);

  const handleInputSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
    if (e.key === "Enter") {
      goToListProducts();
    }
  };

  const goToListProducts = () => {
    if (searchInput) {
      history({
        pathname: "/products",
        search: `search=${searchInput.toLowerCase()}`,
      });
    }
  };

  const goToCrudProducts = (e: React.MouseEvent) => {
    let menuItem = (e.target as HTMLInputElement).outerText.toLowerCase();
    history(`../product/${menuItem}`, { replace: true });
  };

  return (
    <>
      <NavContainer>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            {<MenuIcon />}
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                // maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem
              onClick={(e) => {
                goToCrudProducts(e);
              }}
            >
              Agregar
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                goToCrudProducts(e);
              }}
            >
              Actualizar
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                goToCrudProducts(e);
              }}
            >
              Eliminar
            </MenuItem>
          </Menu>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="http://localhost:5173/src/assets/Logo_ML.png"
            style={{ marginRight: "20px", height: "30px" }}
          ></img>
          <InputSearcher
            placeholder="Nunca dejes de buscar"
            onKeyUp={handleInputSearch}
          />
          <IconSearcher
            src="http://localhost:5173/src/assets/ic_Search.png"
            onClick={goToListProducts}
          />
        </div>
      </NavContainer>
    </>
  );
};

export default SearchInput;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff159;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const InputSearcher = styled.input`
  width: 60%;
  font-size: 16px;
  padding: 16px;
  height: 10px;
  border: none;
  outline: none;
`;

const IconSearcher = styled.img`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translateY(-50%);
`;
