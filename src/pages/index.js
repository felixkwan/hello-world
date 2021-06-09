import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Subscribe from "../components/subscribe"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="heading">
      <div className="staggerLinges">
       <h1>Long Term</h1><span>888</span>
      </div>
      <div className="staggerLines">
        <span>Lifetime</span><h1>Stability</h1>
      </div>
      <button>
        <Link></Link>
      </button>
      <div className="staggerLines">
        <h3>See all in for the</h3>
      </div>
      <div className="staggerLines">
        <h3 className="highlight">#modern</h3><h3>feel</h3>
      </div>
    </section>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>

    <Subscribe/>

  </Layout>
)

export default IndexPage
