import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
    <footer id="footer">
        <section className="footer-wrap">
            <div className="container">
                <div className="footer-head">
                    <div className="footer-nav">

                    </div>
                    <div className="social-link">
                        <ul>

                        </ul>
                    </div>
                </div>    
                <div className="footer-bottom">
                    <div className="flex-box">
                        <div className="align-center">
                            <h6 className="medium">© {new Date().getFullYear()}</h6>
                        </div>
                        <div className="align-right">
                            <h6>Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
)

export default Footer
