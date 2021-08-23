import React, { useState } from 'react';
import { Row, Col } from 'antd'
import SkillsCard from './SkillsCard';

const data = {
  languages: [
    'JavaScript',
    'ES6+', 
    'Python', 
    'Java', 
    'HTML/CSS', 
    'SQL'
  ],
  frameworks: [
    'React.js', 
    'Node.js', 
    'Express.js', 
    'Material-UI', 
    'Ant Design', 
    'Bootstrap',
    'SASS'
  ],
  others: [
    'Git',
    'Adobe XD',
    'Tableau'
  ]
}

const Skills = () => {
  const [ inputData, setInputData ] = useState(data)

  return (
      <Row className="skills" justify='end' align='middle'> 
        <Col xs={24} md={8}>
          <h1>Skills</h1>
        </Col>

        <Col xs={24} md={16}>
          <Row className='skillContainer'>
            <Col xs={24} md={6}>
              <h2>Programming Languages</h2>
            </Col>
            <Col xs={24} md={18}>
              <Row justify='center'>
                {
                  inputData.languages.map((val) => <SkillsCard key={val} inputData={val} />)
                }
              </Row>
            </Col>
          </Row>
          <Row className='skillContainer'>
            <Col xs={24} md={6}>
              <h2>Framework &amp; Libraries</h2>
            </Col>
            <Col xs={24} md={18}>
                <Row justify='center'>
                  {
                    inputData.frameworks.map((val) => <SkillsCard key={val} inputData={val} />)
                  }
                </Row>
            </Col>
          </Row>
          <Row className='skillContainer'>
            <Col xs={24} md={6}>
              <h2>Misc Skills</h2>
            </Col>
            <Col xs={24} md={18}>
              <Row justify='center' align='middle'>
                {
                  inputData.others.map((val) => <SkillsCard key={val} inputData={val} />)
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}

export default Skills;
