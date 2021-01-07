import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TrustpilotContainer from "./trustpilot-container"

const TrustpilotReviews = ({ language, culture, theme, height, width }) => {
  const reference = React.createRef()
  const { sitePlugin } = useStaticQuery(
    graphql`
      query TrustPilot {
        sitePlugin(name: { eq: "@phylaxpl/gatsby-plugin-trustpilot-widget" }) {
          pluginOptions {
            username
            business
          }
        }
      }
    `
  )
  const { business, username } = sitePlugin.pluginOptions

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
        template={template}
        business={business}
        username={username}
      />
    </Fragment>
  )
}

TrustpilotReviews.propTypes = {
  template: PropTypes.string,
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

TrustpilotReviews.defaultProps = {
  template: "",
  language: "en",
  culture: "US",
  theme: "light",
  height: "52px",
  width: "100%"
}

export default TrustpilotReviews