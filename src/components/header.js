import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import ExternalLink from './external-link'

import headerNav from '../../content/header-nav.yaml'

const header = css`
  border-bottom: 0.5px solid grey;
  // margin-bottom: 3rem;

  .navbar {
    padding: 0;
    margin: 1rem 0;
    a {
      color: black;
    }
    > a {
      &:hover {
        text-decoration: none;
      }
    }
  }

  .nav {
    padding: 0;
    list-style: none;
  }

  .nav-item {
    padding: 0;
    margin: 0;
    padding-left: 1.2rem;
  }

  @media screen and (min-width: 767px) {
    .mobile-only {
      display: none;
    }
  }

  .mobile-only {
    ul {
      padding-top: 1.5rem;
      border-top: 0.5px solid grey;
      list-style: none;
      text-align: center;
    }
    a {
      color: black;
    }
  }
`

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header css={header}>
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Link to="/">HySDS</Link>
          <div onClick={() => setActive(!active)} className="btn mobile-only">
            <span>Menu &darr;</span>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav ml-auto">
              {headerNav.items.map(link => (
                <li className="nav-item">
                  {link.external ? (
                    <ExternalLink to={link.to} title={link.title} />
                  ) : (
                    <Link to={link.to}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <nav className="mobile-only">
          {active ? (
            <ul className="row">
              {headerNav.items.map(link => (
                <li className="col-12">
                  {link.external ? (
                    <ExternalLink to={link.to} title={link.title} />
                  ) : (
                    <Link to={link.to}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
      </div>
    </header>
  )
}

export default Header
