import React, { useEffect, useState } from "react"
import {authFetch} from "./authenticate";

const Interest = () => {
    const [message, setMessage] = useState('')
    const [datascience, setDatascience] = useState(false)
    const [software_dev, setSoftware_dev] = useState(false)
    const [optimization, setOptimization] = useState(false)
    const [engineering, setEngineering] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [mathematics, setMathematics] = useState(false)
    const [game_dev, setGame_dev] = useState(false)
    const [ai_ml, setAi_ml] = useState(false)
    const [physics, setPhysics] = useState(false)
    const [chemistry, setChemistry] = useState(false)
    const [biology, setBiology] = useState(false);

    useEffect(() => {
      authFetch("/api/get_interest").then(response => {
        if (response.status === 401){
          setMessage("Sorry you aren't authorized!")
          return null
        }
        return response.json()
      }).then(response => {
        if (response && response.message){
          setMessage(response.message)
        }
      })
    }, [])

const onSubmitClick = (e)=>{
  e.preventDefault()
  console.log("You pressed submit")
  let values = {
    'datascience': datascience,
    'software_dev': software_dev,
    'optimization': optimization,
    'engineering': engineering,
    'statistics': statistics,
    'mathematics': mathematics,
    'game_dev': game_dev,
    'ai_ml': ai_ml,
    'physics': physics,
    'chemistry': chemistry,
    'biology': biology,
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
        defaultChecked={biology}
        onChange={() => setBiology(!biology)}
      />
      Biology
    </label>

    <label>
      <input type="checkbox"
        defaultChecked={chemistry}
        onChange={() => setChemistry(!chemistry)}
      />
      Chemistry
    </label>

    <label>
      <input type="checkbox"
        defaultChecked={physics}
        onChange={() => setPhysics(!physics)}
      />
      Physics
    </label>

    <label>
      <input type="checkbox"
        defaultChecked={mathematics}
        onChange={() => setMathematics(!mathematics)}
      />
      Mathematics
    </label>

    <label>
      <input type="checkbox"
        defaultChecked={statistics}
        onChange={() => setStatistics(!statistics)}
      />
      Statistics
    </label>

    <label>
      <input type="checkbox"
        defaultChecked={ai_ml}
        onChange={() => setAi_ml(!ai_ml)}
      />
      AI & Machine Learning
    </label>


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
      defaultChecked={game_dev}
      onChange={() => setGame_dev(!game_dev)}
    />
    Game Development
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