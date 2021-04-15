
import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.scss'
import Button from './components/Button'
// import Form from './components/Form'
import CardSimple from './components/Card'
// import { EventOutlined } from '@material-ui/icons';
// import InputBase from '@material-ui/core/InputBase';
import Nav from './components/Nav'
function App() {

  let [products, setProducts] = useState([])
  let [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data.results))

  }, [search])


  const searchValue = (value) => {

    setSearch(value)


  }





  return (
    <>


      <Nav searchValue={searchValue}>

        <form>
          <Button type="submit" content="Buscar" />
        </form>
      </Nav>

      <div className='container-cards'>
        {products.map(product => {
          return <CardSimple key={product.id} img={product.thumbnail}
            title={product.title}
            price={product.price}
            shipping={product.shipping.free_shipping} />
        })}

      </div>


    </>


  );
}

export default App;
