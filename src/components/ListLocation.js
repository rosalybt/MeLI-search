import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ListLocation = ({ funcion, funcionLocation }) => {

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index, filterId) => {
        funcionLocation(funcion)
        setSelectedIndex(index);
        funcion(filterId);
        // alert('click')


    }


    return (

        <List component="nav" aria-label="main mailbox folders">
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0, "TUxBUEdSQXJlMDNm")}
            >
                <ListItemIcon>
                    <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Buenos Aires, Arg." />
            </ListItem>

            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1, "TUxBUEdSQWVmNTVm")}
            >
                <ListItemIcon>
                    <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Capital Federal" />
            </ListItem>
        </List>
    )
}

export default ListLocation