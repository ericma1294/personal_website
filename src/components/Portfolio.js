import React from 'react';
import { Row, Col, Collapse, Card } from 'antd';
import useWindowDimensions from './useWindowDimensions'
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
const { Panel } = Collapse; 

const projectData = [
  {
    key: 1,
    title: 'Project 1',
    description: 'some description here'
  },
  {
    key: 2,
    title: 'Project 2',
    description: 'some description hereeee'
  }
];

const Portfolio = () => {
  const { height, width } = useWindowDimensions();

  function callback(key) {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  console.log('width', width);
  if (width < 769) {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <Collapse bordered={false} accordion={true} onChange={callback}>
            {
              projectData.map((val) => {
                return (
                  <Panel className='projectDetail' header={<span>{val.title}</span>} key={val.key}>
                    <Row>
                      <Col span={24}>
                        <p>{val.description}</p>
                      </Col>
                    </Row>
                    <Row justify='center' align='middle'>
                      <Col span={10}>
                        <LinkOutlined className='projectIcon' />
                      </Col>
                      <Col span={10}>
                        <GithubOutlined className='projectIcon' />
                      </Col>
                    </Row>
                  </Panel>
                )
              })
            }
        </Collapse>
      </div>
    );
  } else {
    return (
      <Row className='portfolio' justify='end' align='middle'>
        <Col span={8}>
          <h1>Portofolio</h1>
        </Col>
        <Col span={16}>
          <Row justify='center'>
            {
              projectData.map((val) => {
                return (
                  <Col className='projectDetailContainer' offset={1} span={8} key={val.key}>
                      <Card className='projectCards' 
                            headStyle={{color: 'white'}} 
                            title={val.title}
                            // hoverable={true} 
                            bordered={false}>
                        <p>{val.description}</p>
                        <Row justify="space-between" align='middle'>
                          <Col span={10}><LinkOutlined className='projectIcon' /></Col>
                          <Col span={10}><GithubOutlined className='projectIcon' /></Col>
                        </Row>
                      </Card>                   
                    
                    {/* <h2>{val.title}</h2>
                    <p>{val.description}</p> */}
                  </Col>
                )
              })
            }
          </Row>
        </Col>     
      </Row>
    )
  }
}

export default Portfolio;
