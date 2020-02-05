/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <script type="text/javascript">
            window._mNHandle = window._mNHandle || {};
            window._mNHandle.queue = window._mNHandle.queue || [];
            medianet_versionId = "3121199";
        </script>,
        <script src="//contextual.media.net/dmedianet.js?cid=8CUVUWCU4" async="async"></script>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/plugins.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>
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
        </React.Fragment>
    ]);

};
