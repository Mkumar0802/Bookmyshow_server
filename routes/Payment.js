const express = require('express');
const router=express.Router();

const paymentModule = require('../Module/PaymentModule')

router.post("/orders",paymentModule.orders );

router.post("/verify",paymentModule.verify );


module.exports = router;