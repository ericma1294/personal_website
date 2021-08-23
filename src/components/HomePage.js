import React from 'react';
import profilePic from '../img/profilepic.jpg'

import { Col, Row } from 'antd'

const HomePage = () => {
  return (
    <Row className="homePage" justify="center" align='middle'>
      <Col sm={24} md={12}>
        <Row>
          <Col span={24} >
            <h2>Hi, my name is...</h2>
          </Col>
          <Col span={24}>
            <h1>Eric Ma</h1>
          </Col>
          <Col span={24}>
            <h3>Teacher | Fullstack Developer</h3>
          </Col>
        </Row>
      </Col>
      <Col sm={24} md={12}>
        <img className='profilePic' src={profilePic} alt='profile pic' />
      </Col>
    </Row>
  );
}

export default HomePage;
