import config from '../config.js'


import ProductosModel from '../model/productos.js'

//const model = new ProductosModelMem()
//const model = new ProductosModelFile()
//const model = new ProductosModelMongoDB()

const model = ProductosModel.get(config.TIPO_DE_PERSISTENCIA)


const obtenerProductos = async () => {
    let productos = await model.readProductos()
    return productos
}

const obtenerProducto = async id => {
    let producto = await model.readProducto(id)
    return producto
}

const guardarProducto = async producto => {
    const errorvalidation = ProductoValidator.validar(producto)
    if (!errorvalidation){
        let productoGuardado = await model.createProducto(producto)
        return productoGuardado
    }
    else {
        console.log('error en guardarproducto',errorvalidation.details[0].message)
        return {}
    }
}

const actualizarProducto = async (id,producto) => {
    const errorvalidation = ProductoValidator.validar(producto)
    if (!errorvalidation){
        let productoActualizado = await model.updateProducto(id,producto)
        return productoActualizado
    }
    else {
        console.log('error en guardarproducto',errorvalidation.details[0].message)
        return {}
    }
}

const borrarProducto = async id => {
    let productoBorrado = await model.deleteProducto(id)
    return productoBorrado
}


export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}