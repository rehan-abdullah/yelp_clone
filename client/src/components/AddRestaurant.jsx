import React, {useState, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import {RestaurantsContext} from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const {addRestaurant} = useContext(RestaurantsContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      });
      addRestaurant(res.data.data.restaurant);
      setName('');
      setLocation('');
      setPriceRange('Price Range');
    } catch(err){
      console.log(err);
    }
  };

  return (
    <div className="mb-4 restaurant-form-container">
      <form action="" className="px-2">
        <div className="form-group row">
          <div className="col-12 my-1 px-sm-1 col-sm-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name..." />
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-4">
            <input 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text" 
              className="form-control" 
              placeholder="Location..." />
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-3">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-control custom-select mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">£</option>
              <option value="2">££</option>
              <option value="3">£££</option>
              <option value="4">££££</option>
              <option value="5">£££££</option>
            </select>
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-1">
            <button
              type="submit"
              className="btn btn-primary btn-add"
              onClick={handleSubmit}
            >Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
