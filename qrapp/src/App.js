import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <header>
      <Drawer variant="permanent" width="240">
        <List>
          <ListItem button key="Inbox">
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button key="Function2">
            <ListItemText primary="Test2" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}

export default App;
