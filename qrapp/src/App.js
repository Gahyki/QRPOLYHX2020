import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Drawer variant="permanent" width="240">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <header className="App-header">
        <label>I like it</label>
        <input type="checkbox" />
      </header>
    </div>
  );
}

export default App;
