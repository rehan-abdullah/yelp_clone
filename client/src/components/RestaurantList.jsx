import React from 'react';

const RestaurantList = () => {
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
