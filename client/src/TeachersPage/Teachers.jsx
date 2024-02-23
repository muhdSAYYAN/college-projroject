import React from 'react'
import { Link } from 'react-router-dom'
import "./Teachers.css"
// import amal from  "../images/amal.png"
import newpost from "./Images/newpost.png"
import post from "./Images/post.png"


const Teachers = () => {
  return (
    <div className='seller'>
       
    <div className="sellnav">
     <h2>Teachers</h2>
     
        <h6>Login/Log out</h6>
    </div>

 <div className="sellcontent">
        {/* <img  src={amal} alt="" /> */}
       <h4>Wlecome Teachers</h4>
       <h5>Update everything for your your students!</h5>
    </div>

<div className="sellerparts">

     <Link to="/allpost" className='admineritemslink'>
       <div className="selleritems">
         <img src={post} alt='' srcset="" />
         <span>View Posts</span>
       </div>
       </Link>


       <Link to="/addpost" className='admineritemslink'>
       <div className="selleritems">
         <img src={newpost} alt="" srcset="" />
         <span>Add Post</span>
       </div>
       </Link>

       {/* <Link to="/orders" className='admineritemslink'>
       <div className="selleritems">
         <img src=""  alt="" srcset="" />
         <span>Orders</span>
       </div>
       </Link> */}

       {/* <Link to="/myproduct" className='admineritemslink'>
       <div className="selleritems">
         <img src="" alt="" srcset="" />
         <span>My Earnings</span>
       </div>
       </Link> */}

       
    </div>

</div>

 
  )
}

export default Teachers