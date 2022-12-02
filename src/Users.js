import ReactPaginate from 'react-paginate';
import {Card,ImageHeader, CardBody} from 'react-simple-card'
import React,{useState, useEffect} from 'react';
import Error from './Error';
import './App.css';

function Users() {
const [users,setUsers] = useState()
const [page, setPage]= useState(1)
const [error, setError] = useState(false)
  const fetchItems = async () => {
      const data = await fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then(res => res.json())
      .catch(() => setError(true));
      if (data) {
        setUsers(data.results)
      }
  }
  const handlePageClick = async (event) => {
    setPage(event.selected)
    await fetchItems()
    window.scrollTo(0,0)
  }
  
 useEffect(() => {
  fetchItems()
 },[]
 );

 return (
  <div>
  {error && <Error/>}
  {users && users.map((user) => (
    <Card className='card'>
      <ImageHeader alt="image" imageSrc={user.picture.large} />
      <CardBody>{user.name.title} {user.name.first} {user.name.last}</CardBody>
    </Card>
  ))}
  {users && <nav aria-label="Page navigation comments" className="mt-4 paginate-nav">
   <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={10}
        onPageChange={handlePageClick}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </nav>
}
  </div>
)
}

export default Users;