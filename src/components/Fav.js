import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import UpdateModal from "./UpdateModal";

class Fav extends Component {
  state = {
    favData: [],
    err: "",
    show: false,
    modalData: {},
  };

  componentDidMount() {
    let url = `${process.env.REACT_APP_SERVER}/getFav`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  }

  deleteFav = (item) => {
    let url = `${process.env.REACT_APP_SERVER}/deleteFav/${item.name}`;

    axios
      .delete(url)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  showModal = (item) => {
    this.setState({ show: true, modalData: item });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  updateFav = (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/updateFav`;

    let dataBody = {
      target: this.state.modalData.name,
      name: e.target.name.value,
      img: e.target.img.value,
    };

    axios
      .put(url, dataBody)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });

    this.closeModal();
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : this.state.favData.length == 0 ? (
          <p style={{ fontSize: 50, color: "red", paddingLeft: 600 }}>
            no fav added
          </p>
        ) : (
          <div className="cards-container">
            {this.state.favData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button
                      variant="primary"
                      style={{ marginRight: 20 }}
                      onClick={() => this.deleteFav(item)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => this.showModal(item)}
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
        <UpdateModal
          show={this.state.show}
          modalData={this.state.modalData}
          closeModal={this.closeModal}
          updateFav={this.updateFav}
        />
      </div>
    );
  }
}

export default Fav;
