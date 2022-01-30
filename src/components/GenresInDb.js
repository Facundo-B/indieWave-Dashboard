import React, { useState, useEffect} from "react";


const GenresInDb = () => {
  const [genres, setGenres] = useState([]);

  useEffect(function () {
    (async () => {
      let apiProducts = await fetch("http://localhost:3000/api/products")
      apiProducts = await apiProducts.json();
      setGenres(apiProducts.countByGenre)
    })()
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Database: {Object.keys(genres).length}
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              Object.keys(genres).map((key, i) => (
                <div className="col-lg-6 mb-4" key={key + i}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{`${key}: ${genres[key]}`}</div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
