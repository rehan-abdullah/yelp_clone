import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {RestaurantsContext} from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';

const RestaurantDetailPage = () => {
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);
  const {id} = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try{
        const res = await RestaurantFinder.get(`/${id}`)
        const {restaurant} = res.data.data;
        setSelectedRestaurant(restaurant);
      } catch(err){
        console.log(err);
      }
    };
    fetchRestaurant();
  }, [id, setSelectedRestaurant]);

  return (
    <div className="container">
      { selectedRestaurant ? (
        <div>
          <h1 className="font-weight-light display-1 text-center mt-5 mb-4">{selectedRestaurant.name}</h1>
        </div>
      ) : (
        <div>
          <h1 className="font-weight-light display-1 text-center mt-5 mb-4">404 Not Found!</h1>
        </div>
      )}
    </div>
  )
}

export default RestaurantDetailPage
