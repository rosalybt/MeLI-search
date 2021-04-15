const Button = ({ type, content, handleClick }) => {
    return (
        <button type={type} onClick={handleClick}>
            {content}
        </button>
    )
}

export default Button