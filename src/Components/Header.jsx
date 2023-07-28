import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" alt="png" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src="/img/cart.svg" alt="png" width={25} height={25} />
          <span>1205 сом.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="png" width={25} height={25} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
