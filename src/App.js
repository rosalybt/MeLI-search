
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
  let [idItem, setIdItem] = useState(0)
  let [description, setDescription] = useState('')
  let [inputValue, setInputValue] = useState('')

  useEffect(() => {

    fetch(search)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results || data)
      })

  }, [search])

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${idItem}/description`)
      .then(res => res.json())
      .then(data => {
        setDescription(data.plain_text)
      })

  }, [idItem])


  const searchValue = (value) => {
    setInputValue(value)
    setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
    setSelectedProduct(false)

  }

  const searchById = (value) => {
    setIdItem(value)
    setSelectedProduct(true)
    setSearch(`https://api.mercadolibre.com/items/${value}`)

  }

  const goBack = () => {
    setSelectedProduct(false)
    setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${inputValue}`)
  }
  console.log('array productos fuera', products)
  return (
    <>
      <Nav searchValue={searchValue}>

        <form>
          <Button type="submit" content="Buscar" />
        </form>
      </Nav>

      <div className='container-cards'>

        {
          !productSelected && products.length > 1 &&
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
          < CardDetails
            img={products.pictures && products.pictures.length && products.pictures?.[0].secure_url}
            title={products.title}
            price={products.price}
            condition={products.condition}
            soldQuantity={products.sold_quantity}
            permalink={products.permalink}
            description={description}
            goBack={goBack}
          />
        }
      </div>
    </>
  );
}

export default App;
