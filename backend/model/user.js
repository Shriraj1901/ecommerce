const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name!"]
    },
    email:{
        type:String,
        required:[true,"please enter your email!"]
    },
    password:{
        type:String,
        required:[true,"please enter your passweord!"],
        minLength:[4,"passwrd should be grater than 4 character"],
        select:false

        
    },
    phoneNumber:{
        type:Number,
        maxLength:[10,"Don't exceed more than 10 digits"]
    },

    addresses:[
        {
            country:{
                type:String,
            },
            city:{
                type:String,
            },
            address1:{
                type:String,
            },
            address2:{
                type:String,
            },
            zipCode:{
                type:Number
            },
            addressType:{
                type:String
            },

        }

    ],
    role:{
        type:String,
        default:"User",

    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    resetPasswordToken:String,
    resetPasswordTime:Date,

});


//hash password

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10)


})

//jsonwebtoken

userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this_id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    })
}

//compare password


userSchema.methods.ccomparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model('user',userSchema)


