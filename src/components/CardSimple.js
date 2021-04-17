import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import Button from './Button'

const CardSimple = ({ id, img, shipping, title, price, showMore }) => {
    const handleClick = () => { showMore(id) }
    return (
        <Card className="card">
            {shipping && <div className='content-icon'> <LocalShippingIcon fontSize="large" /></div>}
            <div className="img-product"><img src={img} alt="img"></img></div>

            {title && <h3 className=''>{title}</h3>}
            {price && <p>${price}</p>}

            <div>
                <Button content="Ver mas" funcion={handleClick} id={id} ></Button>
            </div>
        </Card>
    )
}

export default CardSimple