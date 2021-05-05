import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBox from './Checkbox';
import Lista from './list'
import ListLocation from './ListLocation'



const useStyles = makeStyles((theme) => ({
    root: {
        width: '25%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion({ checkShipping, funcion, funcionLocation, clickOrder }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Costo de envio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CheckBox funcion={funcion} checkBxName="check" checked={checkShipping} optionName="Gratis" />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Ordenar por: </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Lista funcion={clickOrder} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Buscar por ubicacion:
                    
                    </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <ListLocation funcion={funcionLocation} funcionLocation={funcionLocation} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
