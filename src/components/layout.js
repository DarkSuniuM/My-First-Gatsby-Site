import * as React from "react";
import {Link} from "gatsby"
import {container, heading, navLinkItem, navLinks} from "./layout.module.css"

const Layout = ({pageTitle, children}) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkItem}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkItem}>About</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
