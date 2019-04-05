import React, {Component} from 'react';
import logo from '../logo.svg';
import {Navbar, Form, Container} from "react-bootstrap";
import axios from "axios";
import {itemsFetchData} from "../actions/data";
import {connect} from "react-redux";


class Header extends Component {
  state = {
    data: [],
  }

  dateSelectHandler = e => {
    if(!e.target.value) {
      this.props.fetchData(`http://localhost:3001/api/status`)
    } else {
      this.props.fetchData(`http://localhost:3001/api/status/${e.target.value}`)
    }

  }

  render() {
    return (
      <Container>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Form inline>
              <select name="date" onChange={this.dateSelectHandler}>
                <option value="">All</option>
              { this.body }
              </select>
            </Form>
          </Navbar>
        </header>
      </Container>
    );
  }

  get body() {
    return  this.state.data.map((item, index) => (
      <option key={index} value={item.date}>{item.date}</option>
    ))
  }

  componentDidMount() {
    let self = this
    axios.get('http://localhost:3001/api/date')
    .then(function (response) {
      self.setState({data: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.items,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
