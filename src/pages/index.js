import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Subscribe from "../components/subscribe"
import About from "../components/about"
import Seo from "../components/seo"
import "tailwindcss/tailwind.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Heading/>
    <About/>

  </Layout>
)

export default IndexPage
