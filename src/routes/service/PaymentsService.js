const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

class PaymentService {
  async createPayment(emailUser, precio) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: emailUser,
      items: [
        {
          title: "Donacion Pets House",
          description:
            "Esta donacion sera destinada a mantener en funcionamiento la pagina y ayudar a dar visibiliadad a las mascotas que buscan un hogar",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "donation",
          quantity: 1,
          unit_price: Number(precio),
        },
      ],
      back_urls: {
        failure: "http://localhost:3000/failure",
        pending: "/pending",
        success: "http://localhost:3000/success",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }
}

module.exports = PaymentService;
