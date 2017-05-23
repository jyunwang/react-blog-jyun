import React from 'react';
import HeadPanel from './panels/headerPanel.jsx';
import FooterPanel from './panels/footerPanel.jsx';
import BodyPanel from './panels/bodyPanel.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
       <div style={{textAlign: 'center'}}>
          <HeadPanel />
          <BodyPanel />
          <FooterPanel />
       </div>
    );
  }
}
