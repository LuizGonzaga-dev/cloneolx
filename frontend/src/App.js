import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {Template} from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Routers from './Routers';

const Page = (props) =>{
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Routers/>
        <Footer/>
      </Template>     
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const napDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, napDispatchToProps)(Page);
