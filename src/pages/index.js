import React from "react"
import Layout from "../components/layout"
import Img from "../images/drawkit-grape-pack-illustration-18sv2 (1).svg"



const Index = () => {
  return (
    <Layout>
      <div class="div1">
        <h1 class="principal-name">
          Hi, I’m <span class="principal-name-strong">Jose Acevedo</span>,
          <br /> <span class="principal-name-strong">Jdesigner</span>.
        </h1>
        <p class="info-text">
          Fullstack Developer lover and <span class="principal-name-strong">fan for UI & UX</span>
        </p>

        <p>
          <strong>PHP - REACTJS - REACT NATIVE - UI WEB DESIGN</strong>
        </p>
      </div>
      <div class="div2">
        <img src={Img} class="imgLogo" alt="" />
      </div>
    </Layout>
  )
}

export default Index
