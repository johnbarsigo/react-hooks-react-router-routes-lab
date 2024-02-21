import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>

      <h1>Directors Page</h1>

      {/*{code here}*/}

      {
        directors.map ( (director, index) => (
          <div>
            <h2 key={index} >{director.name}</h2>
            <ul>
              {
                director.movies.map ( ( movie, index ) => (
                  <li key={index} >{movie}</li>
                 ) )
              }
            </ul>
          </div>
         ) )
      }

    </>
  );
}

export default Directors;
