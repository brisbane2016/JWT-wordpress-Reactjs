import React from 'react';
import SinglePost from "./components/SinglePost";
import { Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreatePost from "./components/CreatePost";
import { createBrowserHistory } from 'history';



export const history = createBrowserHistory();
const App =() => {
  return (
    <Router history={history}>
      <div>
        

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/:userName"  component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/post/:id" component={SinglePost} />
        
        <Route path="/create" component={CreatePost} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;



// https://www.youtube.com/watch?v=KbzyrKnJOZU&list=PLD8nQCAhR3tTzWA8K5XQQps4u5kMFJjIG&index=4


// https://github.com/imranhsayed/react-with-wordpress