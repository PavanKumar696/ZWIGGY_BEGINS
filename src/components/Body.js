import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import { useEffect } from "react";
//let resList=restaurantList;

//search Filter function
function filterData(searchText, resList) {
  const filterData = resList.filter((resList) =>
    resList?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //console.log(json);

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log(checkData);
        if (checkData !== undefined) {
          return checkData;
        }
         }
      }
      const resData = await checkJsonData(json);
      setresList(resData);
    } catch (error) {
      console.log(error);
    }
  };



 // data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info



  if (resList.length === 0) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // filter the data
              const data = filterData(searchText, resList);
              // update the state of restaurants list
              setresList(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter_resList = resList.filter(
              (res) => res.data.avgRating > 4.4
            );
            
            setresList(filter_resList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
