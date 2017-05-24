import React, { Component } from 'react';
import Style from './style/headerPanel.css';
import { Grid, Row,Col } from 'react-bootstrap';

export default class HeaderPanel extends React.Component {
  render() {
    return (
      <Grid style={{overflow:'hidden',minHeight:'100%'}}>
          <Row>
              <Col xs={12} md={12} className="titleView">

              </Col>
          </Row>
      </Grid>
    );
  }
}
