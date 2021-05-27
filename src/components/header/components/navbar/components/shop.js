import React from "react";

import shopping_cart from "../../images/shopping-cart.svg";

const Shop = () => {
  return (
    <div className="navbar__shop">
      <img src={shopping_cart} alt="shopping-cart" />
      <div className="navbar__shop_current">
        <strong className="navbar__shop_length">{"2"}</strong>
      </div>
    </div>
  );
};

export default Shop;
