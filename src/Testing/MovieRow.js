import React, { Component } from "react";
import "./Testing.css";
import { Card, Col, Row } from "antd";

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewDetailedMovie(movieId) {
    const url = "https://www.themoviedb.org/movie/upcoming" + movieId;
    console.log(url);
    window.location.href = url;
  }

  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {this.props.movie.map((movie) => {
            return (
              <Col span={8}>
                <Card
                  title={movie.title}
                  hoverable
                  cover={
                    <img
                      alt="poster"
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                    />
                  }
                  onClick={this.viewDetailedMovie.bind(this, movie.id)}
                >
                  <p className="overview">{movie.overview}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default MovieRow;