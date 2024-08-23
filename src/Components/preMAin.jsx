import React from "react";
import { Button, Dropdown } from 'react-bootstrap';

const PreMain = () => {
  return (
    <div className="container-fluid my-5 mx-0 text-light">
      <div className="row">
        <div className="col-2">
          <h3 className="show">TV Shows</h3>
        </div>
        <div className="col-2 pt-1 mt-1 genresBtn">
          <Dropdown className="d-flex justify-content-center w-75">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Romantic</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-2 offset-6 d-flex justify-content-end">
          <Button variant="outline-light" className="similBtn d-flex justify-content-center align-items-center">
            <svg
              className="w-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-label="Menu"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </Button>
          <Button variant="outline-light" className="similBtn d-flex justify-content-center align-items-center">
            <svg
              className="w-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-label="Grid"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreMain;
