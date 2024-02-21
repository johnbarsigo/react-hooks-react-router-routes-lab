import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>

      <h1>Actors Page</h1>

      {/*{code here}*/}

      {
        actors.map ( ( actor, index ) => (
          <div>
            <h2 key={index} >{actor.name}</h2>
            <ul>
              {
                actor.movies.map ( ( movie, index ) => (
                  <li key={index} >{movie}</li>
                 ) )
              }
            </ul>
          </div>
         ) )
      }

    </div>
  );
}

export default Actors;
