import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>
        <div className={layoutStyles.mainContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
