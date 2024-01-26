import App from "./App.js";

const port = 4000;

App.listen(port, () => {
    console.log(`Servidor Corriendo en: http://localhost:${port}/api/`);
})