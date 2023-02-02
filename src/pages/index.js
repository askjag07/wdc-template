import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default function IndexPage() {
  return (
    /**
     *  You'll type most of your code between the <> and </> below.
     *  Check our reference sheets and the internet for help.
     */
    <>
      <Header />
      <div className="container">
        <br />
        <br />
        <h1>This is a heading!</h1>
        <p>This is what I wish was a paragraph. Time to get creative!</p>
        <Link to="/p2">Go to Page 2...</Link>
        <br />
        <Link to="/Never-gonna-give-you-up-Never-gonna-let-you-down-Never-gonna-run-around-and-desert-you-Never-gonna-make-you-cry-Never-gonna-say-goodbye-Never-gonna-tell-a-lie-and-hurt-you">
          Get lost!
        </Link>
      </div>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>Home Sweet Home Page | Edit this Title</title>
    </>
  )
}
