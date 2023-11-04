import {useState} from "react";
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
//Database
import products from './db/db'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //-----------------Input Filter--------------------
  const [query, setQuery] = useState("")
  const handleInputChange = event =>{
    setQuery(event.target.valey)
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1))


  //-----------------Radio Filter--------------------
  const handleChange = event =>{
    setSelectedCategory(event.target.valey)
  } 

  //-----------------Buttons Filter--------------------
  const handleClick = event =>{
    setSelectedCategory(event.target.valey)
  }

  function filtredData(products, selected, query){
    let filteredProducts = products;
    // Filtering input items
    if(query){
      filteredProducts=filteredItems
    }

    //-----------------Selected Filter--------------------
    if(selected){
      filteredProducts=filteredProducts.filter(({category, color, company, newPrice, title}) => 
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected)
    }
    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => 
    <Card
     key = {Math.random()}
     img={img}
     title={title}
     star={star}
     reviews={reviews}
     newPrice = {newPrice}
     prevPrice={prevPrice}
     
     />)
  }
  const result = filtredData(products, selectedCategory, query)

  return (
    <>
        <Sidebar handleChange={handleChange}/>
        <Navigation query={query}handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
        <Products result={result}/>        
    </>
  )  
}

export default App;
