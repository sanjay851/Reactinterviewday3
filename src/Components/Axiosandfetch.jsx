import React from 'react'
export const Axiosandfetch = () => {
  return (
    <div>
      <h1>Q1.Difference between Axios and fetch?</h1>
      <h1>Axios</h1>
      <p className='axios'>
        <ul>
          <li>It is promise based HTTP client for the browser.
            It makes sending asynchronous HTTP requests to REST endpoints easier and helps you perform CRUD operations.
            </li>
          <li>Axios has url in request object.</li>
          <li> Axios is a stand-alone third party package that can be easily installed.</li>
          <li>We can use async await with these ,as they are based on promises.</li>
        </ul>
        
          
          </p>
          <h1>fetch</h1>
          <p className='axios'>
              <ul>
                <li>The Fetch API through the fetch() method allows us to make an HTTP request to the backend. With this method, we can perform different types of operations using HTTP methods like the GET method to request data from an endpoint, POST to send data to an endpoint, and more.</li>
                <li> Fetch has no url in request object.</li>
                <li> Fetch is built into most modern browsers; no installation is required as such.</li>
              </ul>
          </p>
    
      </div>
  )
}

