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
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    (adsbygoogle = window.adsbygoogle || []).push({
                      google_ad_client: "ca-pub-8060048775507010",
                      enable_page_level_ads: true
                    });
                    `,
                  }}
        /> */}
        <script type="text/javascript"> var infolinks_pid = 3233958; var infolinks_wsid = 0; </script>
        <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
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
        <script data-cfasync='false' type='text/javascript' src='//p383402.clksite.com/adServe/banners?tid=383402_752568_0'></script>
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
