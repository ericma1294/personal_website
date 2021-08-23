import React, { useState } from 'react';
import { Col, Row } from 'antd'

const SkillsCard = ({ inputData }) => {
    console.log('TESTING', inputData)
  return (
    <Col className="indvSkills" xs={11} md={6} offset={1}>
      <p>{inputData}</p>
    </Col>
  );
}

export default SkillsCard;
