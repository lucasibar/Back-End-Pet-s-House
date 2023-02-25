const { Router } = require("express");
const donacionRoutes = Router();

const PaymentController = require("../controlers/controllersDonaciones/PaymentsController");
const PaymentService = require("../service/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());

donacionRoutes.post("/", async (req, res) => {
  try {
    PaymentInstance.getPaymentLink(req, res);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = donacionRoutes;
