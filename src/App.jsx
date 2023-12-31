import { Card, CartDrawer, Header } from './Components';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 2701',
    price: 15600,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <CartDrawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((item) => {
            return (
              <Card key={item.name} name={item.name} price={item.price} imageUrl={item.imageUrl} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
