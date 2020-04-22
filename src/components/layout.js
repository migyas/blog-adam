import React from "react"
import PropTypes from "prop-types"

import MenuBar from "./MenuBar"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <MenuBar/>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
