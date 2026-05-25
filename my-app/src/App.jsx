import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';  
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {
    const [mealPlans, setMealPlans] = useState(
        localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []
    );
    const [selectedDay, setSelectedDay] = useState(false);

    const addMeal = () => {
        const newMeal = {
            title: 'Today is ...',
            id: uuid(),  
            mealForADay: '',
            ingredients: ''
        };
        setMealPlans([newMeal, ...mealPlans]); 
    };

    const deleteDay = (mealId) => {
        setMealPlans(mealPlans.filter(({ id }) => id !== mealId));
    };

    const updateDay = (updatedMeal) => { 
        const updatedMeals = mealPlans.map((mealPlan) => {
            if (mealPlan.id === updatedMeal.id) {  
                return updatedMeal;
            }
            return mealPlan;
        });
        setMealPlans(updatedMeals);
    };

    const ActivateMeal = () => {
        return mealPlans.find(({ id }) => id === selectedDay);
    };

    useEffect(() => {
        localStorage.setItem('mealPlans', JSON.stringify(mealPlans));
    }, [mealPlans]);

    return (
        <div className='App'>
            <MyList
                mealPlans={mealPlans}
                addMeal={addMeal}
                deleteDay={deleteDay}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />
            <MyMealsAndIngredients 
                selectedDay={ActivateMeal()} 
                updateDay={updateDay}
            />
        </div>
    );
}

export default App;