import React from 'react';
import { Col, Row } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const Contact = () => {
  return (
    <Row id="contact" className="contact" align='middle'>
      <Col xs={24} md={8}>
        <h1>Contact</h1>
      </Col>
      <Col xs={24} md={16}>
        <Row>
          <Col span={24}>
            <h2>Please contact me if you want to reach out or if you have any questions!</h2>
          </Col>
        </Row>
        <Row justify='center' align='middle'>
          <Col span={3}>
            <a href="mailto:ericma1294@gmail.com">
              <MailOutlined style={styles.icon}/>
            </a>
          </Col>
          <Col span={3}>
            <a href="https://github.com/ericma1294" target="_blank"> 
              <GithubOutlined style={styles.icon} />
            </a>
          </Col>
          <Col span={3}>
            <a href="https://www.linkedin.com/in/ericma000/" target="_blank"> 
              <LinkedinOutlined style={styles.icon} />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const styles = {
  icon: {
    color: 'white',
    fontSize: '30px'
  }
}

export default Contact;
