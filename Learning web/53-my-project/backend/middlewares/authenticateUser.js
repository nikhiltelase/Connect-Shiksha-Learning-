import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
export const authenticateUser = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if(!header){
            return res.status(401).json({success:false, message: "Authorization is required."})
        }
        const token = header.split(" ")[1]
        const decode = jwt.verify(token, JWT_SECRET)
        console.log(decode.userId)
        return res.send("jay shree ram")
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
    }
}