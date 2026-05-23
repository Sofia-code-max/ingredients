import { useState } from 'react'
import './App.css'
import MyList from './MyList'
import MyMealsAndIngredients from './MyMealsAndIngredients'


function App() {

  const [mealPlans , setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans):[])
  const [selectedDay , setSelectedDay] = useState(false)
  const addMeal = () => {
    const newMeal = {
      title:'Today is ...',
      id:uuid(),
      mealForADay:'',ingredients:''
    }

  }
  
  
  setMealPlans([newMeal,...mealPlans])

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  const updateDay = (mealUpdateMeal) => {
    const updateMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdateMeal.id){
        return myUpdateMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMeals)
  }

  

  const ActivateMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className='App'>
      <MyList
        mealPlans={mealPlans}
        addMeal={addMeal}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <MyMealsAndIngredients selectedDay={ActivateMeal()} updateDay={updateDay}/>
    </div>
  )
}

export default App
