import * as React from "react"
import { Link } from "gatsby"

const About = () => (
    <section className="about">
      <div className="about-wrap">
        <div className="container flex flex-col">
           <div className="container title staggerLines pb-5 mb-4">
               <h3 className="uppercase">know</h3>
               <h3 className="uppercase">about</h3>
               <h3 className="uppercase">us</h3>
           </div>
           <div className="staggerLines">
               <div className="row">
                    <h2>We're design</h2>
               </div>
               <div className="row">
                    <h2>brand</h2>
                    <h2>focused</h2>
               </div>
           </div>
        </div>
      </div>
    </section>
)

export default About
