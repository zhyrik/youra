import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Link } from 'gatsby'

export default function ProductCard({ data, fields }) {
  return (
    <Link to={fields.slug}>
      <div className="card card-z">
        <div className="card-image">
          <figure className="image figure-image-z">
            <PreviewCompatibleImage imageInfo={data.featuredimage} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{data.title}</p>
              <p className="subtitle is-6">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
