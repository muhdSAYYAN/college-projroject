import { db } from "../connect.js"

export const getAllUsers =(req,res)=>{

    const q = "SELECT id, username, email, name FROM user WHERE usertype= 'user' "; 

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
  
}

export const getAllSellers =(req,res)=>{

    const q = "SELECT id, username, email, name FROM user WHERE usertype= 'seller' "; 

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
  
}

export const blockUsers =(req,res)=>{
   
    const userId = req.params.userId;

    // console.log(userId)

    const q = `UPDATE user SET blocklist = 'block' WHERE id = ? `
  
    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: 'User blocked successfully' });
      });

}  

export const getBlockedlist =(req,res)=>{
    
    const q = "SELECT id, username, name, email FROM user  WHERE blocklist='block'"

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
        
    })
    // console.log(res.data)
}

export const unBlockUsers =(req,res)=>{

    const userId = req.params.userId;
 
    const q = "UPDATE user SET blocklist = '' WHERE id = ? "

    db.query(q,[userId],(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json({message:"unblocked successfully"})
    })

}

export const deleteUser =(req,res)=>{
     
    const newLocal = req.params.userId;
    const userId = newLocal;

    const q = "DELETE FROM user WHERE id = ?"

    db.query(q,[userId],(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json({message:"user gdeleted successfully"})
    })
 
}