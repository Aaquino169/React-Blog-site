import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import SignUp from "./pages/signUp/SignUp";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function App() {
  const user =true;
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signUp"> {user ? <Home/> : <SignUp/>} </Route>
        <Route path="/login"> {user ? <Home/> : <Login/>} </Route>
        <Route path="/settings"> {user ? <Settings/> : <SignUp/>} </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
        <Route path="/write"> {user ? <Write/> : <SignUp/>} </Route>
      </Switch>
    </Router>
  );
}

export default App;
