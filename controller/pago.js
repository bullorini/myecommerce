// sdk de mercadopago
import mercadopago from "mercadopago"

// agrega credenciales
mercadopago.configure({
    access_token: "APP_USR-560886952013037-062317-c7db1267d264a9c2732fd0c2579d6576-169387395"
})
console.log('cargomp')

const feedBack = (req, res) => {
    let info = {
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    }
    console.log(info)

    res.redirect('/')
}
export default{
    feedBack
}