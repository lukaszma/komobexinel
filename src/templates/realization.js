import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Lightbox from 'react-image-lightbox'
import GridItem from '../components/gridItem'
import 'react-image-lightbox/style.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Realization = ({
  pageContext: { title, description, images_directory },
  data,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isLigtboxOpen, setIsLigtboxOpen] = useState(false)

  const onImageClick = index => {
    setPhotoIndex(index)
    setIsLigtboxOpen(true)
  }

  const images = data.images.edges.map((edge, index) => ({
    src: edge.node.childImageSharp.fluid.src,
    thumbnail: edge.node.childImageSharp.fluid,
    thumbnailWidth: 640,
    thumbnailHeight: 480,
    enableImageSelection: false,
    index,
  }))

  console.log(images)
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} />
        <div className="container">
          <div>{title}</div>
          <div>{description}</div>
          <div>{images_directory}</div>
          <section className="section">
            <div className="columns is-multiline">
              {images.map((image, index) => (
                <GridItem
                  onClick={() => onImageClick(index)}
                  columnsClass="is-one-third"
                  key={index}
                  className="column"
                  imageData={image.thumbnail}
                />
              ))}
              {isLigtboxOpen && (
                <Lightbox
                  mainSrc={images[photoIndex].src}
                  nextSrc={images[(photoIndex + 1) % images.length].src}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length].src
                  }
                  onCloseRequest={() => setIsLigtboxOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                />
              )}
            </div>
          </section>
        </div>
      </Layout>
    </React.Fragment>
  )
}

Realization.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    images_directory: PropTypes.string,
  }),
}

export default Realization

export const query = graphql`
  query($images_directory: String!) {
    images: allFile(filter: { relativeDirectory: { eq: $images_directory } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
