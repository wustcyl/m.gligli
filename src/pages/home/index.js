import React, { useState, useEffect, Fragment } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./index.scss";


const HomePage = function (props) {
    const { getFieldDecorator } = props.form || (() => {});
    return (<Fragment>
    <Form onSubmit={() => {}} className="login-form">
        <Form.Item>
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
        })(
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            />,
        )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
        })(
            <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            />,
        )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="javascript: alert('暂无该业务！')">
            Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        Or <a href="javascript: alert('暂无该业务！')">register now!</a>
        </Form.Item>
    </Form>
    </Fragment>)
}

export default Form.create({ name: 'normal_login' })(HomePage);;