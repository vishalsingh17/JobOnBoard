import React from 'react'
import './Home.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Features from './Features';
import Benefits from './Benefits';
import Jobs from './Jobs';
import SpecialFeatures from './SpecialFeatures';
import Reviews from './Reviews';
import Community from './Community';
import CommonQues from './CommonQues';
import JoinNow from './JoinNow';
import Pricing from './Pricing';

function Home() {

    return (
        <div className="home page-template page-template-elementor_header_footer page page-id-61 ehf-header ehf-footer ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme elementor-default elementor-template-full-width elementor-kit-90 elementor-page elementor-page-61">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-dark-grayscale">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 0.49803921568627" />
                            <feFuncG type="table" tableValues="0 0.49803921568627" />
                            <feFuncB type="table" tableValues="0 0.49803921568627" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-grayscale">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 1" />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB type="table" tableValues="0 1" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-purple-yellow">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR
                                type="table"
                                tableValues="0.54901960784314 0.98823529411765"
                            />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB
                                type="table"
                                tableValues="0.71764705882353 0.25490196078431"
                            />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-blue-red">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 1" />
                            <feFuncG type="table" tableValues="0 0.27843137254902" />
                            <feFuncB
                                type="table"
                                tableValues="0.5921568627451 0.27843137254902"
                            />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-midnight">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0 0" />
                            <feFuncG type="table" tableValues="0 0.64705882352941" />
                            <feFuncB type="table" tableValues="0 1" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-magenta-yellow">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.78039215686275 1" />
                            <feFuncG type="table" tableValues="0 0.94901960784314" />
                            <feFuncB
                                type="table"
                                tableValues="0.35294117647059 0.47058823529412"
                            />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-purple-green">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR
                                type="table"
                                tableValues="0.65098039215686 0.40392156862745"
                            />
                            <feFuncG type="table" tableValues="0 1" />
                            <feFuncB type="table" tableValues="0.44705882352941 0.4" />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                width={0}
                height={0}
                focusable="false"
                role="none"
                style={{
                    visibility: "hidden",
                    position: "absolute",
                    left: "-9999px",
                    overflow: "hidden"
                }}
            >
                <defs>
                    <filter id="wp-duotone-blue-orange">
                        <feColorMatrix
                            colorInterpolationFilters="sRGB"
                            type="matrix"
                            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
                        />
                        <feComponentTransfer colorInterpolationFilters="sRGB">
                            <feFuncR type="table" tableValues="0.098039215686275 1" />
                            <feFuncG type="table" tableValues="0 0.66274509803922" />
                            <feFuncB
                                type="table"
                                tableValues="0.84705882352941 0.41960784313725"
                            />
                            <feFuncA type="table" tableValues="1 1" />
                        </feComponentTransfer>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            <div id="page" className="hfeed site">
                <Navbar/>
                <div
                    data-elementor-type="wp-page"
                    data-elementor-id={61}
                    className="elementor elementor-61"
                >
                    <Welcome/>
                    <Features/>
                    <Benefits/>
                    <Jobs/>
                    <SpecialFeatures/>
                    <Reviews/>
                    <Community/>
                    <CommonQues/>
                    <JoinNow/>
                    <Pricing/>
                </div>
            </div>
            <link
              rel="stylesheet"
              id="jeg-dynamic-style-css"
              href="https://advanture.icu/jobmart/wp-content/plugins/jeg-elementor-kit/lib/jeg-framework/assets/css/jeg-dynamic-styles.css?ver=1.3.0"
              media="all"
          />
          <link
              rel="stylesheet"
              id="sweetalert2-css"
              href="https://advanture.icu/jobmart/wp-content/plugins/jeg-elementor-kit/assets/js/sweetalert2/sweetalert2.min.css?ver=11.6.16"
              media="all"
          />
          <link
              rel="stylesheet"
              id="tiny-slider-css"
              href="https://advanture.icu/jobmart/wp-content/plugins/jeg-elementor-kit/assets/js/tiny-slider/tiny-slider.css?ver=2.9.3"
              media="all"
          />
          <link
              rel="stylesheet"
              id="e-animations-css"
              href="https://advanture.icu/jobmart/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.17.3"
              media="all"
          />
        </div> 
    )     
}

export default Home
