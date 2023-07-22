import userModel from "../models/userModel.js";



export const getUserController = async (req, res) => {
    let users;
    try {
        users = await userModel.find()
    } catch (error) {
        console.log(error)
    }
    if (!users) {
      return  res.status(400).json({
            message: "No data found"
        })
    }
    res.status(200).json(users)
};


export const postUserController = async (req, res) => {
    console.log(req.body)
    const { name, email, password, contact, course } = req.body
    let existUsers;

    try {
        existUsers = await userModel.findOne({ email })
    } catch (error) {
        console.log(error)
    }

    if (existUsers) {
        return res.status(400).json({
            message: "User is already created"
        })
    }
  
    const newUser = new userModel({
        name: name,
        email: email,
        password: password,
        contact: contact,
        course: course,
    })
    try {
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
    res.status(200).json({
        message: "new student created"
    })
}


export const deleteUserController = async (req, res) => {
    const id = req.params.id;
    let userId;
    try{
        userId=await userModel.findOne({_id:id})
    }catch(e){
        console.log(e)
    }
    try {
        const removedUser = await userModel.findByIdAndDelete({_id: id});
        if (!removedUser) {
            return res.status(400).json({
                message: "No data is there",
            });
        }
        res.status(200).json({
            message: "student details are deleted",
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateUserController = async (req, res) => {
    const id = req.params.id
    let user;
    try{
       user= await userModel.findById(id)
       console.log(user)
    }
    catch(error){
        console.log(error)
    }
    if(!user){
        res.status(400).json({
            message:"No data Found"
        })
    }
   res.status(200).json(user)
}

export const EditUserController=async(req,res)=>{
const id=req.params.id
try {
    await  userModel.findByIdAndUpdate(id,req.body)
    res.status(200).send("updated user data")
} catch (error) {
    res.status(400).send("error",error)
}
}
