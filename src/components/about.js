import * as React from "react"
import { Link } from "gatsby"

const About = () => (
    <section className="heading">
      <div className="about-wrap">
        <div className="container mx-auto flex flex-col">
            <button>
                <Link>submit</Link>
            </button>
           <div className="staggerLines">
               <h2>Subscribe</h2>
           </div>
           <div className="staggerLines">
               <h2>to Newsletter</h2>
           </div>
           <div className="slideInLeft input-area">
                <input type="email" id="email" name="email" placeholder="email"></input>
           </div>
        </div>
      </div>
    </section>
)

export default About
