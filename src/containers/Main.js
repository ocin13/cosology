import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer'

class Main extends Component {
    render() {
        const Home = () => {
            return (
                <h2>Home Page</h2>
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

