// import logo from "./logo.svg";
import "./App.css";
import { Book } from "./FirstComponent/book";
import { EventExample } from "./FirstComponent/eventExample";
import newData from "./TempData/data"
// import { Navbar } from "./FirstComponent/navbar";

// const books = [
//   {
//     id: 0,
//     image:
//       "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
//     title: "The Psychology of Money Paperback",
//     author: "Morgon Housel",
//   },
//   {
//     id: 1,
//     image:
//       "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//   },
//   {
//     id: 2,
//     image:
//       "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
//     title: "IKAGI",
//     author: "Some Japenese Name",
//   },
// ];

// const book1 = {
//   id : 1,
//   image : 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
//   title : 'The Psychology of Money Paperback',
//   author : 'Morgon Housel'
// }
// const book2 = {
//   id : 2,
//   image : 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
//   title : 'Atomic Habits',
//   author : 'James Clear'
// }
// const book3 = {
//   id : 3,
//   image : 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
//   title : 'IKAGI',
//   author : 'Some Japenese Name'
// }

function App(props) {
  return (
    <div>
      <EventExample />
      <h1>Amazon Best Sellers</h1>
      <div className="booklist">
        {/* <Greeting />

      <Navbar/> */}
        {newData.map((book,index) => {
          // const {id, image,title,author} = book; //no longer needed as we are passing props through spread operator
          return <Book {...book} key={book.id} number = {index}/>; //using spread we are passing properties.
        })}
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
