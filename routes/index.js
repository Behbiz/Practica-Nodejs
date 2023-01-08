const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ad = require('../schema/Ad');
// Connect to the database
mongoose.connect('mongodb://localhost/webapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/* GET home page. */
router.get('/apiv1/anuncios', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const tag = req.query.tag;
    const venta = req.query.venta;
    const minPrecio = req.query.minPrecio;
    const maxPrecio = req.query.maxPrecio;
    const nombre = req.query.nombre;

    let query = Ad.find();

    if (tag) {
      query = query.where('tag').in(tag.split(','));
    }

    if (venta) {
      query = query.where({ venta: venta === 'true' });
    }

    if (minPrecio) {
      query = query.where({ price: { $gte: minPrecio } });
    }

    if (maxPrecio) {
      query = query.where({ price: { $lte: maxPrecio } });
    }

    if (nombre) {
      query = query.where({ nombre: { $regex: '^' + nombre } });
    }

    const anuncios = await query
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(anuncios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
