import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider,message } from 'antd'
import { loginFn, profile } from '../services/auth'
import { useContextInfo } from '../hooks/context'

const { Title } = Typography

const googleUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/auth/google" : '/auth/google'

const Login = ({ history }) => {
  const [form] = Form.useForm()
  const { login } = useContextInfo()

  async function handleSubmit(userInput) {
    /*const { data } = await loginFn(userInput)
    login(data);
    history.push(`/dash/${data._id}`)*/

    try {
      await loginFn(userInput)
      const {
        data: { user }
      } = await profile()
      login(user)
      history.push(`/dash/${user._id}`)
    } catch (err) {
      message.error("Error with email or password")
    }
  }
  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Login to empower your skills!</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='username' label="Username:">
            <Input />
          </Form.Item>
          <Form.Item name='password' label="Password:">
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Login
          </Button>
        </Form>
        <Divider>
          Or
        </Divider>
        <a href={googleUrl}>
          <Button block>Login with Google</Button>
        </a>
      </Col>
    </Row>
  )
}

export default Login
