
import Card from '@material-ui/core/Card';
import Button from './Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const CardDetails = ({ img, permalink, title, price, condition, soldQuantity, description = "No disponible", goBack }) => {

    const handleClick = () => window.open(permalink, "_blank")

    return (
        <Card className="card-details">
            <div>
                <Button content="atras" color="default" funcion={goBack} icon={<ArrowBackIosIcon />}></Button>
            </div>

            <div className="img-item">
                <img src={img} alt="img"></img>
            </div>
            <div className="info">
                <div className="more-info">
                    {<h2>{title}</h2>}
                    {<span>{`${condition} | ${soldQuantity} vendidos`}</span>}

                    {/* {<h4>Precio:{(price).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'ARS',
                    })}</h4>} */}

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