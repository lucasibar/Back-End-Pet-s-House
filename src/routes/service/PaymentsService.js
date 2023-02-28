const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

class PaymentService {
  async createPayment(emailUser, precio) {
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
        failure: "https://petshousefront.vercel.app/failure",
        pending: "/pending",
        success: "https://petshousefront.vercel.app/success",
      },
    };

    const payment = await axios.post(
      "https://api.mercadopago.com/checkout/preferences",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return payment.data;
  }
}

module.exports = PaymentService;
