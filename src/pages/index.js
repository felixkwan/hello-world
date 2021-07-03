import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Subscribe from "../components/subscribe"
import About from "../components/about"
import Why from "../components/why"
import Seo from "../components/seo"
import "tailwindcss/tailwind.css"

const IndexPage = () => (
  <Layout classname="container mx-auto">
    <Seo title="Home" />
    
    <Heading/>
    <About/>
    <Why/>
    <Subscribe/>

  </Layout>
)

export default IndexPage
