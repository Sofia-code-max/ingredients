const MyMealsAndIngredients = ({selectedDay , updateDay}) => {

    const editMyMeal = (myInput , value) => {
        updateDay({
            ...selectedDay,
            [myInput]:value
        })
    }

    if(!selectedDay) return <p>Plan your week ahead of time !</p>

    return <div className="whole-plan">
        <div className="meal-editing">
            <input 
                type="text" 
                className="myInput" 
                placeholder="Today is...." 
                id="title" 
                value={selectedDay.title} 
                onChange={(e) => editMyMeal('title' , e.target.value)}
            />
            <textarea
                placeholder="write your meal plan hear" 
                id="mealForADay" value={selectedDay.mealForADay} 
                onChange={(e) => editMyMeal('mealForADay' , e.target.value)}>
            </textarea>
            <textarea 
                placeholder="List of ingredients" 
                id="mealForADay" 
                value={selectedDay.ingredients} onChange={(e) => editMyMeal('ingredients' , e.target.value)}> 
            </textarea>

        </div>
    </div>

}

export default MyMealsAndIngredients