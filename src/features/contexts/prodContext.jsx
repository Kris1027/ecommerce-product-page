import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productAmount, setProductAmount] = useState(0);
  const [addToCart, setAddToCart] = useState(false);

  function handleDecreaseAmount() {
    if (productAmount === 0) return;
    setProductAmount(productAmount - 1);
  }

  function handleIncreaseAmount() {
    setProductAmount(productAmount + 1);
  }

  function handleAddToCart(e) {
    e.preventDefault();
    setAddToCart(true);
  }

  return (
    <ProductContext.Provider
      value={{
        productAmount,
        handleDecreaseAmount,
        handleIncreaseAmount,
        setProductAmount,
        handleAddToCart,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
