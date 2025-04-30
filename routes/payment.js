require("dotenv").config();
const { paymentModel } = require("../models/payment");
const Razorpay = require("razorpay");

const express = require("express");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create/orderId", async (req, res) => {
  const { amount } = req.body; // Get amount from frontend
  const options = {
    amount: amount * 100, // Convert to paise
    currency: "INR",
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created:", order);

    await paymentModel.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "pending",
    });

    res.status(200).send(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error.message);
    res.status(500).json({ error: "Error creating Razorpay order", details: error.message });
  }
});

router.post("/api/payment/verify", async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, signature } = req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!razorpayOrderId || !razorpayPaymentId || !signature) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const {
      validatePaymentVerification,
    } = require("../node_modules/razorpay/dist/utils/razorpay-utils.js");

    const result = validatePaymentVerification(
      { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
      signature,
      secret
    );

    if (result) {
      const payment = await paymentModel.findOne({
        orderId: razorpayOrderId,
        status: "pending",
      });
      if (!payment) {
        return res.status(404).send("Payment record not found");
      }

      payment.paymentId = razorpayPaymentId;
      payment.signature = signature;
      payment.status = "completed";
      await payment.save();

      res.json({ status: "success" });
    } else {
      res.status(400).send("Invalid signature");
    }
  } catch (error) {
    console.error("Error verifying payment:", error.message);
    res.status(500).send("Error verifying payment");
  }
});

module.exports = router;
