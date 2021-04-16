
import Card from '@material-ui/core/Card';
import Button from './Button'

const CardDetails = ({ img, permalink, title, price, condition, soldQuantity, description = "No disponible" }) => {

    const handleClick = () => window.open(permalink, "_blank")

    return (
        <Card className="card-details">
            <div className="img-item">
                <img src={img} alt="img"></img>
            </div>
            <div className="info">
                <div className="more-info">
                    {title && <h2>{title}</h2>}
                    {(condition || soldQuantity) && <span>{`${condition} | ${soldQuantity} vendidos`}</span>}

                    {price && <h4>Precio:{(price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'ARS',
                    })}</h4>}
                    <br></br>
                    {<p>{description}</p>}
                </div>
                <div>
                    <Button content="Comprar" funcion={handleClick} variant="contained" color="secondary"></Button>
                </div>
            </div>

        </Card>
    )
}

export default CardDetails