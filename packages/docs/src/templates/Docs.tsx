import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Ads, CodeBlock, Example, Footer, Header, Seo, Sidebar, Toc } from './../components/'
import { CCol, CContainer, CRow, CTable } from '@coreui/react/src/'
import './../styles/styles.scss'

interface ContextProps {
  sidebarVisible: boolean | undefined
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const myContext = React.createContext({} as ContextProps)

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props: any) => <CodeBlock {...props} />,
  // eslint-disable-next-line react/display-name
  table: (props: any) => <CTable responsive {...props} className="table table-striped table-api" />,
  Example,
}

const DocsLayout: FC = ({ data: { mdx } }) => {
  const [sidebarVisible, setSidebarVisible] = useState()
  return (
    <>
      <Seo title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <myContext.Provider
        value={{
          sidebarVisible,
          setSidebarVisible,
        }}
      >
        <Sidebar currentRoute={mdx.frontmatter.route} />
        <div className="wrapper d-flex flex-column min-vh-100">
          <Header />
          <div className="body flex-grow-1 px-3">
            <CContainer lg>
              <CRow>
                <CCol lg={9}>
                  <h1>{mdx.frontmatter.title}</h1>
                  <p className="docs-lead fs-4 fw-light">{mdx.frontmatter.description}</p>
                  <Ads code="CEAICKJY" placement="coreuiio" />
                  <MDXProvider components={components}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
                  </MDXProvider>
                </CCol>
                <CCol lg={3}>
                  <Toc items={mdx.tableOfContents} />
                </CCol>
              </CRow>
            </CContainer>
          </div>
          <Footer />
        </div>
      </myContext.Provider>
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        route
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
