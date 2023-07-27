function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>

        <div className="d-flex">
          <div className="card">
            <img src="/img/sneakers/1.jpg" alt="1" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 000 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.jpg" alt="1" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 000 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.jpg" alt="1" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 000 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.jpg" alt="1" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 000 сом.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
