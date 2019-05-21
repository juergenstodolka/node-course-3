const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})


//
// Goal: Add a password field to User
//
// 1. Setup the files as a require string
// 2.Ensure the length is greater than 6
// 3. Trim the password
// 4. Ensure that password doesn't contain "password"
// 5. Test your work!

//Defining a model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate (value) {
      if (value.includes('password')) {
        throw new Error('Password may not contain the word password')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate (value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

// Creating an instance
const me = new User({
  name: '   Juergen ',
  email: '  INFO@stodolka-juergen.de',
  password: '   _oedeldoedel@99  '
})

// Save the instanct to the database
me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error)
})

// -------------------------------------------------------------------
// Goal: Create a model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance  of the model
// 3. Save the model to the database
// 4. Test yout work!
// -------------------------------------------------------------------

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const my_task = new Task({
//   description: 'Clean the kitchen',
//   completed: false
// })

// my_task.save().then(() => {
//   console.log(my_task)
// }).catch((error) => {
//   console.log('Error!', error)
// })
