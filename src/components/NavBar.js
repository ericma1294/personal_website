import React from 'react';
import { Row, Col } from 'antd'

const NavBar = () => {
  return (
      <Row className='navbar'> 
        <Col span={4}>
            <h2 style={{color: 'white'}}>Eric Ma</h2>
        </Col>
        <Col span={8}></Col>
        <Col span={3}>
            <h2 style={{color: '#ff4c4c'}}>About</h2>
        </Col>
        <Col span={3}>
            <h2 style={{color: '#cd00cd'}}>Skills</h2>
        </Col>
        <Col span={3}>
            <h2 style={{color: '#F0E68C'}}>Portfolio</h2>
        </Col>
        <Col span={3}>
            <h2 style={{color: '#90EE90'}}>Contact</h2>
        </Col>
      </Row>
  );
}

export default NavBar;
