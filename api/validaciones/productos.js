import Joi from 'joi'

class ProductoValidator {
    static validar(producto){
        const productoSchema = Joi.object({
            nombre : Joi.string().min(3).max(20).required(),
            precio: Joi.number().required(),
            stock: Joi.number().required(),
            marca: Joi.string().required(),
            categoria: Joi.string().required(),
            detalles: Joi.string().required(),
            foto: Joi.string().empty(''),
            envio: Joi.boolean().required(),
        })
        // const error = productoSchema.validate(producto).error // sin destructuring object
        const { error } = productoSchema.validate(producto) // destructuring object

        return error
    }
}
// let error = ProductoValidator.validar({
//     nombre: "pr",
//     precio: "aa",
//     stock: 123,
//     marca: "prod3",
//     categoria: "prod3",
//     detalles: "prod3",
//     foto: "/uploads/1644496392645-Captura de pantalla 2021-09-16 210300.png",
//     envio: false,
// })
export default ProductoValidator