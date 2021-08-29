import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children?: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
