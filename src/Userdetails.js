import React,{Component} from "react"

import Usercard from "./Usercard"

import "./Userdetails.css"

const userDetailsList = [
    {
        id:0,
        name:"rahul",
        role:"software engineer",
        location:"hyderabad",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:1,
        name:"shiva",
        role:"software engineer",
        location:"hyderabad",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
    {
        id:2,
        name:"karthik",
        role:"software developer",
        location:"bangalore",
        imageUrl:"https://via.placeholder.com/150/771796",
    },
]


class Userdetails extends Component{
    state = {
        searchInput : "",
        initialUserDetails : userDetailsList,
    }

    onChangeSearchInput = (event) => {
        this.setState({
            searchInput : event.target.value
        })
        console.log(this.state.searchInput)
    }

    deleteUser = (id) => {
        const {initialUserDetails} = this.state 
        const fliteredData = initialUserDetails.filter(each => (
            each.id !== id
        ))
        this.setState({initialUserDetails:fliteredData})
    }

    render(){
        const {initialUserDetails, searchInput} = this.state
        const searchResults = initialUserDetails.filter(
            each => each.name.includes(searchInput)
        )
        return(
            <div className="content-container">
            <h1>User Details</h1>
            <input type = "search" onChange={this.onChangeSearchInput}/>
                <ul>
                    {searchResults.map((eachItem) => (
                        <Usercard userData = {eachItem}
                            key = {eachItem.id}
                            deleteUser={this.deleteUser}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}


export default Userdetails