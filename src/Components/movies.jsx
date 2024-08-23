import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Movies = ({ title, query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=d0102727`)
      .then(response => response.json())
      .then(data => setMovies(data.Search));
  }, [query]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h4 className="mt-4 mb-4">{title}</h4>
        </Col>
      </Row>
      <Row>
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <Col xs={12} md={6} lg={4} xl={3} key={movie.imdbID} className="mb-4">

              <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'default-image.jpg'} 
                alt={movie.Title} 
                className="img-fluid"

              />
              <p>{movie.Title}</p>
              
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No movies found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Movies;

