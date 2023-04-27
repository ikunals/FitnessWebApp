import React from "react";

// import SearchExercises from './SearchExercises';
// import Exercises from './Exercises';

export default function Exercises() {
  return (
    <>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>     

    </>
  );
}
