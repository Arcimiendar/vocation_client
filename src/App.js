import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navigation from "./components/navigation/navigation";

function App() {
    return (
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
    );
}

export default App;
// import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";
//
// export default function App() {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/about">
//                     <About/>
//                 </Route>
//                 <Route path="/users">
//                     <Users/>
//                 </Route>
//                 <Route path="/">
//                     <Home/>
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }
//
// function Home() {
//     return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Users() {
//     return <h2>Users</h2>;
// }
