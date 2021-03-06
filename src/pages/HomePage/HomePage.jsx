import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './HomePage.css';
import crimesService from "../../utils/crimesService";

class HomePage extends Component {
  
  async componentDidMount() {
    await crimesService.index();
    await this.props.genCrime();
  }
  render() {
    return (
      <div className="HomePage">
        {this.props.randomPerp ? (
          <Card className="Card" style={{ width: '20rem' }}>
          <Card.Img className="Card-img" variant="top" src={this.props.randomPerp.img} alt="Criminal" />
          <Card.Body>
            <Card.Title className="Card-title">{this.props.randomPerp.name}</Card.Title>
            <button className="btn btn-danger btn-lg" onClick={this.props.removeCurrentPerp}>X</button>
            <button className="btn btn-info btn-lg" onClick={this.props.addCurrentPerp}>✔</button>
          </Card.Body>
          </Card>
        ) : (
          <p>All crimes have been viewed!</p>
        )}
      </div>
    );
  }
}

export default HomePage;
