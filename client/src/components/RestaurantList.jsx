import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantsContext} from '../context/RestaurantsContext';

const RestaurantList = () => {
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);

  let history = useHistory();

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
  }, [setRestaurants]);

  const handleDelete = async (id) => {
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    } catch (err) {
      console.log(err)
    }
  };

  const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`);
  };

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
          {restaurants && restaurants.map((restaurant) => {
            const {id, name, location, price_range} = restaurant;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{"£".repeat(price_range)}</td>
                <td>{Math.floor((Math.random() * 5) + 1)}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(restaurant.id)}
                    className="btn btn-warning"
                    >Update</button></td>
                <td>
                  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-danger"
                  >Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList;
