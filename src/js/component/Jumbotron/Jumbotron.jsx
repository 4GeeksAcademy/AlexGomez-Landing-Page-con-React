import React from "react";
import './Jumbotron.css'
export const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron C_jumbotron p-5">
        <h1 className="display-4">A Warm, Welcome!</h1>
        <p className="lead">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id expedita, incidunt possimus animi provident in doloribus doloremque. Ullam impedit ratione explicabo corrupti nisi.        </p>
    
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </p>
      </div>
    </>
  );
};
