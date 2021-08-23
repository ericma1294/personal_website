import React from 'react';
import { Row, Col } from 'antd'

const AboutMe = () => {
  return (
      <Row className="about" justify='end' align='middle'> 
        <Col xs={24} md={8}>
          <h1>About Me</h1>
        </Col>
        <Col xs={24} md={16}>
          <p>I graduated from the University of Washington in 2018 with a degree in Informatics and was working at a life science startup called Genemod before moving to Japan in 2019.</p>
          <p>After moving to Japan, I've been working as an English Teacher in a high school while simultaneously studying Japanese and coding on the side.</p>
          <p>I am proficient in full-stack development and am open to opportunities that will require my expertise as well as ones that will allow me to continue to grow as a developer.</p>
        </Col>
      </Row>
  );
}

export default AboutMe;
