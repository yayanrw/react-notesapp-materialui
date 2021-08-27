import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./theme/MyTheme";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
