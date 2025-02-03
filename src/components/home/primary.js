import React from 'react'
import { Link } from 'gatsby'
import { css, cx } from 'emotion'

import Image from '../image'

const primary = css`
  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }
  .container > section {
    margin: 6.5rem 0;
  }
  .btn {
    // margin: 1.5rem 0;
  }
`

const Primary = ({ data }) => (
  <section className={primary}>
    <div className="container">
      {data.map((content, i) => (
        <section>
          <div className="row">
            {i % 2 === 0 && (
              <div className="col-md-7">
                <div className="mr-md-5">
                  <Image name={content.image} />
                </div>
              </div>
            )}
            <div className="col-md-5">
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              {content.highlights.map(highlight => (
                <ul>
                  <li>{highlight}</li>
                </ul>
              ))}
              <Link to={content.link} className="btn">
                Learn more &rarr;
              </Link>
            </div>
            {i % 2 !== 0 && (
              <div className="col-md-7">
                <div className="ml-md-5">
                  <Image name={content.image} />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  </section>
)

export default Primary
