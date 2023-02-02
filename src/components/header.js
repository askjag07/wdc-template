import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function HeaderPage() {
  return (
    /**
     *  You'll type most of your code between the <> and </> below.
     *  Check our reference sheets and the internet for help.
     */
    <navbar className="navbar bg-body-tertiary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <StaticImage
            src="../images/icon.png"
            alt="A description of your logo."
            placeholder="blurred"
            height={30}
          />
          &nbsp;Your Website's Title!!!
        </Link>
      </div>
    </navbar>
  )
}
