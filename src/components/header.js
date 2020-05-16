import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"
import Logo from "../images/icon.svg"

const Header = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div>
          <img src={Logo} className={headerStyles.logoNavbar} alt="Logo" />
        </div>

        <div className={headerStyles.links}>
          <Link to="/" activeClassName={headerStyles.activeMenuItem}>
            Home
          </Link>

          <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
            Blog
          </Link>

          <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
            Contact
          </Link>

          <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
            About
          </Link>
        </div>

        <div>
          <button class="btn button-primary" type="">
            Contact me
          </button>
        
        </div>
      </div>
    </header>
  )
}

export default Header
