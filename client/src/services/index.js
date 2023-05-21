import axios from "axios";

var StatusCode;
(function (StatusCode) {
  StatusCode[(StatusCode["Unauthorized"] = 401)] = "Unauthorized";
  StatusCode[(StatusCode["Forbidden"] = 403)] = "Forbidden";
  StatusCode[(StatusCode["TooManyRequests"] = 429)] = "TooManyRequests";
  StatusCode[(StatusCode["InternalServerError"] = 500)] = "InternalServerError";
})(StatusCode || (StatusCode = {}));

const headers = {
  Accept: "application/json",
};


class Http {
  instance = null;
  get http() {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: process.env.SERVER_ENDPOINT_URL,
      headers,
    });
   
    return http;
  }

  get(url, config) {
    return this.http.get(url, config);
  }

  handleError(error) {
    const { status } = error;
    switch (status) {
      case StatusCode.InternalServerError: {
        // Accion para manejar el error 500 (InternalServerError)
        alert("Ocurrio un error interno en el servidor.");
        break;
      }
      case StatusCode.Forbidden: {
        // Accion para manejar el error 403 (Forbidden)
        alert("No tienes permisos para acceder a este recurso.");
        break;
      }
      case StatusCode.Unauthorized: {
        // Accion para manejar el error 401 (Unauthorized)
        alert("Debes iniciar sesión para acceder a este recurso.");
        // Redireccionar al usuario a la página de inicio de sesion, por ejemplo:
        window.location.href = "/";
        break;
      }
      case StatusCode.TooManyRequests: {
        // Acción para manejar el error 429 (TooManyRequests)
        alert("Has realizado demasiadas solicitudes. Por favor, espera un momento antes de intentar nuevamente.");
        break;
      }
      default: {
        // Accion para manejar otros errores
        alert("Ocurrio un error desconocido.");
        break;
      }
    }
    return Promise.reject(error);
  }
  

}
export const http = new Http();
