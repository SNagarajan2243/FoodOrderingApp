import React from 'react';

import Card from '../UI/Card';

import MealItem from './MealItem/MealItem'

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id:'m1',
        name: 'Dosa',
        description: 'Finest and Delicious Food',
        price: 22.99,
    },
    {
        id:'m2',
        name: 'Poori',
        description: 'Finest and Delicious Food',
        price: 23.99,
    },
    {
        id:'m3',
        name: 'Chappati',
        description: 'Finest and Delicious Food',
        price: 24.99,
    },
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} title={meal.name} description={meal.description} price={meal.price} />);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}
export default AvailableMeals;