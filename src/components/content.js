import React, {Component} from 'react';
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/data';



class Content extends Component {

  render() {
    if (this.props.hasErrored) {
      return <p>Error</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <main>
          <Container>
            <ListGroup>
            {
            this.props.data.map((item, index) => (
              <ListGroup.Item  key={index}>
                <Row className="item">
                  <Col>{ item.date }</Col>
                  <Col>{ item.name }</Col>
                  <Col>{ item.status }</Col>
                </Row>
              </ListGroup.Item>
            ))
            }
            </ListGroup>
          </Container>
        </main>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchData('http://localhost:3001/api/status')
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
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)