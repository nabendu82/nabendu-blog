import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script type="text/javascript">
          window._mNHandle = window._mNHandle || {};
          window._mNHandle.queue = window._mNHandle.queue || [];
          medianet_versionId = "3121199";
        </script>
        <script src="//contextual.media.net/dmedianet.js?cid=8CUVUWCU4" async="async"></script>
        </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="322374539">
          <script type="text/javascript">
              try {
                  window._mNHandle.queue.push(function (){
                      window._mNDetails.loadTag("322374539", "160x600", "322374539");
                  })
              }
              catch (error) {}
          </script>
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
