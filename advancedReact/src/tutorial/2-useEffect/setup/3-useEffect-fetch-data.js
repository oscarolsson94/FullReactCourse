import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => { //cant set useEffect to async, so make external function
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users) //triggers infinite loop if we dont have empty array in useEffect!
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h3>github users</h3>
            <ul className="users">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} />   
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} alt="" target="_blank">{html_url}</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>     
    );
};

export default UseEffectFetchData;
