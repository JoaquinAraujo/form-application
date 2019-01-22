import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './index.css'

const Layout = ({ children }) => (
  <div className="layout">
    { children }
  </div>
)

// Validate properties
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
