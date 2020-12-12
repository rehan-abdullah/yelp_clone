import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="mb-4 restaurant-form-container">
      <form action="" className="px-2">
        <div className="form-group row">
          <div className="col-12 my-1 px-sm-1 col-sm-4">
            <input type="text" className="form-control" placeholder="Name..." />
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-4">
            <input type="text" className="form-control" placeholder="Location..." />
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-3">
            <select className="form-control custom-select mr-sm-2">
              <option disabled selected>Price Range</option>
              <option value="1">£</option>
              <option value="2">££</option>
              <option value="3">£££</option>
              <option value="4">££££</option>
              <option value="5">£££££</option>
            </select>
          </div>
          <div className="col-12 my-1 px-sm-1 col-sm-1">
            <button type="submit" className="btn btn-primary btn-add">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
