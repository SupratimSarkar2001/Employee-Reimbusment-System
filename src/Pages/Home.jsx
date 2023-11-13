import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <div className="p-4 shadow-4 rounded-3" style={{
    backgroundColor: "hsl(0, 0%, 94%)",
    height: "600px",
    }}
  >
    <div className="mask rounded-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", paddingTop:"10px", paddingBottom:"10px", borderRadius:"10px"}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Welcome !</h1>
          <h4 className="mb-3">Consider Login / Register before making any action</h4>
          <Link className="btn btn-outline-light btn-lg rbtn" to="/register" role="button">Register</Link>
          <Link className="btn btn-outline-light btn-lg rbtn" to="/login" role="button">Login</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
