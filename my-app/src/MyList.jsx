const MyList = ({addMeal , mealPlans , setSelectedDay , selectedDay}) => {
    return <div>
        <div>
            <h1>Weekly Plan Ideas</h1>
            <button className="buttonAdd" onClick={addMeal}>Add</button>
        </div>
        <div>
            {mealPlans.map(({title , id , mealForADay}) => (
                <div className={`meal ${id === selectedDay} ? 'selected' : 'default'} `}
                    onClick={() => setSelectedDay(id)}
                >
                    <p className="title">{title}</p>
                    <p className="title">{mealForADay.substring(0 , 60)}</p>
                    <button className="buttonDelete" onClick={() => deleteDay(id)}>Delete</button>    

                </div>
            ))}
        </div>
    </div>
} 

export default MyList;