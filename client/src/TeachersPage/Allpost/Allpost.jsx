import React, { useEffect, useState } from 'react'
import "./Allpost.css"
import axios from 'axios';

const Allpost = () => {

  const [data,setData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  

  const getProduct = async ()=>{
      try{
          const res = await axios.get("http://localhost:8900/api/addProduct/getProduct");
          // console.log(res.data)
          setData(res.data)
      }catch(err){
          console.log(err)
      }
  }
 
  console.log(data)
  useEffect(()=>{
      getProduct()
  },[])

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value === "All" ? "" : e.target.value);
  };
  const filteredData = selectedDepartment ? data.filter(item => item.department === selectedDepartment) : data;



  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8900/api/addProduct/dltdeleteProduct/${postId}`,{ withCredentials: true });
      setData((prev) => prev.filter((post) => post.id !== postId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Productsdata-container">
    <h1>PREVIOUS POTS</h1>
    
<div className='allpost-inp'>
          <label htmlFor="department">Department : </label>
          <select id="department" name="department" onChange={handleDepartmentChange}>

            <option value="All">All</option>
            <option value="COLLEGE FEST">COLLEAE FEST</option>
            <option value="BA ENGLISH">BA ENGLISH</option>
            <option value="MA ENGLISH">MA ENGLISH</option>
            <option value="BA ECONOMICS">BA ECONOMICS</option>
            <option value="BA PHYSICAL EDUCATION">BA PHYSICAL EDUCATION</option>
            <option value="BBA">BBA</option>
            <option value="BCOM">BCOM</option>
            <option value="LOGISTICS">LOGISTICS </option>
            <option value="BSC MATHEMATICS">BSC MATHEMATICS</option>
            <option value="BSC PHYSICS">BSC PHYSICS</option>
            <option value="BSC COMPUTER SCIENCE">BSC COMPUTER SCIENCE</option>
            <option value="BTHM">BTHM</option>
            <option value="BVOC HOTEL MANAGEMENT">BVOC HOTEL MANAGEMENT</option>
            <option value="BVOC MOBILE APPLICATION">BVOC MOBILE APPLICATION</option>
          </select>
        </div>

    
        {filteredData.length === 0 ? (
        <p>There is not any post under the department</p>
      ) : (
        <table className="Productsdata-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Post Name</th>
              <th>Image</th>
              <th>Department</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.pname}</td>
                <td><img style={{ width: "200px", height: "200px", padding: "2px" }} src={`/upload/${item.pimg}`} alt="" /></td>
                <td>{item.department}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.pdate}</td>
                <td>
                  <button className='delete' onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
</div>
  )
}

export default Allpost