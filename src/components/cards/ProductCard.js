import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'

export default function ProductCard({ data }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
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
  )
}
