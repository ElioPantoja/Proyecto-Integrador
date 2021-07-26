const express = require("express");
const router = express.Router();
const path = require ("path");
const multer = require("multer");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });

// Constatante para validacion del user
const { body } = require ("express-validator");
const userController = require ("../controllers/usersController");

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Pone un nombre"),
    body ("last_name").notEmpty().withMessage("Pone un apellido"),
    body ("email").isEmail().withMessage("Ingresa un email valido"),
    body ("email").notEmpty().withMessage("Ingese un email"),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})

];

// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register", uploadFile.single('avatar'), validacionCreacionUsuario, userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);


module.exports = router;
