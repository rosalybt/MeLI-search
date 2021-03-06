import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import Button from './Button'

const CardDetails = ({ img, permalink, title, price, condition, soldQuantity, description }) => {

    const handleClick = () => window.open(permalink, "_blank")

    return (
        <Card className="cardDetails" data-id={id}>
            {shipping && <div className='content-icon'> <LocalShippingIcon fontSize="large" /></div>}
            <div className="img-product"><img src={img} alt="img"></img></div>

            {title && <h3 className=''>{title}</h3>}
            {price && <p>${price}</p>}

            <div>
                <Button content="Comprar" funcion={handleClick} id={id} ></Button>
            </div>
        </Card>
    )
}

export default CardDetails