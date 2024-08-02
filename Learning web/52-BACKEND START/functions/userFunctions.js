import User from "../models/userModel.js";

export const createUser = async (request, response) => {
    console.log(request.body)
  const user = new User({
    name: "ram",
    email: "ramramram@gmail.com",
    mobile: 8305230871,
  });
  await user.save();
  response.send(user);
};

export const allUser = async (request, response) => {
    const users = await User.find()
    response.send(users)
}

export const user = async (request, response) => {
    const userId = request.params.userId
    const users = await User.findById(userId)
    response.send(users)
}

