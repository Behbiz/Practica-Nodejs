const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },
    venta: {
      type: Boolean,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    tag: {
      type: [String],
      required: true
    },
    foto: {
      type: String
    }
  });
  

module.exports = mongoose.model('Ad', adSchema);
