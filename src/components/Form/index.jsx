import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './index.css'

const Form = ({ children, onSubmit, id, message }) => (
  <form onSubmit={onSubmit} id={id} className="form">
    {
      message &&
      <div>{ message },</div>
    }
    { children }
  </form>
)

// Validate properties
Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  message: PropTypes.string
}

export default Form
