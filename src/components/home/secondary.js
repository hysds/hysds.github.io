import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

import Image from '../image'
import Accordion from '../accordion'
import ExternalLink from '../external-link'

const secondary = css`
  text-align: center;
  border-top: 0.5px solid grey;
  .container > section {
    margin: 6.5rem 0;
  }

  .start {
    text-align: left;
  }

  .logos {
    margin: 2rem 0;
  }
`

const Secondary = ({ data: [project, community, faqs] }) => (
  <section className={secondary}>
    <div className="container">
      <section>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="logos">
          <div className="row">
            {project.items.map(logo => (
              <a className="col-md col-4" href={logo.link}>
                <div className="m-2">
                  <Image name={logo.image} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2>{community.title}</h2>
        <p>{community.description}</p>
      </section>

      <section>
        <h2>{faqs.title}</h2>
        <div className="row">
          <div className="col-md-6">
            {faqs.items.map((faq, i) => (
              <>{i % 2 === 0 && <Accordion title={faq.question}>{faq.answer}</Accordion>}</>
            ))}
          </div>
          <div className="col-md-6">
            {faqs.items.map((faq, i) => (
              <>{i % 2 !== 0 && <Accordion title={faq.question}>{faq.answer}</Accordion>}</>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="row start">
          <h2 className="col-md-7">Ready to get started?</h2>
          <div className="col-md-5">
            <Link to="/docs/getting-started/" className="btn btn-lg btn-primary">
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  </section>
)

export default Secondary
