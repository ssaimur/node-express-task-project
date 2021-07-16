const monggose = require('mongoose')

const TaskShcema = monggose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength: [20, 'cannot be more than 20 characters'],
  },
  completed: { type: Boolean, default: false },
})

module.exports = monggose.model('Task', TaskShcema)
