import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="site-header">
          <Link style={{width:"250px"}} to="/">
            <img alt="" style={{padding: "5px",float:"left"}} src={'/img/logo.png'}/>
            <div style={{display:"inline-block",marginLeft:"10px", marginTop: "10px", lineHeight:"15px"}}>
              <div>{title}</div>
              <span style={{float:"right"}}>by D&F Photography</span>
            </div>
          </Link>
        </div>
        
        <Link className="header-link" to="/about/">About</Link>
        <Link className="header-link" to="/services/">Packages</Link>
        <Link className="header-link" to="/contact/">Contact</Link>
        <Link className="header-link" to="/book/">Book</Link>
        <Link className="header-link" to="/blog/">Blog</Link>
      </header>
      
      <main className="global-wrapper" >{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
