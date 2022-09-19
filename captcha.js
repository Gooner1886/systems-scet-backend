const axios = require('axios');

const VerifyCaptcha=async (req,res)=>
{
    const SECRET_KEY="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
    const token=req.body.token;

    //console.log("TOKEN IS",token);

    const resp=await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`);

    console.log("sucess is ",resp.data.success);

    if(resp.data.success)
        return res.status(200).json({sucess:resp.data.success});
    else
        return res.status(401).json({sucess:resp.data.success});
}

module.exports={VerifyCaptcha};