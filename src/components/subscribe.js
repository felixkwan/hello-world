import * as React from "react"
import { Link } from "gatsby"

const Subscribe = () => (
    <section className="heading">
      <div className="subscribe-wrap">
        <div className="container padding-narrow">
            <button className="btn-oval">
                submit
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

export default Subscribe
