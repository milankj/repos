const User = require("../models/users.model");
const AppError = require('../utils/AppError')
const APIFeatures = require('../utils/apifeatures')
const catchAsync = require('../utils/catchAsync')
exports.createUser = catchAsync(async (req, res,next) => {
  const user = await User.create({
    username:req.body.username,
    fullName:req.body.fullName,
    email:req.body.email,
    password:req.body.password,
    station_name:req.body.station_name,
    role:req.body.role
  })
  if(!user){
    next(new AppError('No Users found',404))
  }
  res.status(201).json({
    status:res.statusCode,
    result:{
      user
    }
  })
});

exports.getAllUsers =catchAsync(async (req, res,next) => {
  const features = new APIFeatures(User.find(),req.query).filter()
    .limitFields()
    .sort()
    .paginate()
  const result = await features.query
  if(!result){
    return next(new AppError('No Users Found!'),404)
  }
  res.status(200).json({
    status: res.statusCode,
    result: result,
  });
});
exports.getUser = catchAsync(async(req,res,next)=>{
  const result = await User.findById(req.params.id)
  if(!result){
    return next(new AppError('No User found with that ID'),404)
  }
  res.status(200).json({
    status:res.statusCode,
    result
  })
})
