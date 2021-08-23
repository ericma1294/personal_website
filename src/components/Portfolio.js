import React from 'react';
import { Row, Col, Collapse, Card, Tooltip } from 'antd';
import useWindowDimensions from './useWindowDimensions'
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
const { Panel } = Collapse; 

const projectData = [
  {
    key: 1,
    title: 'To-Do List',
    description: 'an application that can help users keep track of tasks that they have to/want to complete.',
    github: 'https://github.com/ericma1294/todolist',
    demo: 'https://lit-dawn-51674.herokuapp.com/',
    isDemo: true

  },
  {
    key: 2,
    title: 'Jeopardy',
    description: 'some description hereeee',
    github: 'https://github.com/ericma1294/jeopardy',
    demo: '',
    isDemo: false
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

  if (width < 769) {
    return (
      <div id="portfolio" className="portfolio">
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
                        {
                          val.isDemo ? 
                            <a href={val.demo} target='_blank'><LinkOutlined className='projectIcon' /></a>
                          :
                          <Tooltip title="no demo available :("><LinkOutlined className='projectIconN' /></Tooltip>
                        }
                        
                      </Col>
                      <Col span={10}>
                        <a href={val.github} target='_blank'>
                          <GithubOutlined className='projectIcon' />
                        </a>
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
      <Row id="portfolio" className='portfolio' justify='end' align='middle'>
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
                          <Col span={10}>
                            {
                              val.isDemo ? 
                                <a href={val.demo} target='_blank'><LinkOutlined className='projectIcon' /></a>
                              :
                                <Tooltip title="no demo available :("><LinkOutlined className='projectIconN' /></Tooltip>
                            }
                          </Col>
                          <Col span={10}><a href={val.github} target='_blank'><GithubOutlined className='projectIcon' /></a></Col>
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
