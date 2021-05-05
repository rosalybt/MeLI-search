
import { useEffect, useState } from 'react';
import './App.css';
import './components/Card.scss'
import './components/main.scss'
import Button from './components/Button'
import CardSimple from './components/CardSimple'
import CardDetails from './components/CardDetails'
import Nav from './components/Nav'
import AsideFilter from './components/AsideFilter'

function App() {

  let [products, setProducts] = useState([])
  let [productSelected, setSelectedProduct] = useState(false)
  let [search, setSearch] = useState('')
  let [idItem, setIdItem] = useState(0)
  let [description, setDescription] = useState('')
  let [inputValue, setInputValue] = useState('')
  let [checkShipping, setCheckShipping] = useState(false)
  let [searchByLocation, setSearchByLocation] = useState(false)

  useEffect(() => {

    fetch(search)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results || data)
        console.log('fetch', data)
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

  const shippingFilter = () => {
    setCheckShipping(!checkShipping)

  }

  const location = (filterId) => {
    setSearchByLocation(true)
    setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${inputValue}/states/${filterId}`)
  }



  const handleClickListOrder = (filterId) => {
    setSearch(`https://api.mercadolibre.com/sites/MLA/search?q=${inputValue}&sort=${filterId}`)
  }



  // console.log('productos', products)
  return (
    <>
      <Nav searchValue={searchValue}>

        <form>
          <Button type="submit" content="Buscar" />
        </form>
      </Nav>


      <main>

        <AsideFilter checkShipping={checkShipping} funcion={shippingFilter} funcionLocation={location} clickOrder={handleClickListOrder}  ></AsideFilter>


        <div className='container-cards'>

          {
            !productSelected && !checkShipping && products.length > 1 &&
            products.map(product => {
              // console.log(product)
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







          {  // console.log(camion)
            checkShipping && products.filter(pro => {
              return !pro.shipping.free_shipping
            }).map(product => {
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

          {  // console.log(camion)
            searchByLocation && products.map(product => {
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

        </div>
      </main>
    </>
  );
}

export default App;
