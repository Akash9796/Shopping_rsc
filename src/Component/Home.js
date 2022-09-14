import React, { useContext } from "react";
import { Cart } from "../Context/Context";
import styled from "styled-components";

export default function Home() {
  const { products, cart, setCart ,setLength } = useContext(Cart);

  const handleAdd = (i) => {
    setCart([...cart, i]);
    console.log(cart);
    setLength(cart.length+1);
  };
  const handleRemove = (i) => {
    setCart(cart.filter((c)=> c.id!==i.id));
    setLength(cart.length-1);

  };

  return (
    <div>
      <CartBox>
        {products.map((i) => {
          return (
            <Box key={i.id}>
              <img src={i.image} alt=""/>
              <h4>{i.title}</h4>
              <h4>{i.price}</h4>
              {(cart.includes(i)) ? (  
                <button onClick={() => handleRemove(i)}>Remove from cart</button>
              ) : (
                <button onClick={() => handleAdd(i)}>Add to cart</button>
              )
              }
            </Box>
          );
        })}
      </CartBox>
    </div>
  );
}

const CartBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  overflow: hidden;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  max-width: 300px;
  padding: 10px;
  img {
    width: 50%;
  }
  button {
    color: white;
    width: 60%;
    padding: 5px;
    font-size: 1.1rem;
    background: black;
    border: none;
    border-radius: 10px;
  }
`;
