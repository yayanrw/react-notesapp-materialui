import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./theme/MyTheme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
