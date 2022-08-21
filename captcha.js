const axios = require('axios');

const VerifyCaptcha=async (parent,args)=>
{
    const SECRET_KEY="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
    const token=args.token;

    //console.log("TOKEN IS",token);

    const res=await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`);

    return res.data.success;
}

module.exports={VerifyCaptcha};