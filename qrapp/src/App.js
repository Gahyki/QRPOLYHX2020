import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./App.css";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function TempDrawer(){
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };
  return(
    <Drawer open={state.left} onClose={toggleDrawer(false)}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Scan"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile"/>
        </ListItem>
        <ListItemLink href="https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG&">
          <ListItemText primary="MyConcordia"/>
        </ListItemLink>
      </List>
    </Drawer>
  );
}
export default class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <label>I like it</label>
          <input type="checkbox" />
        </header>
      </div>
    );
  }
}
