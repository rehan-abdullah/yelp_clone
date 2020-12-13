import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const history = useHistory();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try{
        const res = await RestaurantFinder.get(`/${id}`)
        const {restaurant} = res.data.data;
        setName(restaurant.name);
        setLocation(restaurant.location);
        setPriceRange(restaurant.price_range);
      } catch(err){
        console.log(err);
      }
    };
    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange
      });
      alert("Restaurant Updated!");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form action="">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price-range">Price Range</label>
          <select
            id="price-range"
            className="form-control custom-select mr-sm-2"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Price Range</option>
            <option value="1">£</option>
            <option value="2">££</option>
            <option value="3">£££</option>
            <option value="4">££££</option>
            <option value="5">£££££</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant;
