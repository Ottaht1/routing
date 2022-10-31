import ReactPaginate from 'react-paginate';
import {Card,ImageHeader, CardBody, CardFooter} from 'react-simple-card'
import React,{useState, useEffect} from 'react';
import './App.css';

function Users() {
const [users,setUsers] = useState()
  const fetchItems = async () => {
      const data = await fetch('https://randomuser.me/api/?page=3&results=10').then(res => res.json());
      console.log(data);
      setUsers(data.results)
  }
 useEffect(() => {
  fetchItems()
 },[]
 );

 return (
  
   users.map((user) => (
      <Card>
        <ImageHeader alt="image" imageSrc={user.picture.large}/>
        <CardBody>{user.name.title} {user.name.first} {user.name.last}</CardBody>
     </Card>
  ))
 

)
}

export default Users;