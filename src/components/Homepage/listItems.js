import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Avatar from '@material-ui/core/Avatar';
import nus from '../Logos/nus.png';
import ntu from '../Logos/ntu.png';
import smu from '../Logos/smu.png';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/all">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="All Courses" />
    </ListItem>
    <ListItem button component="a" href="/profile">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button component="a" href="/forum">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Forum" />
    </ListItem>
    <ListItem button component="a" href="/compare">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Compare" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Links to Universities</ListSubheader>
    <ListItem button component="a" href="https://nus.edu.sg/">
      <ListItemIcon>
        <Avatar alt="nus" imgProps src={nus} />
      </ListItemIcon>
      <ListItemText primary="NUS" />
    </ListItem>
    <ListItem button component="a" href="https://www.ntu.edu.sg/">
      <ListItemIcon>
        <Avatar alt="ntu" imgProps src={ntu} />
      </ListItemIcon>
      <ListItemText primary="NTU" />
    </ListItem>
    <ListItem button component="a" href="https://smu.edu.sg/">
      <ListItemIcon>
        <Avatar alt="smu" imgProps src={smu} />
      </ListItemIcon>
      <ListItemText primary="SMU" />
    </ListItem>
  </div>
);