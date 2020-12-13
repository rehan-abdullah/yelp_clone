import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantsContext} from '../context/RestaurantsContext';

const RestaurantList = () => {
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);

  useEffect(() => {

    const fetchAllRestaurants = async () => {
      try {
        const res = await RestaurantFinder.get("/");
        setRestaurants(res.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRestaurants();
  }, [setRestaurants])

  console.log(restaurants);

  return (
    <div className="list-group restaurant-list-container">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col" className="bg-primary">Restaurant</th>
            <th scope="col" className="bg-primary">Location</th>
            <th scope="col" className="bg-primary">Price Range</th>
            <th scope="col" className="bg-primary">Rating</th>
            <th scope="col" className="bg-primary">Edit</th>
            <th scope="col" className="bg-primary">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>McDonalds</td>
            <td>Harrow</td>
            <td>££</td>
            <td>4</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td>McDonalds</td>
            <td>Harrow</td>
            <td>££</td>
            <td>4</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList;
