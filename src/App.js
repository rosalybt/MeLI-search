
import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.scss'
import Button from './components/Button'
import CardSimple from './components/CardSimple'
import CardDetails from './components/CardDetails'
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


  const searchValue = (value) => {
    // debugger
    setSelectedProduct(false)
    setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
  }
  console.log(productSelected)
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
        {console.log('array foto', products)}
        {
          productSelected &&
          < CardDetails
            // img={products.pictures[0].secure_url}
            title={products.title}
            price={products.price}
            condition={products.condition}
            soldQuantity={products.sold_quantity}
            permalink={products.permalink}
          // description={products.descriptions}
          />
        }
      </div>
    </>
  );
}

export default App;
