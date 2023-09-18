import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

import { Analytics } from '@vercel/analytics/react'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

await tryLoadAndStartRecorder({
  projectId: 'W2wAFvW3hMiSW9em4pA3i9ndDBK9Wk31O4XSksE0',
})

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>
        {children}
        <Analytics />
      </main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
