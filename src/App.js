
import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.scss'
import Button from './components/Button'
// import Form from './components/Form'
import Card from './components/Card'
// import { EventOutlined } from '@material-ui/icons';

function App() {

  let [products, setProducts] = useState([])
  let [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data.results))

  }, [search])


  const handleKeyDown = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      setSearch(e.target.value)
    }

  }





  return (
    <>
      <form>
        <input onKeyPress={handleKeyDown} type="text"></input>
        <Button type="submit" content="Buscar" con />
        <div className='container-cards'>
          {products.map(product => {
            return <Card key={product.id} img={product.thumbnail}
              title={product.title}
              price={product.price}
              shipping={product.shipping.free_shipping} />
          })}
        </div>
      </form>

    </>


  );
}

export default App;
