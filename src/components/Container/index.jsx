import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './index.css'

const Container = ({ children, fluid }) => (
  <div className={fluid ? 'container-fluid' : 'container'}>
    { children }
  </div>
)

// Validate properties
Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
}

export default Container
