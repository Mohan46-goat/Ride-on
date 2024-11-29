import React, { useEffect, useState } from 'react'

const Project = () => {
  

    const [data, setData]=useState([]);

    useEffect(() => {
        fetch('https://backend-crud-one.vercel.app/product')
        .then(response => {
            if (!response.ok){
                throw new Error('we have a problem in fetching  the data')
            }
            return response.json();
        })
        .then (data => setData(data))
        .catch(error => console.log(error));
    })

    return(
        <>

<div className="container mt-5"> {/* Bootstrap container with top margin */}
      <div className="row"> {/* Bootstrap row for grid layout */}
        {data.map(item => ( // Mapping over the fetched data
          <div className="col-md-4 mb-4" key={item._id}> {/* 4 columns for each card */}
            <div className="card h-100"> {/* Bootstrap card with height 100% */}
              <img src={item.image} className="card-img-top" alt={item.title} /> {/* Image */}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5> {/* Card title */}
                <p className="card-text">{item.description}</p> {/* Card description */}
                <a href={item.image} className="btn btn-primary">View Image</a> {/* Bootstrap button */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );

};

export default Project