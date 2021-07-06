import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

class Home extends Component {
  state = {
    allDrinks: [],
    favData: [],
    err: "",
  };

  componentDidMount() {
    let url = `${process.env.REACT_APP_SERVER}/getAllDrinks`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ allDrinks: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });

    let url2 = `${process.env.REACT_APP_SERVER}/getFav`;

    axios
      .get(url2)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  }

  addFav = (item) => {
    let url = `${process.env.REACT_APP_SERVER}/addFav`;

    let dataBody = {
      name: item.strDrink,
      img: item.strDrinkThumb,
    };

    axios
      .post(url, dataBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="cards-container">
            {this.state.allDrinks.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Img variant="top" src={item.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{item.strDrink}</Card.Title>

                    <Button variant="primary" onClick={() => this.addFav(item)}>
                      Add to fav
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
