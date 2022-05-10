import React from "react";
import PropTypes from "prop-types";
import '@/styles/globals.css'
import {Footer, Header, MainFeaturedPost, Nav} from "@/components";
import {wrapper} from "@/modules/store";
import withReduxSaga from 'next-redux-saga';
import FeaturedPost from "@/components/FeaturedPost";

const App = ({ Component  }) => {
  return  <>
  <Header/>
  <Nav/><div className='AppMinHeight'>
  <Component />
  </div>
  <Footer/>

  </>
}
App.propTypes = {
  Component: PropTypes.elementType,
};

export default wrapper.withRedux(withReduxSaga(App));