import React, { useState, useEffect } from 'react';

const Feed = () => {
  
  const [activities, setActivities] = useState([]);
  // const [selected, setSelectedActivity] = useState(null); 
  const [parks, setParks] = useState([]); 

  const handleChange = (event) => {
    if (event.target.value === ""){
      setParks([])
      return
    }
    
    fetch(`https://developer.nps.gov/api/v1/activities/parks?id=${event.target.value}&api_key=Oc6BSAShVGP0SR3g6Dnc5D3x8bp5I6MvCgOeLhku`)
      .then(res => res.json())
      .then(res => {setParks(res.data[0].parks)});
  }; 

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/activities?api_key=Oc6BSAShVGP0SR3g6Dnc5D3x8bp5I6MvCgOeLhku')
    .then(res => res.json())
    .then(res => {setActivities(res.data)});
  }, []); 

  return (
    <div>
      <select onChange={handleChange}>
        <option value=""></option>
        {activities.map((activity) => <option value={activity.id}>{activity.name}</option>)}
      </select>

      {parks.map((park) => <p>{park.fullName}</p>)}
    </div>
  )
}

export default Feed