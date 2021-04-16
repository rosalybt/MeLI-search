import Button from '@material-ui/core/Button';

const ButtonSimple = ({ id, type, content, color, funcion, variant = "outlined", icon }) => {

    const handleClick = () => funcion(id)

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