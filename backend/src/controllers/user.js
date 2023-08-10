const service = require('../services/user')
const { catchAsync } = require('../helpers/error/request');


exports.profile = catchAsync(async (req, res, next) => {

  return res.status(200).json({
      success: true,
      data: req.user
  })

})
exports.createUser = catchAsync(async (req, res, next) => {

  // console.log(req.file.path)
  const payload = {
      fullName: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      university:req.body.university,
      batch:req.body.batch,
      interest:req.body.interest,
      domain:req.body.domain,
    };
    res.body = await service.createUser(payload,req.file.path);
    return res.json(res.body);
  });
  exports.createParticipents = catchAsync(async (req, res, next) => {
    const payload = {
      ...req.body
    };
    
      res.body = await service.createParticipents(payload);
      return res.json(res.body);
    });
  exports.updatePayment = catchAsync(async (req, res, next) => {
 
    const payload = {
      user: req.params.id,
      payment: true,
    };
  
    res.body = await service.updatePayment(payload);
    return res.json(res.body);
  });
  