import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get("http://localhost:4000")
    .then(({data}) => {console.log(data)
        setMeal(data)
    })
}
const addMeal = (name, setName, setMeal) => {
    axios.post('http://localhost:4000/saveMeals', {name})
    .then((data) => {
        console.log(data);
        setName("");
        getAllMeals(setMeal)
    })
}
const editMeal = (mealId, name, setName, setMeal, setEditing) => {
    axios.put('http://localhost:4000/editMeal', {_id:mealId, name})
    .then((data) => {
        console.log(data);
        setName("");
        setEditing(false)
        getAllMeals(setMeal)
    })
}
const deleteMeal = (_id, setMeal) => {
    axios.post('http://localhost:4000/deleteMeal', {_id})
    .then((data) => {
        console.log(data);
        getAllMeals(setMeal)
    })
}

export {getAllMeals, addMeal, editMeal, deleteMeal}
