define({ "api": [
  {
    "type": "get",
    "url": "/parametricas/:id",
    "title": "Ver una Parametrica",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/parametricas/2 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetParametrica",
    "group": "Parametrica",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único de la Parametrica</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener una Parametrica existente según el id remitido. Obtiene la paramétrica mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Parametrica",
            "optional": false,
            "field": "Parametrica",
            "description": "<p>Detalle de la paramétrica registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\n     \"id\": \"2\",\n     \"nombre\": \"ACOPIADOR\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\"\n     }\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParametricaNotFound",
            "description": "<p>No existe paramétrica registrada con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay paramétrica registrada con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/parametricas",
    "title": "Ver todas las Parametricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/parametricas -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetParametricas",
    "group": "Parametrica",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para obtener un listado de las Parametricas existentes. Obtiene las paramétricas mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Parametrica",
            "optional": false,
            "field": "Parametricas",
            "description": "<p>Listado con todas las Parametricas registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"parametricas\": [\n     {\"id\": \"1\",\n     \"nombre\": \"TRANSFORMADOR\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\"\n     },\n     {\"id\": \"2\",\n     \"nombre\": \"ACOPIADOR\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\",\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParametricasNotFound",
            "description": "<p>No existen paramétricas registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay paramétricas registradas\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/parametricas/:id/usuarios",
    "title": "Ver las paramétricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/parametricas/2/usuarios -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetUsuarios",
    "group": "Parametrica",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de la Parametrica cuyos Usuarios se quiere obtener</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener los Usuarios asociados a una Parametrica existente según el id remitido. Obtiene los usuarios mediante el método local getUsuariosByRol(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Parametrica",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Listado de los Usuarios registrados vinculados a la Parametrica cuyo id se recibió.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta existosa:",
          "content": "HTTP/1.1 200 OK\n{\n \"Usuarios\": [\n     {\"id\": \"1\",\n     \"email\": \"usuario_1@correo.com\",\n     \"jurisdiccion\": \"CATAMARCA\",\n     \"login\": \"27457740609\",\n     \"nombrecompleto\": \"PEREZ, JUAN\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"TRANSFORMADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     },\n     {\"id\": \"2\",\n     \"email\": \"usuario_2@correo.com\",\n     \"jurisdiccion\": \"RIO NEGRO\",\n     \"login\": \"27455506013\",\n     \"nombrecompleto\": \"LOPEZ, JOSE\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ACOPIADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelosNotFound",
            "description": "<p>No existen usuarios registrados vinculados a la id de la paramétrica.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay usuarios registrados vinculados al id de la paramétrica recibida.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "post",
    "url": "/parametricas",
    "title": "Registrar una Paramétrica",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X POST -d [PATH_SERVER]/rue/rest/parametricas -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PostParametrica",
    "group": "Parametrica",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Parametrica",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqRue.jar con los datos de la paramétrica a registrar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametrica",
          "content": "{\"entity\": {\n    \"id\": \"0\",\n    \"nombre\": \"TRANSFORMADOR\",\n    \"tipo\": {\n        \"id\": \"1\",\n        \"nombre\": \"ROL_USUARIOS\"\n    }\n}",
          "type": "java"
        }
      ]
    },
    "description": "<p>Método para registrar una nueva Parametrica. Instancia una entidad a persistir Parametrica local y la crea mediante el método local create(Parametrica param)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>url de acceso mediante GET a la Parametrica registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 201 OK\n{\n  {\n     \"Location\": \"[PATH_SERVER]/rue/rest/parametricas/:id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParametricaNoRegistrada",
            "description": "<p>No se registró la Parametrica.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Hubo un error procesando la inserción en el Registro Unico\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "put",
    "url": "/parametricas/:id",
    "title": "Actualizar una paramétrica existente",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X PUT -d [PATH_SERVER]/rue/rest/parametricas/1 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PutParametrica",
    "group": "Parametrica",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Parametrica",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqRue.jar con los datos de la paramétrica a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "Id",
            "description": "<p>Identificador único de la Parametrica a actualizar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Parametrica",
          "content": "{\"entity\": {\n    \"id\": \"1\",\n    \"nombre\": \"TRANSFORMADOR\",\n    \"tipo\": {\n        \"id\": \"1\",\n        \"nombre\": \"ROL_USUARIOS\"\n    }\n}",
          "type": "java"
        },
        {
          "title": "Emplo de id",
          "content": "{\n    \"id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para actualizar una Parametrica existente. Obtiene la Parametrica correspondiente al id recibido mediante el método local find(Long id), actualiza sus datos según los de la entidad recibida y la edita mediante el método local edit(Parametrica param).</p>",
    "success": {
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParametricaNoActualizada",
            "description": "<p>No se actualizó la Parametrica.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Modified\n{\n  \"error\": \"Hubo un error procesado la actualización en el Registro Unico.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/tipoparams/:id/parametricas",
    "title": "Ver las paramétricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/tipoparams/1/parametricas -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetPareametricas",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del tipo de paramétrica cuyas paramétricas se quiere obtener</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener las paramétricas asociados a un tipo existente según el id remitido. Obtiene los usuarios mediante el método local findParametricasByTipo(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "Parametrica",
            "description": "<p>Listado de las paramétricas registradas vinculadas al tipo cuyo id se recibió.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta existosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"parametricas\": [\n     {\"id\": \"1\",\n     \"nombre\": \"TRANSFORMADOR\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\"\n     },\n     {\"id\": \"2\",\n     \"nombre\": \"ACOPIADOR\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\",\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParametricasNotFound",
            "description": "<p>No existen paramétricas registradas vinculadas a la id del tipo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay paramétricas registradas vinculados al id del tipo recibido.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "get",
    "url": "/tipoparams/:id",
    "title": "Ver un TipoParam",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/tipoparams/2 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetTipoParam",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único del tipo de paramétrica</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un TipoParam existente según el id remitido. Obtiene el tipo de paramétrica mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "TipoParam",
            "description": "<p>Detalle del tipo de paramétrica registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\n     \"id\": \"2\",\n     \"nombre\": \"TIPO_ITEM\",\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TipoParamNotFound",
            "description": "<p>No existe tipo de paramétrica registrada con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay tipo de paramétrica registrada con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "get",
    "url": "/tipoparams/query?nombre=:nombre",
    "title": "Ver tipo de paramétrica según su nombre",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/tipoparams/query?nombre=ROL_USUARIOS -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetTipoParamQuery",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del tipo de paramétrica</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un tipo de paramétrica según su nombre. Obtiene un tipo de paramétrica mediante el método local getExistente(String nombre)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "TipoParam",
            "description": "<p>Detalle del tipo de paramétrica registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n {\n     {\"id\": \"1\",\n     \"nombre\": \"ROL_USUARIOS\"}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TipoParamNotFound",
            "description": "<p>No existe tipo de paramétrica registrado con ese nombre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay tipo de paramétrica registrado con el nombre recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "get",
    "url": "/tipoparams",
    "title": "Ver todas los tipos de paramétricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/tipoparams -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetTipoParams",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para obtener un listado de los tipos de paramétricas existentes. Obtiene los tipos de paramétricas mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "TipoParam",
            "description": "<p>Listado con todas los tipos de paramétricas registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"tipoParams\": [\n     {\"id\": \"1\",\n     \"nombre\": \"ROL_USUARIOS\"},\n     {\"id\": \"2\",\n     \"nombre\": \"TIPO_ITEM\"}\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TipoParamsNotFound",
            "description": "<p>No existen tipos de paramétricas registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay tipos de paramétricas registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "post",
    "url": "/tipoparams",
    "title": "Registrar un TipoParam",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X POST -d [PATH_SERVER]/rue/rest/tipoparams -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PostTipoParam",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqRue.jar con los datos de la tipo de paramétrica a registrar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de TipoParam",
          "content": "{\"entity\": {\n    \"id\": \"0\",\n    \"nombre\": \"ROL_USUARIOS\"\n}",
          "type": "java"
        }
      ]
    },
    "description": "<p>Método para registrar un nuevo Tipo de paramétrica. Instancia una entidad a persistir un TipoParam local y la crea mediante el método local create(TipoParam tipoParam)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>url de acceso mediante GET a la TipoParam registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 201 OK\n{\n  {\n     \"Location\": \"[PATH_SERVER]/rue/rest/tipoparams/:id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TipoParamNoRegistrada",
            "description": "<p>No se registró el Tipo de paramétrica.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Hubo un error procesando la inserción en el Registro Unico\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "put",
    "url": "/tipoparams/:id",
    "title": "Actualizar un tipo de paramétruica existente",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X PUT -d [PATH_SERVER]/rue/rest/tipoparams/1 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PutTipoParam",
    "group": "TipoParam",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.TipoParam",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqRue.jar con los datos del tipo de paramétrica a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "Id",
            "description": "<p>Identificador único del tipo de paramétrica a actualizar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de TipoParam",
          "content": "{\"entity\": {\n    \"id\": \"1\",\n    \"nombre\": \"ROL_USUARIOS\"}\n}",
          "type": "java"
        },
        {
          "title": "Emplo de id",
          "content": "{\n    \"id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para actualizar un tipo de paramétrica existente. Obtiene el TipoParam correspondiente al id recibido mediante el método local find(Long id), actualiza sus datos según los de la entidad recibida y la edita mediante el método local edit(TipoParam tipoParam).</p>",
    "success": {
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TipoParamNoActualizado",
            "description": "<p>No se actualizó el TipoParam.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Modified\n{\n  \"error\": \"Hubo un error procesado la actualización en el Registro Unico.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "get",
    "url": "/login/",
    "title": "Obtener token",
    "version": "1.0.0",
    "name": "GetUsuarioApi",
    "group": "UsuarioApi",
    "description": "<p>Método para obtener el token para incluir en los header de los request a efectuar por parte del cliente. Recibe un nombre de usuarioApi, valida que esté registrado correctamente con el método local validarUsuarioApi(String user) y, de ser así,<br> genera un token y lo devuelve al usuario.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuarioApi autorizado para consumir el servicio.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Token de autenticación para enviar como header en los métodos de consulta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"authorization\": \"{{token}}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioApiInvalido",
            "description": "<p>Mensaje vacío.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Authorized\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/UsuarioApiResource.java",
    "groupTitle": "UsuarioApi"
  },
  {
    "type": "get",
    "url": "/usuarios/:id",
    "title": "Ver un Usuario",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/usuarios/2 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetUsuario",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único del usuario</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un usuarios existente según el id remitido. Obtiene el usuario mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Usuario",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Detalle del usuario registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     {\"id\": \"2\",\n     \"email\": \"usuario_2@correo.com\",\n     \"jurisdiccion\": \"RIO NEGRO\",\n     \"login\": \"27455506013\",\n     \"nombrecompleto\": \"LOPEZ, JOSE\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ACOPIADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioNotFound",
            "description": "<p>No existe usuario registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay usuario registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/usuarios/query?juris=:juris,cuit=:cuit",
    "title": "Ver Usurio según parámetros.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/usuarios/query?juris=JUJUY -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetUsuarioQuery",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "juris",
            "description": "<p>Provincia dentro de la cual se desempeña el usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cuit",
            "description": "<p>Cuit del usuario</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un usuario según su jurisdicción o su cuit. Solo uno de los parámetros tendrá un valor y los restantes nulos. Según el caso, obtiene el o los usuarios en cuestión con los métodos locales getByJuris(String juris) o getExistente(Long cuit)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Usuario",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Detalle del usuario registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n \"Usuarios\": [\n     {\"id\": \"3\",\n     \"email\": \"usuario_3@correo.com\",\n     \"jurisdiccion\": \"JUJUY\",\n     \"login\": \"27457740000\",\n     \"nombrecompleto\": \"HERNANDES, ERNESTO\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"TRANSFORMADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     },\n     {\"id\": \"7\",\n     \"email\": \"usuario_7@correo.com\",\n     \"jurisdiccion\": \"JUJUY\",\n     \"login\": \"27455501111\",\n     \"nombrecompleto\": \"GUTIERREZ, ARNALDO\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ACOPIADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuariosNotFound",
            "description": "<p>No existen usuarios registrados con esos parámetros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay usuarios registrados con los parámetros recibidos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "Ver todas los usuarios",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/rue/rest/usuarios -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetUsuarios",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para obtener un listado de los usuarios existentes. Obtiene los tipos de paramétricas mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Usuario",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Listado con todas los usuarios registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n \"Usuarios\": [\n     {\"id\": \"1\",\n     \"email\": \"usuario_1@correo.com\",\n     \"jurisdiccion\": \"CATAMARCA\",\n     \"login\": \"27457740609\",\n     \"nombrecompleto\": \"PEREZ, JUAN\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"TRANSFORMADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     },\n     {\"id\": \"2\",\n     \"email\": \"usuario_2@correo.com\",\n     \"jurisdiccion\": \"RIO NEGRO\",\n     \"login\": \"27455506013\",\n     \"nombrecompleto\": \"LOPEZ, JOSE\",\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ACOPIADOR\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         }\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuariosNotFound",
            "description": "<p>No existen usuarios registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay tipos de usuarios registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/usuarios",
    "title": "Registrar un Usuario",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X POST -d [PATH_SERVER]/rue/rest/usuarios -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PostUsuario",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token recibido al autenticar el usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de header:",
          "content": "{\n  \"Authorization\": \"xXyYvWzZ\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ar.gob.ambiente.sacvefor.servicios.trazabilidad.Usuario",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqRue.jar con los datos del Usuario a registrar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Usuario",
          "content": "{\"entity\": {\n    \"id\": \"0\",\n    \"email\": \"usuario_1@correo.com\",\n    \"jurisdiccion\": \"CATAMARCA\",\n    \"login\": \"27457740609\",\n    \"nombrecompleto\": \"PEREZ, JUAN\",\n    \"rol\":{\n        \"id\": \"1\",\n        \"nombre\": \"TRANSFORMADOR\",\n        \"tipo\": {\n            \"id\": \"1\",\n            \"nombre\": \"ROL_USUARIOS\"\n            }\n        }\n    }\n}",
          "type": "java"
        }
      ]
    },
    "description": "<p>Método para registrar un nuevo Usuario. Instancia una entidad a persistir un Usuario local y la crea mediante el método local create(Usuario usuario)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>url de acceso mediante GET a la Usuario registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 201 OK\n{\n  {\n     \"Location\": \"[PATH_SERVER]/rue/rest/usuarios/:id\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioRegistrado",
            "description": "<p>No se registró el Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Hubo un error procesando la inserción en el Registro Unico\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/trazabilidad/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  }
] });
