import React, { useState, useRef, useEffect } from 'react'
import { css, cx } from 'emotion'

const icon = css`
  cursor: pointer;
  margin-left: 5px;
  height: 20px;
  width: 10px;
  align-items: center;
  justify-content: space-between;
  transition: transform 100ms ease;
`

const rotate = css`
  transform: rotate(90deg);
`

const toggle = css`
  display: flex;
  text-align: left;
`

const content = css`
  overflow: hidden;
`
const accordion = css`
  border-bottom: 0.5px solid grey;
`

const Accordion = ({ children, title }) => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <section className={accordion}>
      <div onClick={toggleActive} className={cx('btn', toggle)}>
        <strong>{title}</strong>
        <span className="ml-auto">
          <svg className={active ? cx(icon, rotate) : icon} viewBox="0 0 320 512">
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </span>
      </div>
      <div className={content} ref={contentRef}>
        <p className="card-body">{children}</p>
      </div>
    </section>
  )
}

export default Accordion
