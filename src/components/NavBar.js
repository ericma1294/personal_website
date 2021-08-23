import React from 'react';
import { Row, Col } from 'antd'

const NavBar = () => {
  return (
      <Row className='navbar'> 
        <Col span={4}>
            <h2 style={{color: 'white'}}>Eric Ma</h2>
        </Col>
        <Col span={5}></Col>
        <Col span={3}>
            <a href="#">
                <h2 style={{color: '#adafb3'}}>Home</h2>
            </a>
        </Col>
        <Col span={3}>
            <a href="#about">
                <h2 style={{color: '#ff4c4c'}}>About</h2>
            </a>
        </Col>
        <Col span={3}>
            <a href="#skills">
                <h2 style={{color: '#cd00cd'}}>Skills</h2>
            </a>
        </Col>
        <Col span={3}>
            <a href="#portfolio">
                <h2 style={{color: '#F0E68C'}}>Portfolio</h2>
            </a>
        </Col>
        <Col span={3}>
            <a href="#contact">    
                <h2 style={{color: '#90EE90'}}>Contact</h2>
            </a>
        </Col>
      </Row>
  );
}

export default NavBar;
