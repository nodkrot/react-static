import React, { Component } from 'react'
import axios from 'axios'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Icon from 'antd/lib/icon'
import Layout from 'antd/lib/layout'

const { Header, Content, Footer } = Layout

export default class App extends Component {

  componentDidMount() {
    axios.get('/health').then((res) => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <Layout className="app">
        <Header className="app__header">
          <a href="/" className="app__logo">
            Reactboot
          </a>
        </Header>
        <Content className="app__content">
          <Row type="flex" justify="center">
            <Col xs={22} xl={16}>
              <h1>Hello World!</h1>
            </Col>
          </Row>
        </Content>
        <Footer className="app__footer">
          Made with <Icon type="heart" />
        </Footer>
      </Layout>
    )
  }
}
