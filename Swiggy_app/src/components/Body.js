import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantData, setRestaurantData] = useState([])
    const [searchText,setSearchText] = useState("")

    useEffect(() => {
        fetchData()
        
       
    }, [])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

       const jsonData = await data.json()

        console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantData(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        return  jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    }


    const handleFilter = () => {
        const filteredData = restaurantData.filter((item, index) => {
            return  (+item.info.avgRating) > 4.4
        })
        setRestaurantData(filteredData)

    }

    const handleSearch = async () => {
        const fi = await fetchData()

        if (fi)
        {
            const searchFilter = fi.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setRestaurantData(searchFilter)
            setSearchText("")
            
            }
       

    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
        
    }

     return restaurantData.length === 0 ?  <Shimmer/>: (
         <div className="body">
        
         
         <div className="filter">
         <input type="text" className="input_text" placeholder="Search" value={searchText} onChange={handleChange}/>
  <button className = "search_btn" onClick={handleSearch} >
       Search
        </button>
                 
          <button className = "filter_btn" onClick={handleFilter}>
                Top Rated Restaurant
                </button>
                
             </div>
             
            <div className="res_container">
                {
                    restaurantData?.map((item, index) => {
                        return (
                            <RestaurantCard data={item} key={item.info.id } />
                        )
                    })
        }
           
            </div>
        
        </div>
    )
}

export default Body