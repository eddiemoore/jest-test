import PropTypes from 'prop-types'
import React from 'react'
import styles from './H2.css'

const H2 = ({ children }) => (
  <h2 className={styles.container}>
    {children}
  </h2>
)

H2.propTypes = {
  children: PropTypes.node,
}

export default H2
