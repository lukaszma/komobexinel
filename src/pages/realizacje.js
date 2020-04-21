import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import GridItem from '../components/gridItem'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageHeader'

const Container = styled.div`
  margin-top: 100px;
`

const Realizations = () => (
  <Layout>
    <SEO title="Realizacje" />
    <PageHeader label="Realizacje" />
    <Container className="container">
      <div className="columns is-multiline">
        <StaticQuery
          query={query}
          render={data =>
            data.realizations.edges.map(edge => {
              const image = data.galleryImages.edges.find(
                imageEdge => imageEdge.node.name === edge.node.preview_image
              )

              return (
                <GridItem
                  onClick={() =>
                    navigate(`/realizacje/${edge.node.images_directory}`)
                  }
                  columnsClass="is-one-third"
                  key={edge.node.preview_image}
                  label={edge.node.title}
                  className="column"
                  imageData={image.node.childImageSharp.fluid}
                />
              )
            })
          }
        />
      </div>
    </Container>
  </Layout>
)

export default Realizations

export const query = graphql`
  query RealizationsQuery {
    realizations: allGalleryJson {
      edges {
        node {
          title
          description
          preview_image
          images_directory
          main_page
        }
      }
    }
    galleryImages: allFile(
      filter: { sourceInstanceName: { eq: "gallery-images" } }
    ) {
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
