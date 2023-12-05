import React from "react"


import "./usercard.css"


const Usercard = (props) => {
    const {deleteUser,userData} = props
    const {name, role, location, id} = userData

    const onDelete = () => {
        deleteUser(id)
    }

    return(
        <li className="list-container">
            <img src="https://via.placeholder.com/150/771796" alt = "userimg" className="user-image"/>
            <div className="details-container">
                <h1>{name}</h1>
                <p>{role}, {location}</p>
            </div>
            <button onClick={onDelete}>x</button>
        </li>
    )
}

export default Usercard