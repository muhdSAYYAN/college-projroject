import React, { useState } from 'react';
import './Addpost.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {

 const navigate = useNavigate()
   
  const [postData,setPostData] =useState({
    pname:"",
    file:null,
    department:"",
    description:"",
    description:"",
    status:"",
    pdate:""
  });

  const handleInput = (e)=>{
    const{name,value}= e.target;
    setPostData({...postData,[name]:value});
  }

  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    setPostData({...postData, file})
  }
   

  const [showDateInput, setShowDateInput] = useState(false);

  const handleRadioChange = (event) => {
    setPostData({ ...postData, status: event.target.value });
    if (event.target.value === 'upcoming') {
      setShowDateInput(true);
    } else {
      setShowDateInput(false);
    }
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log("post",postData);
    try{
      const formData = new FormData();
      formData.append("file",postData.file)
      formData.append("pname",postData.pname)
      formData.append("department",postData.department)
      formData.append("description",postData.description)
      formData.append("status",postData.status)
      formData.append("pdate",postData.pdate)
     
      const res = await axios.post("http://localhost:8900/api/addProduct/uploadProduct", formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" }, },);
      console.log(res.data);
      alert("Post Added Successfully")
      navigate('/allpost')
    }catch(err){

    }
  }

  return (
    <div className='Addpost'>
      <h2>Add New Post</h2>
      <form action="/action_page.php" className='from-Addpost'>
        <div className='addpost-inp'>
          <label htmlFor="postName">Post Name</label>
          <input type="text" id="postName" name="pname" placeholder="Post Name.." onChange={handleInput}/>
        </div>

        <div className='addpost-inp'>
          <label htmlFor="postImage">Post Image</label>
          <input type="file" id="postImage" name="postImage" placeholder="Your name.." onChange={handleFileChange}/>
        </div>

        <div className='addpost-inp'>
          <label htmlFor="department">Department</label>
          <select id="department" name="department" onChange={handleInput}>

          <option value="">Choose department</option>
          <option value="COLLEGE FEST">COLLEGE FEST</option>
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

        <div className='addpost-inp'>
          <label htmlFor="description">Add Description</label>
          <textarea id="description" name="description" placeholder="Your description.." onChange={handleInput}/>
        </div>

        <div className='addpost-inp'>
          <label htmlFor="status">Status</label>
          <div className='addpost-inp-radio'>
            <label htmlFor="finished">Finished</label>
            <input type="radio" id="finished" name="status" value="finished" onChange={handleRadioChange} />
            <label htmlFor="upcoming">Up coming</label>
            <input type="radio" id="upcoming" name="status" value="upcoming" onChange={handleRadioChange} />
          </div>
        </div>

        {showDateInput && (
          <div className='addpost-inp'>
            <label htmlFor="postDate">Post Date</label>
            <input type="date" id="postDate" name="pdate" onChange={handleInput}/>
          </div>
        )}

        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Addpost;
