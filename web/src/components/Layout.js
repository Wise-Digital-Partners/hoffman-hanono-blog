import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta name="google-site-verification" content="8Rix5rHu8nQJiFgsax1I2eWez6oVxWmlZVQF8Fr6M8o" />
      </Helmet>
      <Header />
      <main id="body-content">
        {children}
      </main>
      <Footer />
      <div id="callnowbutton"></div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;