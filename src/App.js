import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import {Provider} from "react-redux";
import Home from "./pages/home";
import Login from "./pages/login";
import Navigation from "./components/navigation/navigation";
import store from "./store"


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Navigation>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                         <Route exact path="/">
                            <Home />
                        </Route>
                    </Navigation>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
