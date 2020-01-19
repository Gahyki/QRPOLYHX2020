import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./App.css";


//Menu Item
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class MenuItem extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <List component="nav">
        <ListItem button id="c1">
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button id="c2">
          <ListItemText primary="Scan"/>
        </ListItem>
        <ListItem button id="c3">
          <ListItemText primary="Profile"/>
        </ListItem>
        <ListItemLink id="c4" href="https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG&">
          <ListItemText primary="MyConcordia"/>
        </ListItemLink>
      </List>
    )
  }
}

export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="App">
          <div id="menu">
            <Drawer variant="permanent" width="240">
             <MenuItem/>
            </Drawer>
          </div>
        <div id="content">
          <header className="App-header">
            <label>I like it</label>
            <input type="checkbox" />
          </header>
        </div>
      </div>
    );
  }
}
