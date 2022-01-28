import React from 'react';
import SmallCard from './SmallCard';
//import fetch from 'node-fetch';
import {useEffect, useState} from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let apiUsers = {};
let apiProducts = {};

   
    
    let usersInDb = {
    title: 'Users in DataBase',
    color: 'primary', 
    cuantity:'',
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let productsInDb = {
    title:'Products in DataBase', 
    color:'success', 
    cuantity: '',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let categoriesInDb = {
    title:'Categories in DataBase' ,
    color:'warning',
    cuantity:'',
    icon:'fa-user-check'
}


let cartProps = [usersInDb, productsInDb, categoriesInDb];

function ContentRowMovies(){



    const [usersCount, setUsersCount] = useState([]);

    const [productsCount, setProductsCount] = useState([]);

    const [categoriesCount, setCategoriesCount] = useState([]);
    

    useEffect(function (){
        (async ()=> {
        apiUsers = await fetch("http://localhost:3000/api/users")
        console.log(apiUsers)
        apiUsers = await apiUsers.json();
        console.log(apiUsers.count);
        setUsersCount(apiUsers.count)

        apiProducts = await fetch("http://localhost:3000/api/products")
        console.log(apiProducts)
        apiProducts = await apiProducts.json();
        console.log(apiProducts.count);
        setProductsCount(apiProducts.count)

        setCategoriesCount(Object.keys(apiProducts.countByGenre).length)

    })()
    }, []) 

    usersInDb.cuantity = usersCount;
    productsInDb.cuantity = productsCount;
    categoriesInDb.cuantity = categoriesCount;

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}



export default ContentRowMovies;


