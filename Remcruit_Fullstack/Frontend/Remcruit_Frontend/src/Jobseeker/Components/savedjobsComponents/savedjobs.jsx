import React from 'react';

function saveJobToBackend(jobId) {
  // Your code to save the job to the backend goes here
  fetch("http://127.0.0.1:8000/employer/AllJobs/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: jobId })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
export default saveJobToBackend