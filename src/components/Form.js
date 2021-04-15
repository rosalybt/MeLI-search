import Input from './Input'
import Button from './Button'


const Form = ({ handleInput }) => {
    return (

        <form>
            <Input handleInput={handleInput}></Input>
            <Button type="submit" content="Buscar" color="primary" />
        </form>
    )
}

export default Form