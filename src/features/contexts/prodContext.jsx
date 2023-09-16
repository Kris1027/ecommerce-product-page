import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productAmount, setProductAmount] = useState(0);

  function handleDecreaseAmount() {
    if (productAmount === 0) return;
    setProductAmount(productAmount - 1);
  }

  function handleIncreaseAmount() {
    setProductAmount(productAmount + 1);
  }

  return (
    <ProductContext.Provider
      value={{
        productAmount,
        handleDecreaseAmount,
        handleIncreaseAmount,
        setProductAmount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
