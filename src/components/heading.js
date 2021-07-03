import * as React from "react"
import PropTypes from "prop-types"

const Heading = () => (
  <div>
      <section className="heading">
      <div className="staggerLinges">
       <h1>Long Term</h1><span>888</span>
      </div>
      <div className="staggerLines">
        <span>Lifetime</span><h1>Stability</h1>
      </div>
      <button>
          I'm button.
      </button>
      <div className="staggerLines">
        <h3>See all in for the</h3>
      </div>
      <div className="staggerLines">
        <h3 className="highlight">#modern</h3><h3>feel</h3>
      </div>
    </section>
  </div>
)

export default Heading
