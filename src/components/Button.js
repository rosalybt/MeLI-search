import Button from '@material-ui/core/Button';

const ButtonSimple = ({ id, type, content, color, funcion }) => {

    const handleClick = () => funcion(id)

    return (
        <Button
            variant="outlined"
            color={color}
            type={type}
            onClick={handleClick}>
            {content}
        </Button>
    )
}

export default ButtonSimple