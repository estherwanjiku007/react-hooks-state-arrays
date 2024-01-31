import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";
import { spicyFoods } from "../data/index";
function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood()
    const newFoods2=[...foods,newFood]
    setFoods(newFoods2)
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
  function deleteFood(){
    foodList2=foods.map((food)=>{(
      <li id={food.id} onClick={()=>handleDelete(food.id)}>{food.name}|{food.cuisine}|{food.heatLevel}</li>
    )
})
  }
  function handleDelete(id){
    newFoods2=foods.filter((food)=>food.id!==id)
      setFoods(newFoods2)
    }
  }



export default SpicyFoodList;
