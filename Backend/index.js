import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.js"
import alluserRoute from "./routes/users.js"
import  productRoute  from "./routes/addProduct.js"
import cookieParser from "cookie-parser"
import multer from "multer"
import order from "./routes/Order.js"

const app = express();


app.use(express.json());

 let uploadedData = null;

app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        optionsSuccessStatus: 204,
    })
  );




app.use("/api/auth", authRoute);
app.use("/api/user",alluserRoute);
app.use("/api/addProduct",productRoute);
app.use("/api/order",order);


const port= 8900;

app.listen(port,()=>{
    console.log(`backend running ${port}`)
})