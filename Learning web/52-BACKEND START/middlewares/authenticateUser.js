import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization is required." });
    }

    const token = header.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token is missing." });
    }

    const decoded = jwt.verify(token, "secret"); 
    req.userId = decoded.userId; 
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token has expired." });
    } else if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};
