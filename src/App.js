import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Container, Row, Col, Input } from 'react-materialize';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import InfoTab from './components/InfoTab'

class App extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col l={12}>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col l={6}>
            <Searchbar />
          </Col>
        </Row>
        <Row>
          <Col l={3}>
            <InfoTab />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
