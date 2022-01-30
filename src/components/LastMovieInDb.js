import React from 'react';
import {useEffect, useState} from 'react';

function LastMovieInDb(){

    const [lastUser, setlastUser] = useState([]);
    
    useEffect(function (){
        (async ()=> {
        let apiUsersRes = await fetch("http://localhost:3000/api/users")
        apiUsersRes = await apiUsersRes.json();
        let lastPage = Math.floor(apiUsersRes.count / 10);
        apiUsersRes = await fetch(`http://localhost:3000/api/users?page=${lastPage}`)
        apiUsersRes = await apiUsersRes.json();
        apiUsersRes = await fetch(`http://localhost:3000/api/users/${apiUsersRes.users.at(-1).id}`)
        apiUsersRes = await apiUsersRes.json();
        console.log(apiUsersRes);
        setlastUser(apiUsersRes)
    })()
    }, []) 

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last user in Database</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://"+lastUser.profile_pic} alt=" User profile "/>
                    </div>
                    <p><b>Username:</b> {lastUser.username}</p>
                    <p><b>Email:</b> {lastUser.email}</p>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
