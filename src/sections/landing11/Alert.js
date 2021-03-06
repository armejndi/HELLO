import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";

const Alert = () => {
  return (
    <>
      {/* <!-- Alert Area --> */}
      <div className="alert-section py-9 bg-primary dark-mode-texts ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="7" lg="8" md="9">
              <div className="alert-content d-flex flex-column flex-lg-row align-items-center text-center justify-content-lg-center">
                <span className="btn-badge rounded-pill bg-white gr-text-12 text-uppercase fw-bold text-blue py-1 px-6 me-5 mb-6 mb-lg-0 d-inline-flex align-items-center">
                  New
                </span>
                <span className="alert-text gr-text-9 text-white">
                  We’ve added a new exciting feature in v3.0.{" "}
                  <Link
                    to="/#"
                    className="action-link text-white gr-text-underline"
                  >
                    Get it now for $49.
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Alert;
