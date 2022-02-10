import express  from 'express'
const router = express.Router()

import multer from 'multer'
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb){
        cb(null,`${Date.now()}-${file.originalname}`)  
    }
})

const upload = multer({storage: storage})

//middleware un proceso que se pone en el transito de los datos al servidor

/* ------------------------ RUTAS POST -------------------------- */
router.post('/', upload.single('image'),(req, res, next) => { 
    const file = req.file 

    if(!file) {
        const error = new Error('Error subiendo archivo')
        error.httpStatusCode = 400
        return next(error)
    }

    res.json({ name: file.filename})
})


export default router


