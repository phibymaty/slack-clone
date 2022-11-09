import Main from "./Pages/Main";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer"
import {useState, useEffect} from "react";
import AddNews from "./Pages/AddNews";
function App() {


  const [newData, setNewData] = useState(null)
   
  useEffect(()=>{
      const fetchData =()=>{
        fetch("http://localhost:4000/api/posts")
      .then(res=>res.json())
      .then (data=>setNewData(data))
      .catch(err=>console.log(err))}
      
      fetchData()
  },[])

  return (
<>
{console.log(newData)}
{/* <Nav/> */}
{/* <Main/> */}
<AddNews/>
{/* <Footer/> */}
</>
);
}

export default App;
