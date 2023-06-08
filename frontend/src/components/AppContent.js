import * as React from 'react';


import { request, setAuthHeader } from '../helpers/axios_helper';

import Buttons from './Buttons';
import AuthContent from './MainPage';
import LoginForm from './LoginForm';
import WelcomeContent from './WelcomeContent'
import logo from "../logo.jpg";
import Header from "./Header";
import Books from "./Books";
import MainPage from "./MainPage";
import Visitors from "./Visitors";
import Book from "./Book";
import AddBook from "./AddBook";
import Visitor from "./Visitor";
import AddVisitor from "./AddVisitor";


export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome",
            book_id: null,
            visitor_id: null,
        }
    };

    showMain = () => {
        this.setState({componentToShow: "messages"})
    }


    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    showBook = (id) =>{
        this.setState({componentToShow: "book", book_id: id})
    }
    addBook = () => {
        this.setState({componentToShow: "addBook"})
    }
    addVisitor = () => {
        this.setState({componentToShow: "addVisitor"})
    }

    showVisitor = (id) =>{
        this.setState({componentToShow: "visitor", visitor_id: id})
    }

    showBooks = () => {
        this.setState({componentToShow: "books"})
    };

    showVisitors = () => {
        this.setState({componentToShow: "visitors"})
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, firstName, lastName, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

  render() {
    return (
      <>
          <Header pageTitle="LibraryAdmin" login={this.login} logout={this.logout} logoSrc={logo} showMain ={this.showMain} />
        {this.state.componentToShow === "welcome" && <WelcomeContent /> }
        {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
        {this.state.componentToShow === "messages" && <MainPage showBooks = {this.showBooks} showVisitors = {this.showVisitors}/>}
        {this.state.componentToShow === "books" && <Books showBook = {this.showBook} addBook={this.addBook}/>}
        {this.state.componentToShow === "addBook" && <AddBook showBooks = {this.showBooks} />}
        {this.state.componentToShow === "addVisitor" && <AddVisitor showVisitors = {this.showVisitors} />}
        {this.state.componentToShow === "visitors" && <Visitors showVisitor={this.showVisitor} addVisitor={this.addVisitor}/>}
        {this.state.componentToShow === "book" && <Book book_id ={this.state.book_id}/>}
        {this.state.componentToShow === "visitor" && <Visitor visitor_id ={this.state.visitor_id}/>}

      </>
    );
  };
}