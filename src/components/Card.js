import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './Card.scss'
const Card = ({ img, shipping, title, price }) => {
    return (
        <article className="card">
            {shipping && <div className='content-icon'> <LocalShippingIcon fontSize="large" /></div>}
            <div className="img-product"><img src={img} alt="img"></img></div>

            {title && <h2 className=''>{title}</h2>}
            {price && <p>${price}</p>}
        </article>
    )
}

export default Card