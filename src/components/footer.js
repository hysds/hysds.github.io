import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css, cx } from 'emotion'

import ExternalLink from '../components/external-link'

import hysdsLogo from '../images/hysds-logo.png'
import footerNav from '../../content/footer-nav.yaml'

const footer = css`
  border-top: 0.5px solid grey;
  padding-top: 3rem;
  margin: 3.5rem 0;
`

const navBrand = css``

const navLink = css`
  a {
    color: black;
    &:hover {
    }
  }
  > ul {
    list-style: none;
    margin: auto;
    > li {
      margin: 0;
      padding: 0;
    }
  }
`

const Footer = () => (
  <footer className={footer}>
    <div className="container">
      <nav className="row">
        <div className={cx('col-12', 'col-md', navBrand)}>
          <div>Logo here</div>
          <small>Copyright &copy; HySDS {new Date().getFullYear()}</small>
        </div>
        {footerNav.map(section => (
          <div className={cx('col-6', 'col-md', navLink)}>
            <strong>{section.title}</strong>
            <ul>
              {section.items.map(link => (
                <li>
                  {link.external ? (
                    <ExternalLink className="text-muted" title={link.title} to={link.to} />
                  ) : (
                    <Link className="text-muted" to={link.to}>
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  </footer>
)

export default Footer
