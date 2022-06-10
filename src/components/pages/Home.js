import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';


const Home = () => (
  <div>
    <div>
      <List component="nav">
        <ListItem button component="a" href="/board">
          <ListItemIcon>
            <Icon>view_headline</Icon>
          </ListItemIcon>
          <ListItemText primary="ボード１" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>view_headline</Icon>
          </ListItemIcon>
          <ListItemText primary="ボード２" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Icon>settings</Icon>
          </ListItemIcon>
          <ListItemText primary="設定" />
        </ListItem>
      </List>
    </div>
  </div>
);
export default Home;
