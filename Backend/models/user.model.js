
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, 
            required: true, 
            minlength: [3, 'First name must be at least 3 characters']
        }, 
        lastname: {
            type: String,
            minlength: [3, 'First name must be at least 3 characters']
        }
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true,   // the email should be unique in the database 
        minlength: [5, 'Email must be at least 5 characters long']
    }, 
    password: {
        type: String, 
        required: true, 
        select: false 
    }, 

    // SocketId field (optional) used for tracking the user's socket ID in a real-time application (e.g., chat)

    socketId: {
        type: String
    },
})

// Instance method to generate an authentication token (JWT)

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id: this._id}, 
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )

    return token 
}

// Instance method to compare a given password with the hashed password stored in the database

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

// Static method to hash a password using bcrypt before saving it to the database

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel

/*
select: false means that this field will not be included in query results by default. Even if you query a document (for example, using find() or findOne()), the password field will not be returned unless you explicitly include it in the query.
*/