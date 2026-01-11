

// const databa=require("../database/Schema");
// const bcrypt=require("bcrypt");
// const home=async(req,res)=>{


//       try{

//         res.status(200).send("this is home")

//       }
//       catch(errro){
//            console.log(errro," from home page");

//       }

// }


// const contect=async(req,res)=>{


//       try{

//         res.status(200).json({message:"this is contect page"});
        

//       }
//       catch(err){
//             console.log(err,"this is from contect page")

//       }

// }

// const data=async (req,res)=>{


//  try{
//     const dataOut=await databa.find().select({password:0,email:0});
//     console.log(dataOut," this is from data and sended the data ");
//     res.status(200).json({mess:"succesful you fetch data",token:dataOut});
//   // res.status(200).json({mess:"you come succesful"})
//  }
//  catch(error){
//      console.log(error,"error from dat side");
//      res.status(401).json({mess:"error in fetching"})   
//  }

// }






// const del=async(req,res)=>{

//         try{
//              const id=req.params.id;
//              console.log(id,"id which i willl deltel");
//              await databa.deleteOne({_id:id})
//              console.log("new dat is here");
            
//              const dtt=await databa.find();
//            return    res.status(200).json({token:dtt,mess:"this is delete "})
  
//              console.log(dtt);
//            //  return res.status(201).json({mess:"data is delete"})

            
//         }
//         catch(erro){
//           console.log(erro,"this is from auth controll0")
//         }


// }
// const register=async(req,res)=>{

//     try{
//           const {email,password,username}=req.body;
//            console.log(req.body);
//            console.log(email);
//       //   console.log(email);
//       // //  const emai=req.body.email;
        
//     //   console.log(databa.findOne({email}),"from find")
//        const Ch=await databa.findOne({email});

//            if(!Ch){
//                 const re=await databa.create({username,email,password});
//                 res.status(201).json({mess:"user is and await is addd create",token:await re.generateToken()});
    
//            }
//            else{
//             res.status(401).json({mess:"user already is exist"});
//             console.log("use different email");
//            }

//         //res.status(200).json({messa:req.body})

//     }
//     catch(erro){
//         console.log(erro,"error from the register page");
//     }

// }



// const login=async(req,res)=>{

//       try{
              
//             const {username,password,email}=req.body;
//               const vals=await databa.findOne({email});
//               console.log(password,"this is pa");
              
//               if(!vals){
//                   res.status(401).json({message:"you are not my user registe"});

//               }
//               //console.log(val,"this is login")
//               else{
//                    //const ch=await bcrypt.compare(val.password,password);
//                 const ch=await bcrypt.compare(password,vals.password);
//                   const te=await vals.compareH(password);
//                   console.log(te," from the user passwor TE");
                  
                 
//                    if(ch){
//                         res.status(200).json({message:"login is sucssr",token:await vals.generateToken()});
//                    }
//                     else{
//                         res.status(401).json({message:"invalid credentials"});
                      
//                     }                    
//               }
            
//       } 


//       catch(error){

//           console.log(error," from login page");
//       }


// }


// const upd=async (req,res)=>{

//      try{
//           const id=req.params.id;
//           console.log(id,"this is id from fronted")
//           console.log("this is id send to backent ",id);
//       //const datsd=await databa.findOne({id});
//       // const d=await databa.find();
//       // console.log("this is all",d);
//       const datsd=await databa.findOne({_id:id}).select({password:0});
//       console.log(datsd,"this is edint data")
//              res.status(201).json({mess:"succesful  get",dbs:datsd})
//      }


//      catch(erro){
//       console.log(erro,"this is so good");
//      }
// }


// const realU=async(req,res)=>{

//   try{
//       const id=req.params.id;
//       const data=req.body;
//       const {username,email}=req.body;
//       console.log("this is id who is update after button click",id);
//       console.log(email,data,"this is from fronted");
//       const ud=await databa.updateOne({_id:id},{
//         $set:data,
//       })
              

      
//       return res.status(200).json({mess:"succesful updated"})

//   }
//   catch(erro){
//     console.log(erro,"this is erro from realU")
//   }



// }
// module.exports={home,contect,register,login,data,del,upd,realU};