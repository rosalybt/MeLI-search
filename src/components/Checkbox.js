import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const checkBox = ({ checked, checkBxName, optionName, funcion }) => {

    const handleChange = () => funcion()

    return (
        <FormControlLabel
            control={<Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                name={checkBxName}
            />}
            label={optionName}
        />
    )

}

export default checkBox