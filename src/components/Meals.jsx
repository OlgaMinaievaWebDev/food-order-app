import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig ={}

function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error } = useHttp('http://localhost:3000/meals', requestConfig,[])
 
  console.log(loadedMeals)
  if (isLoading) {
    return <p>Fetching meals...</p>
  }

  if (error) {
    return <Error title="Error" message={error} />
  }

 return (
   <ul id="meals">
     {loadedMeals.map((meal) => (
       <MealItem key={meal.id} meal={meal} />
     ))}
   </ul>
 );
}

export default Meals
