import React from 'react';

import classes from './MealsSummary.module.css'

const MealsSummary = () =>{
    return <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            choose your favorite food from our broad selection of available foods and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
            All our foods are cooked with high quality ingredients, just-in-time and of course by experienced chefs!
        </p>
    </section>
}
export default MealsSummary;