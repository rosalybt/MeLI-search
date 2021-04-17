import Button from '@material-ui/core/Button';

const ButtonSimple = ({ type, content, color, funcion, variant = "outlined", icon }) => {

    const handleClick = () => funcion()

    return (
        <Button
            variant={variant}
            color={color}
            type={type}
            startIcon={icon}
            onClick={handleClick}>
            {content}
        </Button>
    )
}

export default ButtonSimple