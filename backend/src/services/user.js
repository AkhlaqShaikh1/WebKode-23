const userRepo = require("../repositories/user");
const nodemailer=require('nodemailer')
const Mailgen=require('mailgen')
exports.createUser = async (payload,path) => {
   const response=await userRepo.create(payload,path);
  //  console.log(response)
   if(response.status==='create'){
    let config={
      service:"gmail",
      auth:{
        user:"fahadahad567@gmail.com",
        pass:"vxxbccrnurzthwvu"
      }
    }
    let transporter=nodemailer.createTransport(config)
    let MailGenerator=new Mailgen({
      theme:'default',
      product:{
        name:"TechTribe",
        link:'https://mailgen.js/'
      }
    })
    const interest=payload.interest
    let res={
      body:{
        name:payload.fullName||"Participent",
        intro: ['Congrats!! You are now a member',`Your domain is <strong>${interest.toUpperCase()}</strong>`,`This is your password ${response.pass}`],
        outro:"Excited to work with you"
      }
    }
    let mail=MailGenerator.generate(res)
    let message={
      from:"fahadahad567@gmail.com",
      to:payload.email,
      subject:"Confirmation message",
      html:mail
    }
    transporter.sendMail(message).then(()=>{
      response["email"]="sended"

    }).catch(error=>{
      console.log(error)
    })
    return response
  }

  };
  exports.createParticipents = async (payload) => {
    const response=await userRepo.createParticipants(payload);
    if(response.status==='create'){
      let config={
        service:"gmail",
        auth:{
          user:"fahadahad567@gmail.com",
          pass:"vxxbccrnurzthwvu"
        }
      }
      let transporter=nodemailer.createTransport(config)
      let MailGenerator=new Mailgen({
        theme:'default',
        product:{
          name:"TechTribe",
          link:'https://mailgen.js/'
        }
      })
      let res={
        body:{
          name:payload.fullName||"Participent",
          intro: ['Your registeration is successfull'],
          outro:"See you at the event!"
        }
      }
      let mail=MailGenerator.generate(res)
      let message={
        from:"fahadahad567@gmail.com",
        to:payload.email,
        subject:"Confirmation message",
        html:mail
      }
      transporter.sendMail(message).then(()=>{
        response["email"]="sended"
        
      }).catch(error=>{
        console.log(error)
      })
      return response
    }else{
      return response
    }
  };
