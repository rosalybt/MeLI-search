import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/Inbox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import DraftsIcon from '@material-ui/icons/Drafts';

const Lista = ({ funcion }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }));


    // const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index, id) => {
        setSelectedIndex(index);
        funcion(id)
    }


    return (

        <List component="nav" aria-label="main mailbox folders">
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0, "price_desc")}
            >
                <ListItemIcon>
                    <ArrowUpwardIcon />
                </ListItemIcon>
                <ListItemText primary="Mas caro" />
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1, "price_asc")}
            >
                <ListItemIcon>
                    <ArrowDownwardIcon />
                </ListItemIcon>
                <ListItemText primary="Mas barato" />
            </ListItem>
        </List>
    )
}

export default Lista