const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
