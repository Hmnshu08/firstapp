import React from "react";
// import { Title } from "./title";
// import { Image } from "./image";
// import { Author } from "./author";

export const Book = (props) => {
  const { id,image, title, author, number } = props;
  
  console.log(props);
  return (
    // <div className="book">
    //   <img src={props.image}></img>
    //   <h2>{props.title}</h2>
    //   <h4>{props.author}</h4>
    // </div>
    //we can either do this using props.image or only {image} distructuring
    <div className="book" key={id}>
      <span className="number">#{number+1}</span>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      
    </div>
  );
};


