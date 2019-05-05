import React, { Fragment } from 'react';
import { Header } from './layouts';
import ContentContainer from '../containers/ContentContainer';
import FooterContainer from '../containers/FooterContainer';

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <ContentContainer />
      <FooterContainer />
    </Fragment>
  );
}

export default App;
