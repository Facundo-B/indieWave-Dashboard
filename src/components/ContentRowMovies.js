import React from 'react';
import SmallCard from './SmallCard';
//import fetch from 'node-fetch';
import { useEffect, useState } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let apiUsers = {};
let apiProducts = {};



let usersInDb = {
    title: 'Surfers in DataBase',
    color: 'steelpink',
    cuantity: '',
    icon: 'fa-users'
}

/* <!-- Total awards --> */

let productsInDb = {
    title: 'Games in DataBase',
    color: 'turquoise',
    cuantity: '',
    icon: 'fa-gamepad'
}

/* <!-- Actors quantity --> */

let categoriesInDb = {
    title: 'Categories in DataBase',
    color: 'aquamarine',
    cuantity: '',
    icon: 'fa-clipboard-list'
}


let cartProps = [usersInDb, productsInDb, categoriesInDb];

function ContentRowMovies() {



    const [usersCount, setUsersCount] = useState([]);

    const [productsCount, setProductsCount] = useState([]);

    const [categoriesCount, setCategoriesCount] = useState([]);


    useEffect(function () {
        (async () => {
            apiUsers = await fetch("http://localhost:3000/api/users")
            apiUsers = await apiUsers.json();
            setUsersCount(apiUsers.count)
            apiProducts = await fetch("http://localhost:3000/api/products")
            apiProducts = await apiProducts.json();
            setProductsCount(apiProducts.count)
            setCategoriesCount(Object.keys(apiProducts.countByGenre).length)

        })()
    }, [])

    usersInDb.cuantity = usersCount;
    productsInDb.cuantity = productsCount;
    categoriesInDb.cuantity = categoriesCount;

    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}



export default ContentRowMovies;


