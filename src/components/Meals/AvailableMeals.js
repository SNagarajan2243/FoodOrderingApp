import React,{ useState,useEffect } from 'react';

import Card from '../UI/Card';

import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

    const [meals,setMeals] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [httpError,setHttpError] = useState()
    useEffect(()=>{

        const loadedMeals = []

        const fetchMeals = async () => {

            const response = await fetch('https://foodorderingapp-22434802-default-rtdb.firebaseio.com/meals.json')
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            const responseData = await response.json()
            if(!responseData){
                throw new Error('Something went wrong')
            }
            for(const key in responseData){
                loadedMeals.push({id: key,name: responseData[key].name,description: responseData[key].description,price: responseData[key].price})
            }

            setMeals(loadedMeals)

            setIsLoading(false)

        }

        fetchMeals().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
        })

    },[])

    if(isLoading){
        return <p className={classes.loadingStyle}>Loading...</p>
    }
    if(httpError){
        return <section><p className={classes.errorStyle}>{httpError}</p></section>
    }

    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} title={meal.name} description={meal.description} price={meal.price} />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;