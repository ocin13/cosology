import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer'
import HomePage from './home';

class Main extends Component {
    render() {
        const Home = () => {
            return (
                <HomePage />
            );
        }
        return (
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />  
                <Redirect to="/" /> 
              </Switch>  
              <Footer />  
            </React.Fragment>
        )
    }
}

export default Main

