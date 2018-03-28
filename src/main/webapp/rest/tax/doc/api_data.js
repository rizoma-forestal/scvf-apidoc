define({ "api": [
  {
    "type": "get",
    "url": "/svf_especies/:id",
    "title": "Ver una Especie",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_especies/3136",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEspecie",
    "group": "Especies",
    "description": "<p>Método para obtener una Especie existente según el id remitido. Obtiene la especie mediante el método local find(id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Especie",
            "optional": false,
            "field": "Especie",
            "description": "<p>Detalle de la especie registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      {\n         \"id\": \"3136\",\n         \"nombre\": \"americana\",\n         \"genero\": \n             {\n                 \"id\": \"6760\",\n                 \"nombre\": \"Cordia\",\n                     \"familia\": \n                         {\n                             \"id\": \"309\",\n                             \"nombre\": \"Boraginaceae\",\n                             \"subFamilia\": \"\",\n                             \"esSacvefor\": \"true\"\n                         },\n                     \"esSacvefor\": \"true\"\n                 },\n             \"autores\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"rango\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"subEspecie\": \"\",\n             \"sinonimo\": \"\",\n             \"esSacvefor\": \"true\",\n             \"nombreCientifico\": \"Cordia americana\"\n             \"nombreCompleto\": \"Boraginaceae Cordia americana\"\n       }\n}",
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
            "field": "EspecieNotFound",
            "description": "<p>No existe especie registrada con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay especie registrada con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/EspecieFacadeSvfREST.java",
    "groupTitle": "Especies"
  },
  {
    "type": "get",
    "url": "/svf_especies",
    "title": "Ver todas las Especies",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_especies",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEspecies",
    "group": "Especies",
    "description": "<p>Método para obtener un listado de las Especies existentes. Obtiene las especies mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Especie",
            "optional": false,
            "field": "Especie",
            "description": "<p>Listado con todos las Especies registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"especies\": [\n         {\n             \"id\": \"3136\",\n             \"nombre\": \"americana\",\n             \"genero\": \n                 {\n                     \"id\": \"6760\",\n                     \"nombre\": \"Cordia\",\n                     \"familia\": \n                         {\n                             \"id\": \"309\",\n                             \"nombre\": \"Boraginaceae\",\n                             \"subFamilia\": \"\",\n                             \"esSacvefor\": \"true\"\n                         },\n                     \"esSacvefor\": \"true\"\n                 },\n             \"autores\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"rango\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"subEspecie\": \"\",\n             \"sinonimo\": \"\",\n             \"esSacvefor\": \"true\",\n             \"nombreCientifico\": \"Cordia americana\",\n             \"nombreCompleto\": \"Boraginaceae Cordia americana\"\n         },\n         {\n             \"id\": \"3075\",\n             \"nombre\": \"trichotoma\",\n             \"genero\": \n                 {\n                     \"id\": \"6760\",\n                     \"nombre\": \"Cordia\",\n                     \"familia\": \n                         {\n                             \"id\": \"309\",\n                             \"nombre\": \"Boraginaceae\",\n                             \"subFamilia\": \"\",\n                             \"esSacvefor\": \"true\"\n                         },\n                     \"esSacvefor\": \"true\"\n                 },\n             \"autores\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"rango\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"subEspecie\": \"\",\n             \"sinonimo\": \"\",\n             \"esSacvefor\": \"true\",\n             \"nombreCientifico\": \"Cordia trichotoma\",\n             \"nombreCompleto\": \"Boraginaceae Cordia trichotoma\"\n         }\n     ]\n}",
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
            "field": "EspeciesNotFound",
            "description": "<p>No existen especies registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Especies registradas\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/EspecieFacadeSvfREST.java",
    "groupTitle": "Especies"
  },
  {
    "type": "get",
    "url": "/svf_familias/:id",
    "title": "Ver una Familia",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_familias/2",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetFamilia",
    "group": "Familias",
    "description": "<p>Método para obtener una Familia existente según el id remitido. Obtiene la familia mediante el método local find(id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Familia",
            "optional": false,
            "field": "Familia",
            "description": "<p>Detalle de la familia registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  {\n     \"id\": \"2\",\n     \"nombre\": \"Andreaeaceae\",\n     \"subFamilia\": \"\",\n     \"esSacvefor\": \"true\"\n  }\n}",
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
            "field": "FamiliaNotFound",
            "description": "<p>No existe familia registrada con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay familia registrada con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/FamiliaFacadeSvfREST.java",
    "groupTitle": "Familias"
  },
  {
    "type": "get",
    "url": "/svf_familias",
    "title": "Ver todas las Familias",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_familias",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetFamilias",
    "group": "Familias",
    "description": "<p>Método para obtener un listado de las Familias existentes. Obtiene las familias mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Familia",
            "optional": false,
            "field": "Familias",
            "description": "<p>Listado con todas las Familias registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"familias\": [\n     {\"id\": \"2\",\n     \"nombre\": \"Andreaeaceae\",\n     \"subFamilia\": \"\",\n     \"esSacvefor\": \"true\"},\n     {\"id\": \"3\",\n     \"nombre\": \"Andreaeobryaceae\",\n     \"subFamilia\": \"\",\n     \"esSacvefor\": \"true\"}\n     ]\n}",
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
            "field": "FamiliasNotFound",
            "description": "<p>No existen familias registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Familias registradas\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/FamiliaFacadeSvfREST.java",
    "groupTitle": "Familias"
  },
  {
    "type": "get",
    "url": "/svf_familias/:id/generos",
    "title": "Ver los Géneros de una Familia",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_familias/2/generos",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGeneros",
    "group": "Familias",
    "description": "<p>Método para obtener los Géneros asociados a una Familia existente según el id remitido. Obtiene los géneros mediante el método local getSvfGenerosXIdFamilia(id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Genero",
            "optional": false,
            "field": "Genero",
            "description": "<p>Listado de los Géneros registrados vinculados a la Familia cuyo id se recibió.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"generos\": [\n     {\"id\": \"2\",\n     \"nombre\": \"Andreaea\",\n     \"familia\": \n         {\n             \"id\": \"1\",\n             \"nombre\": \"Andreaeaceae\",\n             \"subFamilia\": \"\",\n             \"esSacvefor\": \"true\"\n         },\n     \"esSacvefor\": \"true\"}\n     ]\n}",
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
            "field": "GenerosNotFound",
            "description": "<p>No existen géneros registrados vinculados a la id de la familia.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay géneros registrados vinculados al id de la familia recibido.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/FamiliaFacadeSvfREST.java",
    "groupTitle": "Familias"
  },
  {
    "type": "get",
    "url": "/svf_generos/:id/especies",
    "title": "Ver las Especies de un Género",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_generos/6760/especies",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEspecies",
    "group": "Generos",
    "description": "<p>Método para obtener las Especies asociadas a un Género existente según el id remitido. Obtiene las especies mediante el método local getSvfEspeciesXIdGenero(id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Especie",
            "optional": false,
            "field": "Especie",
            "description": "<p>Listado de las Especies registradas vinculadas al Género cuyo id se recibió.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"especies\": [\n         {\n             \"id\": \"3136\",\n             \"nombre\": \"americana\",\n             \"genero\": \n                 {\n                     \"id\": \"6760\",\n                     \"nombre\": \"Cordia\",\n                     \"familia\": \n                         {\n                             \"id\": \"309\",\n                             \"nombre\": \"Boraginaceae\",\n                             \"subFamilia\": \"\",\n                             \"esSacvefor\": \"true\"\n                         },\n                     \"esSacvefor\": \"true\"\n                 },\n             \"autores\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"rango\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"subEspecie\": \"\",\n             \"sinonimo\": \"\",\n             \"esSacvefor\": \"true\",\n             \"nombreCientifico\": \"Cordia americana\",\n             \"nombreCompleto:\" \"Boraginaceae Cordia americana\"\n         },\n         {\n             \"id\": \"3075\",\n             \"nombre\": \"trichotoma\",\n             \"genero\": \n                 {\n                     \"id\": \"6760\",\n                     \"nombre\": \"Cordia\",\n                     \"familia\": \n                         {\n                             \"id\": \"309\",\n                             \"nombre\": \"Boraginaceae\",\n                             \"subFamilia\": \"\",\n                             \"esSacvefor\": \"true\"\n                         },\n                     \"esSacvefor\": \"true\"\n                 },\n             \"autores\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"rango\":\n                 {\n                     \"id\": \"\",\n                     \"nombre\": \"\"\n                 },\n             \"subEspecie\": \"\",\n             \"sinonimo\": \"\",\n             \"esSacvefor\": \"true\",\n             \"nombreCientifico\": \"Cordia trichotoma\",\n             \"nombreCompleto\": \"Boraginaceae Cordia trichotoma\"\n         }\n     ]\n }",
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
            "field": "EspeciesNotFound",
            "description": "<p>No existen especies registradas vinculadas a la id del género.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay especies registradas vinculadas al id del género recibido.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/GeneroFacadeSvfREST.java",
    "groupTitle": "Generos"
  },
  {
    "type": "get",
    "url": "/svf_generos/:id",
    "title": "Ver un Género",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_generos/1",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGenero",
    "group": "Generos",
    "description": "<p>Método para obtener un Género existente según el id remitido. Obtiene el género mediante el método local find(id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Genero",
            "optional": false,
            "field": "Genero",
            "description": "<p>Detalle del género registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  {\n     \"id\": \"1\",\n     \"nombre\": \"Andreaea\",\n     \"familia\": \n         {\n             \"id\": \"2\",\n             \"nombre\": \"Andreaeaceae\",\n             \"subFamilia\": \"\",\n             \"esSacvefor\": \"true\"\n         },\n     \"esSacvefor\": \"true\"\n  }\n}",
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
            "field": "GeneroNotFound",
            "description": "<p>No existe género registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay género registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/GeneroFacadeSvfREST.java",
    "groupTitle": "Generos"
  },
  {
    "type": "get",
    "url": "/svf_generos",
    "title": "Ver todos los Géneros",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i -H \"Content-Type: application/json\" -X GET -d /especiesVegetales/rest/svf_generos",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGeneros",
    "group": "Generos",
    "description": "<p>Método para obtener un listado de los Géneros existentes. Obtiene los géneros mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.especies.Genero",
            "optional": false,
            "field": "Genero",
            "description": "<p>Listado con todos los Géneros registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"generos\": [\n     {\"id\": \"1\",\n     \"nombre\": \"Andreaea\",\n     \"familia\": \n         {\n             \"id\": \"2\",\n             \"nombre\": \"Andreaeaceae\",\n             \"subFamilia\": \"\",\n             \"esSacvefor\": \"true\"\n         },\n     \"esSacvefor\": \"true\"},\n     {\"id\": \"2\",\n     \"nombre\": \"\"Andreaeobryum\"\",\n     \"familia\": \n         {\n             \"id\": \"3\",\n             \"nombre\": \"\"Andreaeobryaceae\"\",\n             \"subFamilia\": \"\",\n             \"esSacvefor\": \"true\"\n         },\n     \"esSacvefor\": \"true\"}\n     ]\n}",
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
            "field": "GenerosNotFound",
            "description": "<p>No existen géneros registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Géneros registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/GeneroFacadeSvfREST.java",
    "groupTitle": "Generos"
  },
  {
    "version": "1.0.0",
    "name": "GetUsuario",
    "group": "Usuario",
    "description": "<p>Método para obtener el token para incluir en los header de los request a efectuar por parte del cliente. Recibe un nombre de usuario, valida que esté registrado correctamente con el método local validarUsuarioApi(user) y, de ser así,<br> genera un token y lo devuelve al usuario.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del usuario autorizado para consumir el servicio.</p>"
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
            "field": "UsuarioInvalido",
            "description": "<p>Mensaje vacío.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "filename": "src/main/java/ar/gob/ambiente/servicios/especiesforestales/rest/UsuarioResource.java",
    "groupTitle": "Usuario"
  }
] });
