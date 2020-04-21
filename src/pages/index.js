import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import './mystyles.scss'
import GridItem from '../components/gridItem'
import { graphql, navigate } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout isHero>
    <SEO title="Strona główna" />
    <Hero
      imageData={
        data.images.edges.find(edge => 'hero' === edge.node.name).node
          .childImageSharp.fluid
      }
    />
    <section
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      className="section"
    >
      <div className="container">
        <h1 className="title">Komobex Inel</h1>
        <h2 className="subtitle">
          Realizujemy prace w obiektach budownictwa ogólnego, komunalnego i
          przemysłowego. Zakres prac obejmuje instalacje sanitarne i
          elektryczne. Dodatkowo oferujemy usługi dźwigowe
        </h2>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="columns"
        >
          <GridItem
            label="Instalacje elektryczne"
            className="column"
            imageData={
              data.images.edges.find(edge => 'electricity' === edge.node.name)
                .node.childImageSharp.fluid
            }
          />
          <GridItem
            label="Instalacje sanitarne"
            className="column"
            imageData={
              data.images.edges.find(edge => 'pipes' === edge.node.name).node
                .childImageSharp.fluid
            }
          />
        </div>
        <div className="columns">
          <GridItem
            label="Usługi dźwigowe"
            className="column"
            isFixed
            imageData={
              data.images.edges.find(edge => 'services' === edge.node.name).node
                .childImageSharp.fluid
            }
          />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Przykładowe realizacje</h1>
        <div className="columns">
          {data.realizations.edges
            .filter(edge => edge.node.main_page === true)
            .map(edge => {
              const image = data.galleryImages.edges.find(
                imageEdge => imageEdge.node.name === edge.node.preview_image
              )

              return (
                <GridItem
                  onClick={() =>
                    navigate(`/realizacje/${edge.node.images_directory}`)
                  }
                  key={edge.node.preview_image}
                  label={edge.node.title}
                  className="column"
                  imageData={image.node.childImageSharp.fluid}
                />
              )
            })}
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query ImagesQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "services-images" } }) {
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

export default IndexPage
