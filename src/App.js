
import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.scss'
import Button from './components/Button'
import CardSimple from './components/CardSimple'
import Nav from './components/Nav'
function App() {

  let [products, setProducts] = useState([])
  let [productSelected, setSelectedProduct] = useState(false)
  let [search, setSearch] = useState('')

  useEffect(() => {
    fetch(search)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results || data)
      })

  }, [search])


  const searchValue = (value) => setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)

  const searchById = (value) => {
    debugger
    setSelectedProduct(true)
    setSearch(`https://api.mercadolibre.com/items/${value}`)
  }


  return (
    <>
      <Nav searchValue={searchValue}>

        <form>
          <Button type="submit" content="Buscar" />
        </form>
      </Nav>

      <div className='container-cards'>

        {
          !productSelected &&
          products.map(product => {
            return <CardSimple
              showMore={searchById}
              key={product.id}
              id={product.id}
              img={product.thumbnail}
              title={product.title}
              price={product.price}
              shipping={product.shipping.free_shipping} />
          })
        }

        {
          productSelected &&
          < CardSimple
            showMore={searchById}
            key={products.id}
            id={products.id}
            img={products.secure_thumbnail}
            title={products.title}
            price={products.price}
            shipping={products.shipping.free_shipping}
          />
        }
      </div>
    </>
  );
}

export default App;
