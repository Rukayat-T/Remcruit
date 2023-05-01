import React from 'react'

function WhatWeOffer() {
  return (
    <div>
      <div className="main-container">
        <div className="container-header">
            <h1>What We Offer</h1>
            <p className="headdd">
            Remcruit offers a lot more services which include specific job recommendations, 
            job blogs, 
            career consulting and more
          </p>
          <div className="offered-content">
            <div className="offered-card">
            <img src="https://source.unsplash.com/hBuwVLcYTnA" alt="" />
            <p>Job Recommendations</p>
            </div>
            <div className="offered-card">
            <img src=" https://source.unsplash.com/4YzrcDNcRVg" alt="" />
            <p>CV Help</p>
            </div>
            <div className="offered-card">
            <img src="https://source.unsplash.com/vWchRczcQwM" alt="" />
            <p>Blogs & Career Help</p>
            </div>
          
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer
