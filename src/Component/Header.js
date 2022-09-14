import styled from "styled-components";

import React, { useContext, useState } from "react";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "../Context/Context";

export default function Header() {
  const { cart, setCart, length, setLength } = useContext(Cart);

  const [drop, setDrop] = useState(false);

  const Del =(i)=>{
    setCart(cart.filter((c)=> c.id!==i.id));
    setLength(cart.length-1);

  }

  return (
    <Nav>
      <Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          Shopping<span>Cart</span>
        </Link>
      </Logo>
      <FormControl
        style={{ margin: 5, width: 500, height: 30, fontSize: 15 }}
        placeholder="Search Items"
        className="auto"
      />

      <Dropdown onClick={() => setDrop(!drop)}>
        <span>🛒{length}</span>
      </Dropdown>
        <DropdownMenu drop={drop}>
          {cart ? (
            cart.map((i) => {
              return (
                <>
                  <Menu>
                    <img src={i.image} alt="" />
                    <div>{i.title}</div>
                    <div>Price:{i.price}</div>
                    <button onClick={()=>Del(i)}>🎁</button>
                  </Menu>
                  <hr />
                </>
              );
            })
          ) : (
            <span>Cart is Empty</span>
          )}
          <button>
            <Link to="/Cart" style={{ color: "white", textDecoration: "none" }}>
              Go to cart
            </Link>
          </button>
        </DropdownMenu>
    </Nav>
  );
}

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Logo = styled.div`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  list-style: none;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Dropdown = styled.div`
  span {
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
    padding: 2px;
    background: green;
    border-radius: 10px;
    position: relative;
  }
`;
const DropdownMenu = styled.div`
  display: ${({ drop }) => (drop ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 2px;
  font-size: 1rem;
  position: absolute;
  border-radius: 5px;
  width:30%;
  top:50px;
  right: 10px;
  background: white;
  hr {
    width: 250px;
  }
  button {
    width: 30%;
    padding: 5px;
    font-size: 1.1rem;
    background: black;
    border: none;
    border-radius: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    padding: 0 20px;
  }
  img {
    width: 50px;
  }
`;
// const Nav = styled.div``;
