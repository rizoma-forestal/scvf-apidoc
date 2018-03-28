define({ "api": [
  {
    "type": "get",
    "url": "/estadosguia/:id",
    "title": "Ver un Estado de guía según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/estadosguia/3 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEstadoGuia",
    "group": "EstadoGuia",
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
            "description": "<p>Identificador único del EstadoGuia</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un EstadoGuia existente según el id remitido. Obtiene el estado de guía mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.EstadoGuia",
            "optional": false,
            "field": "EstadoGuia",
            "description": "<p>Detalle del estado de guía registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     {\"id\": \"3\",\n     \"nombre\": \"EN TRANSITO\"}\n}",
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
            "field": "EstadoGuiaNotFound",
            "description": "<p>No existe estado de guía registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay estado de guía registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/EstadoGuiaFacadeREST.java",
    "groupTitle": "EstadoGuia"
  },
  {
    "type": "get",
    "url": "/estadosguia",
    "title": "Ver todos los EstadoGuia",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/estadosguia -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEstadoGuia",
    "group": "EstadoGuia",
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
    "description": "<p>Método para obtener un listado de los estados de guías existentes. Obtiene los estados de guías mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.EstadoGuia",
            "optional": false,
            "field": "EstadoGuia",
            "description": "<p>Listado con todos los estados de guías registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"estadosguia\": [\n     {\"id\": \"1\",\n     \"nombre\": \"CARGA INICIAL\"},\n     {\"id\": \"2\",\n     \"nombre\": \"CERRADA\"},\n     {\"id\": \"3\",\n     \"nombre\": \"EN TRANSITO\"}\n  ]\n}",
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
            "field": "EstadosGuiaNotFound",
            "description": "<p>No existen estados de guías registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay estados de guías registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/EstadoGuiaFacadeREST.java",
    "groupTitle": "EstadoGuia"
  },
  {
    "type": "get",
    "url": "/estadosguia/query?nombre=:nombre",
    "title": "Ver Estados de guías según su nombre.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/estadosguia/query?nombre=CERRADA -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetEstadoGuiaQuery",
    "group": "EstadoGuia",
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
            "field": "nombre",
            "description": "<p>nombre de la Parametrica solicitada</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener la  paramétrica según su nombre. Obtiene la paramétrica con el método local getExistente(String nombre)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.EstadoGuia",
            "optional": false,
            "field": "EstadoGuia",
            "description": "<p>estado de la guía obtenida.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"estadoguia\": \n     {\"id\": \"3\",\n     \"nombre\": \"EN TRANSITO\"}\n}",
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
            "field": "EstadoGuiaNotFound",
            "description": "<p>No existe estado de guía registrado con ese nombre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay estado de guía registrado con con ese nombre\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/EstadoGuiaFacadeREST.java",
    "groupTitle": "EstadoGuia"
  },
  {
    "type": "get",
    "url": "/guias/:id",
    "title": "Ver una Guía según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/guias/32 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGuia",
    "group": "Guia",
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
            "description": "<p>Identificador único de la Guía</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener una Guía existente según el id remitido. Obtiene la Guía mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Detalle de la Guía registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n     {\n         \"id\": \"32\",   \n         \"items\": [\n             {\"id\": \"150\",\n             \"nombreCientifico\": \"Anadenanthera.colubrina\", \n             \"nombreVulgar\": \"HUILCO\",\n             \"clase\": \"POSTE\",\n             \"unidad\": \"UNIDAD\",\n             \"idEspecieTax\": \"3076\",\n             \"kilosXUnidad\": \"425\",\n             \"total\": \"3\",\n             \"totalKg\": \"1275\",\n             \"saldo\": \"3\",\n             \"saldoKg\": \"1275\", \n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"151\",\n             \"nombreCientifico\": \"Maclura tinctoria\",\n             \"nombreVulgar\": \"MORA AMARILLA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3126\",\n             \"kilosXUnidad\": \"800\",\n             \"total\": \"13\",\n             \"totalKg\": \"10400\",\n             \"saldo\": \"13\",\n             \"saldoKg\": \"10400\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Maclura tinctoria|MORA AMARILLA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"152\",\n             \"nombreCientifico\": \"Myroxylon peruiferum\",\n             \"nombreVulgar\": \"QUINA COLORADA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3105\",\n             \"kilosXUnidad\": \"1190\",\n             \"total\": \"7\",\n             \"totalKg\": \"8330\",\n             \"saldo\": \"7\",\n             \"saldoKg\": \"8330\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Myroxylon peruiferum|QUINA COLORADA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"}\n         ],\n         \"codigo\": \"TT-10-00003-2017\",\n         \"numFuente\": \"270/3190/PPAA\",\n         \"destino\": {\n             \"id\": \"7\",\n             \"idRue\": \"28\",\n             \"nombreCompleto\": \"GALVAN IRINA ESTEFANIA\",\n             \"tipoPersona\": \"Persona Física\",\n             \"cuit\": \"27455992112\",\n             \"email\": \"destino@algo.com\"\",\n             \"idLocGT\": \"3101\",\n             \"localidad\": \"CPO. PAULETTI\",\n             \"departamento\": \"EMPEDRADO\",\n             \"provincia\": \"CORRIENTES\"\n         },\n         \"transporte\": {\n             \"id\": \"64\",\n             \"vehiculo\": {\n                 \"id\": \"8\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"LA MODERNA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"26\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20213349881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             },\n             \"acoplado\": \"\",\n             \"condNombre\": \"JULIAN AGUADA\",\n             \"condDni\": \"15911458\"\n         }\n         \"origen\": {\n             \"id\": \"18\",\n             \"idRue\": \"22\",\n             \"nombreCompleto\": \"PAMPA DEL ZORRO - PARAJE\",\n             \"tipoPersona\": \"Persona Física\",\n             \"cuit\": \"23394011789\",\n             \"email\": \"origen@algo.com\",\n             \"idLocGT\": \"138\",\n             \"localidad\": \"PAMPA DEL ZORRO - PARAJE\",\n             \"departamento\": \"9 DE JULIO\",\n             \"provincia\": \"CHACO\"\n         },\n         \"fechaAlta\": \"2017-11-27 17:48:20.932\",\n         \"fechaEmisionGuia\": \"2017-11-27 17:55:13.835\",\n         \"fechaVencimiento\": \"2017-12-02 17:55:13.835\",\n         \"fechaCierre\": \"2017-11-27 18:01:48.145\",\n         \"estado\": {\n             \"id\": \"2\",\n             \"nombre\": \"CERRADA\"\n         }\n     }",
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
            "field": "GuiaNotFound",
            "description": "<p>No existe guía registrada con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay guía registrada con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/guias/query?codigo=:codigo,matricula=:matricula,destino=:destino",
    "title": "Ver Guías según parámetros.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-provincia/rest/guias/query?codigo=TT-10-00003-2017 -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/:cgl-provincia/rest/guias/query?matricula=ABC-128 -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/:cgl-provincia/rest/guias/query?destino=36251478523 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGuiaQuery",
    "group": "Guia",
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
            "field": "codigo",
            "description": "<p>Código de la Guía solicitada</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matricula",
            "description": "<p>Matrícula del vehículo de transporte de los productos amparados por las Guía buscadas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destino",
            "description": "<p>cuit del destinatario de la guía</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener la/s  guía/s según un código, una matrícula de vehículo de tansporte o un destinatario. Solo uno de los parámetros tendrá un valor y los restantes nulos. Según el caso, obtiene las guías en cuestión con los métodos locales getExistente(String codigo), getByVehiculo(String matricula) o getEmitidasByDestinatario(Long destino)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Guía o listado de las Guías obtenidas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"guias\": [\n     {\n         \"id\": \"32\",   \n         \"items\": [\n             {\"id\": \"150\",\n             \"nombreCientifico\": \"Anadenanthera.colubrina\", \n             \"nombreVulgar\": \"HUILCO\",\n             \"clase\": \"POSTE\",\n             \"unidad\": \"UNIDAD\",\n             \"idEspecieTax\": \"3076\",\n             \"kilosXUnidad\": \"425\",\n             \"total\": \"3\",\n             \"totalKg\": \"1275\",\n             \"saldo\": \"3\",\n             \"saldoKg\": \"1275\", \n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"151\",\n             \"nombreCientifico\": \"Maclura tinctoria\",\n             \"nombreVulgar\": \"MORA AMARILLA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3126\",\n             \"kilosXUnidad\": \"800\",\n             \"total\": \"13\",\n             \"totalKg\": \"10400\",\n             \"saldo\": \"13\",\n             \"saldoKg\": \"10400\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Maclura tinctoria|MORA AMARILLA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"152\",\n             \"nombreCientifico\": \"Myroxylon peruiferum\",\n             \"nombreVulgar\": \"QUINA COLORADA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3105\",\n             \"kilosXUnidad\": \"1190\",\n             \"total\": \"7\",\n             \"totalKg\": \"8330\",\n             \"saldo\": \"7\",\n             \"saldoKg\": \"8330\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Myroxylon peruiferum|QUINA COLORADA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"}\n         ],\n         \"codigo\": \"TT-10-00003-2017\",\n         \"numFuente\": \"270/3190/PPAA\",\n         \"destino\": {\n             \"id\": \"7\",\n             \"idRue\": \"28\",\n             \"nombreCompleto\": \"GALVAN IRINA ESTEFANIA\",\n             \"tipoPersona\": \"Persona Física\",\n             \"cuit\": \"27455992112\",\n             \"email\": \"destino@algo.com\"\",\n             \"idLocGT\": \"3101\",\n             \"localidad\": \"CPO. PAULETTI\",\n             \"departamento\": \"EMPEDRADO\",\n             \"provincia\": \"CORRIENTES\"\n         },\n         \"transporte\": {\n             \"id\": \"64\",\n             \"vehiculo\": {\n                 \"id\": \"8\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"LA MODERNA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"26\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20213349881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             },\n             \"acoplado\": \"\",\n             \"condNombre\": \"JULIAN AGUADA\",\n             \"condDni\": \"15911458\"\n         }\n         \"origen\": {\n             \"id\": \"18\",\n             \"idRue\": \"22\",\n             \"nombreCompleto\": \"PAMPA DEL ZORRO - PARAJE\",\n             \"tipoPersona\": \"Persona Física\",\n             \"cuit\": \"23394011789\",\n             \"email\": \"origen@algo.com\",\n             \"idLocGT\": \"138\",\n             \"localidad\": \"PAMPA DEL ZORRO - PARAJE\",\n             \"departamento\": \"9 DE JULIO\",\n             \"provincia\": \"CHACO\"\n         },\n         \"fechaAlta\": \"2017-11-27 17:48:20.932\",\n         \"fechaEmisionGuia\": \"2017-11-27 17:55:13.835\",\n         \"fechaVencimiento\": \"2017-12-02 17:55:13.835\",\n         \"fechaCierre\": \"2017-11-27 18:01:48.145\",\n         \"estado\": {\n             \"id\": \"2\",\n             \"nombre\": \"CERRADA\"\n         }\n     }\n   ]\n}",
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
            "field": "GuiasNotFound",
            "description": "<p>No existen guías registradas con esos parámetros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay guías registradas con los parámetros recibidos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/guias",
    "title": "Ver todas las Guías",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-provincia/rest/guias -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetGuias",
    "group": "Guia",
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
    "description": "<p>Método para obtener un listado de las guias existentes. Obtiene las guias mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Listado con todas las Guías registradas.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GuiasNotFound",
            "description": "<p>No existen Guías registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay guías registradas\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/guias/:id/items",
    "title": "Ver los ítems de una Guía",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-provincia/rest/guias/32/items -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetItemsXGuia",
    "group": "Guia",
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
            "description": "<p>Identificador único del Departamento</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener las Localidades asociadas a un Departamento existente según el id remitido. Obtiene las localidades mediante el método local getCentrosXDepto(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.ItemProductivo",
            "optional": false,
            "field": "ItemProductivo",
            "description": "<p>Listado de los Items productivos vinculados a la guía.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n {\n         \"items\": [\n             {\"id\": \"150\",\n             \"nombreCientifico\": \"Anadenanthera.colubrina\", \n             \"nombreVulgar\": \"HUILCO\",\n             \"clase\": \"POSTE\",\n             \"unidad\": \"UNIDAD\",\n             \"idEspecieTax\": \"3076\",\n             \"kilosXUnidad\": \"425\",\n             \"total\": \"3\",\n             \"totalKg\": \"1275\",\n             \"saldo\": \"3\",\n             \"saldoKg\": \"1275\", \n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"151\",\n             \"nombreCientifico\": \"Maclura tinctoria\",\n             \"nombreVulgar\": \"MORA AMARILLA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3126\",\n             \"kilosXUnidad\": \"800\",\n             \"total\": \"13\",\n             \"totalKg\": \"10400\",\n             \"saldo\": \"13\",\n             \"saldoKg\": \"10400\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Maclura tinctoria|MORA AMARILLA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"},\n             {\"id\": \"152\",\n             \"nombreCientifico\": \"Myroxylon peruiferum\",\n             \"nombreVulgar\": \"QUINA COLORADA\",\n             \"clase\": \"ROLLO\",\n             \"unidad\": \"METRO CUBICO\",\n             \"idEspecieTax\": \"3105\",\n             \"kilosXUnidad\": \"1190\",\n             \"total\": \"7\",\n             \"totalKg\": \"8330\",\n             \"saldo\": \"7\",\n             \"saldoKg\": \"8330\",\n             \"obs\": \"\",\n             \"codigoProducto\": \"null|Myroxylon peruiferum|QUINA COLORADA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"}\n         ]\n }",
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
            "field": "ItemsNotFound",
            "description": "<p>No existen ítems registrados vinculados a la guía.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay ítems registradas vinculados a la Guía recibida.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "put",
    "url": "/guias/:id",
    "title": "Actualizar una Guía existente",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X PUT -d [PATH_SERVER]:cgl-prov/rest/guias/32 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PutGuia",
    "group": "Guia",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Guia",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqGestionLocal.jar con los datos de la Guia a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "Id",
            "description": "<p>Identificador único de la Guía a actualizar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Guia",
          "content": "{\"entity\":{\n        \"id\": \"32\",   \n        \"items\": [\n            {\"id\": \"150\",\n            \"nombreCientifico\": \"Anadenanthera.colubrina\", \n            \"nombreVulgar\": \"HUILCO\",\n            \"clase\": \"POSTE\",\n            \"unidad\": \"UNIDAD\",\n            \"idEspecieTax\": \"3076\",\n            \"kilosXUnidad\": \"425\",\n            \"total\": \"3\",\n            \"totalKg\": \"1275\",\n            \"saldo\": \"3\",\n            \"saldoKg\": \"1275\", \n            \"obs\": \"\",\n            \"codigoProducto\": \"null|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|270/3190/PPAA|[Provincia]\"},\n            {\"id\": \"151\",\n            \"nombreCientifico\": \"Maclura tinctoria\",\n            \"nombreVulgar\": \"MORA AMARILLA\",\n            \"clase\": \"ROLLO\",\n            \"unidad\": \"METRO CUBICO\",\n            \"idEspecieTax\": \"3126\",\n            \"kilosXUnidad\": \"800\",\n            \"total\": \"13\",\n            \"totalKg\": \"10400\",\n            \"saldo\": \"13\",\n            \"saldoKg\": \"10400\",\n            \"obs\": \"\",\n            \"codigoProducto\": \"null|Maclura tinctoria|MORA AMARILLA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"},\n            {\"id\": \"152\",\n            \"nombreCientifico\": \"Myroxylon peruiferum\",\n            \"nombreVulgar\": \"QUINA COLORADA\",\n            \"clase\": \"ROLLO\",\n            \"unidad\": \"METRO CUBICO\",\n            \"idEspecieTax\": \"3105\",\n            \"kilosXUnidad\": \"1190\",\n            \"total\": \"7\",\n            \"totalKg\": \"8330\",\n            \"saldo\": \"7\",\n            \"saldoKg\": \"8330\",\n            \"obs\": \"\",\n            \"codigoProducto\": \"null|Myroxylon peruiferum|QUINA COLORADA|ROLLO|METRO CUBICO|270/3190/PPAA|[Provincia]\"}\n        ],\n        \"codigo\": \"TT-10-00003-2017\",\n        \"numFuente\": \"270/3190/PPAA\",\n        \"destino\": {\n            \"id\": \"7\",\n            \"idRue\": \"28\",\n            \"nombreCompleto\": \"GALVAN IRINA ESTEFANIA\",\n            \"tipoPersona\": \"Persona Física\",\n            \"cuit\": \"27455992112\",\n            \"email\": \"destino@algo.com\"\",\n            \"idLocGT\": \"3101\",\n            \"localidad\": \"CPO. PAULETTI\",\n            \"departamento\": \"EMPEDRADO\",\n            \"provincia\": \"CORRIENTES\"\n        },\n        \"transporte\": {\n            \"id\": \"64\",\n            \"vehiculo\": {\n                \"id\": \"8\",\n                \"matricula\": \"ABC-128\",\n                \"idRue\": \"10\",\n                \"marca\": \"LA MODERNA\",\n                \"modelo\": \"CHATA\",\n                \"anio\": \"1971\",\n                \"titular\": {\n                    \"id\": \"20\",\n                    \"idRue\": \"26\",\n                    \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                    \"cuit\": \"20213349881\",\n                    \"email\": \"transportista@algo.com\",\n                    \"tipo\": \"\"Persona Jurídica\"\"\n                }\n            },\n            \"acoplado\": \"\",\n            \"condNombre\": \"JULIAN AGUADA\",\n            \"condDni\": \"15911458\"\n        }\n        \"origen\": {\n            \"id\": \"18\",\n            \"idRue\": \"22\",\n            \"nombreCompleto\": \"PAMPA DEL ZORRO - PARAJE\",\n            \"tipoPersona\": \"Persona Física\",\n            \"cuit\": \"23394011789\",\n            \"email\": \"origen@algo.com\",\n            \"idLocGT\": \"138\",\n            \"localidad\": \"PAMPA DEL ZORRO - PARAJE\",\n            \"departamento\": \"9 DE JULIO\",\n            \"provincia\": \"CHACO\"\n        },\n        \"fechaAlta\": \"2017-11-27 17:48:20.932\",\n        \"fechaEmisionGuia\": \"2017-11-27 17:55:13.835\",\n        \"fechaVencimiento\": \"2017-12-02 17:55:13.835\",\n        \"fechaCierre\": \"2017-11-27 18:01:48.145\",\n        \"estado\": {\n            \"id\": \"2\",\n            \"nombre\": \"CERRADA\"\n        }\n    }\n}",
          "type": "java"
        },
        {
          "title": "Emplo de id",
          "content": "{\n    \"id\": \"32\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para actualizar una Guía existente. Obtiene la Guía correspondiente al id recibido mediante el método local find(Long id), actualiza solo el estado de la entidad recibida y la edita mediante el método local edit(Guia guia).</p>",
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
            "field": "GuiaNoActualizada",
            "description": "<p>No se actualizó la Guía.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Modified\n{\n  \"error\": \"Hubo un error procesado la actualización en el Componente de Trazabilidad.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/UsuarioApiResource.java",
    "groupTitle": "UsuarioApi"
  },
  {
    "type": "get",
    "url": "/vehiculos/:id",
    "title": "Ver un Vehículo según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/vehiculos/3 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetVehiculo",
    "group": "Vehiculo",
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
            "description": "<p>Identificador único del Vehiculo</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un Vehiculo existente según el id remitido. Obtiene el vehículo mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Vehiculo",
            "optional": false,
            "field": "Vehiculo",
            "description": "<p>Detalle del vehículo registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n             \"vehiculo\": {\n                 \"id\": \"8\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"LA MODERNA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"26\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20213349881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             }\n}",
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
            "field": "VehiculoNotFound",
            "description": "<p>No existe vehículo registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay vehículo registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/VehiculoFacadeREST.java",
    "groupTitle": "Vehiculo"
  },
  {
    "type": "get",
    "url": "/vehiculos",
    "title": "Ver todos los vehiculos",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/vehiculos -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetVehiculos",
    "group": "Vehiculo",
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
    "description": "<p>Método para obtener un listado de los vehículos existentes. Obtiene los estados de guías mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Vehiculo",
            "optional": false,
            "field": "Vehiculo",
            "description": "<p>Listado con todos los vehículos registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"estadosguia\": [\n             \"vehiculo\": {\n                 \"id\": \"8\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"LA MODERNA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"26\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20218889881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             },{\n                 \"id\": \"21\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"DORITA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"23\",\n                     \"nombreCompleto\": \"TRANSPORTES SALDAÑO SRL\",\n                     \"cuit\": \"20213339881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             },{\n                 \"id\": \"63\",\n                 \"matricula\": \"ABC-126\",\n                 \"idRue\": \"8\",\n                 \"marca\": \"VAQUEANO\",\n                 \"modelo\": \"DI SALVO LANDIVIA\",\n                 \"anio\": \"1973\",\n                 \"titular\": {\n                     \"id\": \"37\",\n                     \"idRue\": \"206\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20236949881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             }\n\n  ]\n}",
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
            "field": "VehiculosNotFound",
            "description": "<p>No existen estados de guías registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Vehiculos registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/VehiculoFacadeREST.java",
    "groupTitle": "Vehiculo"
  },
  {
    "type": "get",
    "url": "/vehiculos/query?mat=:mat",
    "title": "Ver Vehículos según su matrícula.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/:cgl-prov/rest/vehiculos/query?mat=ABC-128 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetVehiculosQuery",
    "group": "Vehiculo",
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
            "field": "matr",
            "description": "<p>ícula del Vehiculo solicitado</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un vehículo según su matrícula. Obtiene el vehículo con el método local getExistente(String mat)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.cgl.Vehiculo",
            "optional": false,
            "field": "Vehiculo",
            "description": "<p>vehículo obtenido.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n             \"vehiculo\": {\n                 \"id\": \"8\",\n                 \"matricula\": \"ABC-128\",\n                 \"idRue\": \"10\",\n                 \"marca\": \"LA MODERNA\",\n                 \"modelo\": \"CHATA\",\n                 \"anio\": \"1971\",\n                 \"titular\": {\n                     \"id\": \"20\",\n                     \"idRue\": \"26\",\n                     \"nombreCompleto\": \"TRANSPORTES JURANGO SRL\",\n                     \"cuit\": \"20213349881\",\n                     \"email\": \"transportista@algo.com\",\n                     \"tipo\": \"\"Persona Jurídica\"\"\n                 }\n             }",
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
            "field": "VehiculoNotFound",
            "description": "<p>No existe estado Vehiculo registrado con ese nombre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Vehiculo registrado con con ese nombre\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/localcompleto/service/VehiculoFacadeREST.java",
    "groupTitle": "Vehiculo"
  }
] });
