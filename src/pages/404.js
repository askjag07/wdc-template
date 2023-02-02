import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default function NotFoundPage() {
  return (
    /**
     *  You'll type most of your code between the <> and </> below.
     *  Check our reference sheets and the internet for help.
     */
    <>
      <Header />
      <div className="container">
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
          <br />
          <Link to="/">Go home</Link>. Or...
          <br />
          <Link to="/p2">Go to Page 2.</Link>
        </p>
      </div>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>You're Lost!!! | Edit this Title</title>
    </>
  )
}
