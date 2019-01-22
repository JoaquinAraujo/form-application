import React, { Component } from 'react'

// Utils
import validate from '../utils/validate'

// Images
import logo from '../images/logo.png'

// Components
import Container from '../components/Container'
import Form from '../components/Form'
import Layout from '../components/Layout'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: {
        value: '',
        completed: false
      },
      password: {
        value: '',
        completed: false
      }
    }
  }

  handleSubmit = ev => {
    ev.preventDefault()

    const login = document.getElementById('login')
    const form = new FormData(login)

    form.forEach((data, key) => {
      this.setState({
        [key]: {
          value: ev.target.value,
          completed: validate[key](data)
        }
      })
    })
  }

  handleChange = ev => {
    const login = document.getElementById('login')
    const form = new FormData(login)

    form.forEach((data, key) => {
      this.setState({
        [key]: {
          value: ev.target.value,
          completed: validate[key](data)
        }
      })
    })
  }

  render() {
    return (
      <Layout>
        <Container fluid>
          <Container>
            <Form id="login" onSubmit={this.handleSubmit} message='Welcome Joaquin'>
              <div>{this.state.email.completed ? <i className="fas fa-check" /> : <i className="fas fa-at" />}<input type="email" name="email" placeholder="Email address" onChange={this.handleChange} /></div>
              <div>{this.state.password.completed ? <i className="fas fa-check" /> : <i className="fas fa-lock" />}<input type="password" name="password" placeholder="Password" onChange={this.handleChange} /></div>
              <input type="submit" value="Log In" disabled={!(this.state.email.completed && this.state.password.completed)} />
            </Form>
            <img src={logo} alt="Joaquin Araujo" />
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Login
