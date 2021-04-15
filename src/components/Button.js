import Button from '@material-ui/core/Button';
const ButtonSimple = ({ type, content, color, funcion }) => {

    const handleClick = (e) => {
        console.log(e.target.value)
    }

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