const { Router } = require("express");
const { Users, Donations } = require("../../db");
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

donacionRoutes.post("/guardar", async (req, res) => {
  try {
    const { userID, date, precio } = req.body;
    const donation = await Donations.create({
      money: precio,
      date,
      UserId: userID,
    });
    res.status(200).json(donation);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = donacionRoutes;
