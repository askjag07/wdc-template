import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default function P2Page() {
  return (
    /**
     *  You'll type most of your code between the <> and </> below.
     *  Check our reference sheets and the internet for help.
     */
    <>
      <Header />
      <div className="container">
        <h1>This is another heading!</h1>
        <p>This is what I wish was a paragraph. Time to get creative again!</p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>Welcome to Page 2 | Edit this Title</title>
    </>
  )
}
