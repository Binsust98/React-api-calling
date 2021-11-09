import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>WELCOME !!!!!!</h1>
    <p>DEMO APP</p>

    <Link to="/comments" className="button">
      View Posts
    </Link>
  </section>
)

export default DashboardPage