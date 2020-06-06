import React from 'react'

import ProductCard from './ProductCard'

export default function CardGridWrap({ edges }) {
  let productEdges = edges.filter(
    ({ node }) => node.frontmatter.templateKey === 'product-post'
  )
  return (
    <div className="wrap-grid-z">
      {productEdges.map(({ node }) => (
        <ProductCard data={node.frontmatter} key={node.frontmatter.title} />
      ))}
    </div>
  )
}
