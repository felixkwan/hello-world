import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Heading = () => {

  return (
    <>
  <div>
      <section className="heading mb-12">
        <div className="heading-body tagline text-justify pt-6 pb-12">
          <div className="staggerLinges text-9xl flex flex-row">
            <h1>Long Term</h1>
            <h3 className="text-5xl flex self-center px-8 py-2 ml-4 border rounded-full">&amp;</h3>
          </div>
          <div className="staggerLines text-9xl flex flex-row">
            <h3 className="text-5xl flex self-center px-8 py-2 mr-4 border rounded-full">Lifetime</h3><h1 className="">Stability</h1>
          </div>
        </div>

        <div className="heading-foot text-center">
          <div className="btn-wrap flex flex-row justify-center mb-4 mt-6">
            <div className="border rounded-full p-6">
              <span className="material-icons-outlined">
                south
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="staggerLines">
              <h3 className="text-gray-400 ">See all in for the</h3>
            </div>
            <div className="staggerLines">
              <h3 className="text-gray-400 "><mark className="bg-transparent">#modern</mark>&nbsp;feel</h3>
            </div>
          </div>
        </div>
      
    </section>
  </div>
  </>
)
}

export default Heading
