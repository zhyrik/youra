import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="top-background-z">
          <img src="/img/background/blog.jpg" />

          <div className="top-background-overlay">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                color: 'white',
              }}
            >
              bkog
            </h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
