import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section bg-green dark-mode-texts pt-12 pb-13 pt-md-15 pb-md-15 ">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="10">
              <div
                className="cta-text d-flex flex-column flex-sm-row align-items-center justify-content-center"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 className="title gr-text-5 mb-6 mb-sm-0 me-sm-9 text-white">
                  Ready to get started?
                </h2>
                <div
                  className="cta-btn"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <Link to="/#" className="btn btn-white bg-white gr-hover-y">
                    Get A Free Quote
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cta;
