import React from "react";

export const EventExample = () => {

  const handleFormInput = (e) => {
    console.log("handle Input.");
    // console.log(e.target); // the element
    // console.log(e.target.name); // name of the element
    // console.log(e.target.value); //value of the element
  };

  //   const handleOnClick = () => {
  //     console.log("hello");
  //   };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section className="searchBox">
      <h2>Some Form</h2>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ padding: "0.5rem" }}
        />
        <div>
          <button type="submit">Click Me</button>
        </div>
      </form>
    </section>
  );
};
