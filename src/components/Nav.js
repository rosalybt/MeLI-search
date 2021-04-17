import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const Nav = ({ searchValue }) => {

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            searchValue(e.target.value)
        }

    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 4,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            marginLeft: theme.spacing(8),
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(8),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '70ch',
            },
        },

    }));
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar >

                <Typography variant="h6" className={classes.title} >
                    {" MeLi Search"}
                </Typography>
                <InputBase
                    placeholder="Buscar"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onKeyPress={handleKeyDown}
                    inputProps={{ 'aria-label': 'search' }}
                />

            </Toolbar>
        </AppBar >
    )
}

export default Nav