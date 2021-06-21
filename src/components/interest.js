import React, { useEffect, useState } from "react"
import {authFetch} from "./login";

const Interest = () => {
    const [message, setMessage] = useState('')
    const [datascience, setDatascience] = useState(false)
    const [software_dev, setSoftware_dev] = useState(false)
    const [optimization, setOptimization] = useState(false)
    const [engineering, setEngineering] = useState(false);

    useEffect(() => {
      authFetch("/api/interest", {
        method: 'get',
      }).then(response => {
        return response.json()
      }).then(response => {
          setMessage(response.message)
        }
      )
    }, [])

const onSubmitClick = (e)=>{
  e.preventDefault()
  console.log("You pressed submit")
  let values = {
    'datascience': datascience,
    'software_dev': software_dev,
    'optimization': optimization,
    'engineering': engineering
  }
  console.log(values)
  authFetch('/api/interest', {
    method: 'post',
    body: JSON.stringify(values)
  }).then(r => r.json())
  .then(
    r => {
      console.log(r)
    }
  )
}
  return (
  <h1>
    <h2>Interest: {message}</h2>
    <label>
      <input type="checkbox"
        defaultChecked={datascience}
        onChange={() => setDatascience(!datascience)}
      />
      Data Science
    </label>

    <label>
    <input type="checkbox"
      defaultChecked={software_dev}
      onChange={() => setSoftware_dev(!software_dev)}
    />
    Software Development
  </label>

    <label>
    <input type="checkbox"
      defaultChecked={optimization}
      onChange={() => setOptimization(!optimization)}
    />
    Optimization
  </label>

    <label>
    <input type="checkbox"
      defaultChecked={engineering}
      onChange={() => setEngineering(!engineering)}
    />
    Engineering
  </label>
  <button onClick={onSubmitClick} type="submit">
            Interest updated
          </button>
</h1>
);
}

export default Interest;