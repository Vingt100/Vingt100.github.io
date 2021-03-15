import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import Home from './components/pages/Home/Home';
import CV from './components/pages/CV/CV';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/Footer';
import Bonus from './components/pages/Bonus/Bonus';
import ScrollToTop from './ScrollToTop';


export default function App() {
  return (
    
    <>
    <div style={{backgroundColor: "#fcd6e3"}}  > {/* #F4BBCF */}
    <Router>
    <ScrollToTop>
      <Navbar/>
      <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path='/CV' component={CV} />
        <Route path='/Projects' component={Projects} />
        {/*<Route path='/sign-up' component={SignUp} />*/}
        <Route path='/Bonus' component={Bonus} />
        <Route path='*' render={() => (<Redirect to="/"/>)}/>
      </Switch>
      <Footer/>
      </ScrollToTop>
     </Router> 
     </div>
    </>
  );
}