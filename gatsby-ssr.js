/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents, setPreBodyComponents }) {

    setHeadComponents([
        <script
        dangerouslySetInnerHTML={{
            __html:`
            window._mNHandle = window._mNHandle || {};
            window._mNHandle.queue = window._mNHandle.queue || [];
            medianet_versionId = "3121199";
            `
        }}
    />,
    <script src="//contextual.media.net/dmedianet.js?cid=8CUVUWCU4" async="async" />
    ]);

    setPreBodyComponents([
            <div style={{display: 'flex', alignItem: 'center', justifyContent: 'center'}} id="356636763">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("356636763", "728x90", "356636763");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/plugins.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>
            <div className="leaderAds" style={{display: 'flex', alignItem: 'center', justifyContent: 'center', marginLeft: '9%'}} id="760142725">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("760142725", "970x90", "760142725");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
            <div id="172542266">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("172542266", "320x50", "172542266");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
        </React.Fragment>
    ]);

};
