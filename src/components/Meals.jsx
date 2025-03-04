import { useEffect, useState } from "react"

function Meals() {
 const [meals, setMeals] = useState([]);
 
 useEffect(() => {
 async function fetchMeals() {
  const response = await fetch('http://localhost:3000/meals');

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();
  setMeals(data)
 
 }
  fetchMeals()
 }, [])
 
 return (
  <ul id="meals">
   {meals.map(meal => (
    <li key={meal.id}>
     <h3>{meal.name}</h3>
     <p>{meal.description}</p>
     <p>{meal.price}</p>
    </li>
   ))}
  </ul>
 )
}

export default Meals
