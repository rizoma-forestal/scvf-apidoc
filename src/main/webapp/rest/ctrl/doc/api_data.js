define({ "api": [
  {
    "type": "get",
    "url": "/componenteslocales/:id",
    "title": "Ver un Componente local según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/componenteslocales/3 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetComponenteLocal",
    "group": "ComponenteLocal",
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
            "description": "<p>Identificador único del ComponenteLocal</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un ComponenteLocal existente según el id remitido. Obtiene el componente local mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.ComponenteLocal",
            "optional": false,
            "field": "ComponenteLocal",
            "description": "<p>Detalle del componente local registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     {\"id\": \"3\",\n     \"correoelectronico\": \"componente@[provincia].gob.ar\",\n     \"habilitado\": \"true\",\n     \"provincia\": \"SANTIAGO DEL ESTERO\",\n     \"url\": \"[server]/cgl-santiago/rest\",\n     \"idprovgt\": \"22\"}\n}",
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
            "field": "ComponenteLocalNotFound",
            "description": "<p>No existe componente local registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay componente local registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ComponenteLocalFacadeREST.java",
    "groupTitle": "ComponenteLocal"
  },
  {
    "type": "get",
    "url": "/componenteslocales",
    "title": "Ver todos los Componentes locales",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/componenteslocales -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetComponentesLocales",
    "group": "ComponenteLocal",
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
    "description": "<p>Método para obtener un listado de los componentes locales existentes. Obtiene los componentes locales mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.ComponenteLocal",
            "optional": false,
            "field": "ComponenteLocal",
            "description": "<p>Listado con todas los componentes locales registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"parametricas\": [\n     {\"id\": \"3\",\n     \"correoelectronico\": \"componente@[provincia].gob.ar\",\n     \"habilitado\": \"true\",\n     \"provincia\": \"SANTIAGO DEL ESTERO\",\n     \"url\": \"[server]/cgl-santiago/rest\",\n     \"idprovgt\": \"22\"},\n     {\"id\": \"2\",\n     \"correoelectronico\": \"componente@[provincia].gob.ar\",\n     \"habilitado\": \"true\",\n     \"provincia\": \"JUJUY\",\n     \"url\": \"[server]/cgl-jujuy/rest\",\n     \"idprovgt\": \"10\"},\n     {\"id\": \"4\",\n     \"correoelectronico\": \"componente@[provincia].gob.ar\",\n     \"habilitado\": \"true\",\n     \"provincia\": \"SALTA\",\n     \"url\": \"[server]/cgl-salta/rest\",\n     \"idprovgt\": \"17\"}\n  ]\n}",
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
            "field": "ComponentesLocalesNotFound",
            "description": "<p>No existen componentes locales registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay componentes locales registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ComponenteLocalFacadeREST.java",
    "groupTitle": "ComponenteLocal"
  },
  {
    "type": "get",
    "url": "/controles/:id",
    "title": "Ver un Control según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/controles/3 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetControl",
    "group": "Control",
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
            "description": "<p>Identificador único del Control</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un Control existente según el id remitido. Obtiene el componente local mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Control",
            "optional": false,
            "field": "Control",
            "description": "<p>Detalle del control registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"3\",\n     \"fechahora\": \"componente@[provincia].gob.ar\",\n     \"obs\": \"true\",\n     \"guia\": {\n         \"id\": \"4\",\n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"ORLANDO GOÑI\",\n         \"nombredestino\": \"GONZALEZ MAIZ SA\",\n         \"nombreorigen\": \"LAS CAPRICHOSAS SA\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-09-15 15:26:04.47\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"ALMAGRO - BARRIO - CIUDAD AUTONOMA DE BUENOS AIRES\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     },\n     \"resultado\": {\n         \"id\": \"15\",\n         \"habilitado\": \"true\",\n         \"nombre\": \"VALIDADA\",\n         \"tipo\": {\n             \"id\": \"2\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"EST_GUIAS\",\n         },\n     },\n     \"ruta\": \"RP. 26\",\n     \"altura\": \"Km 29,300\"\n}",
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
            "field": "ControlNotFound",
            "description": "<p>No existe control registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay control registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ControlFacadeREST.java",
    "groupTitle": "Control"
  },
  {
    "type": "get",
    "url": "/controles/query?codGuia=:codGuia,resultado=:resultado,idLoc=:idLoc",
    "title": "Ver Controles según parámetros.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/controles/query?codGuia=TT-10-00003-2017 -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/ctrlVerif/rest/controles/query?resultado=VALIDADA -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/ctrlVerif/rest/controles/query?idLoc=10 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetControlQuery",
    "group": "Control",
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
            "field": "codGuia",
            "description": "<p>Código de la Guía cuyos controles se solicita</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resultado",
            "description": "<p>Resultado del control de las Guías solicitadas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idLoc",
            "description": "<p>Identificación de la Provincia de cuyas Guías se solicitan los controles</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener los controles según una Guía determinada, un resultado determinado o una Provincia emisora. Solo uno de los parámetros tendrá un valor y los restantes nulos. Según el caso, obtiene los controles en cuestión con los métodos locales getByCodGuia(String codGuia), getByResultado(String resultado) o getByIdLocGt(Long idLoc)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Control",
            "optional": false,
            "field": "Control",
            "description": "<p>Listado de los Controles obtenidos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"controles\": [\n     {\"id\": \"3\",\n     \"fechahora\": \"2017-08-09 12:52:27.447\",\n     \"obs\": \"Todo salió muy bien\",\n     \"guia\": {\n         \"id\": \"4\", \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"ORLANDO GOÑI\",\n         \"nombredestino\": \"GONZALEZ MAIZ SA\",\n         \"nombreorigen\": \"LAS CAPRICHOSAS SA\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-09-15 15:26:04.47\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"ALMAGRO - BARRIO - CIUDAD AUTONOMA DE BUENOS AIRES\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     },\n     \"resultado\": {\n         \"id\": \"15\",\n         \"habilitado\": \"true\",\n         \"nombre\": \"VALIDADA\",\n         \"tipo\": {\n             \"id\": \"2\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"EST_GUIAS\",\n         },\n     },\n     \"ruta\": \"RP. 26\",\n     \"altura\": \"Km 29,300\"},\n     {\"id\": \"17\",\n     \"fechahora\": \"2017-10-17 16:37:58.743\",\n     \"obs\": \"Se validó correctamente la Guía\",\n     \"guia\": {\n         \"id\": \"20\",   \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"36|Prosopis.nigra|ALGARROBO NEGRO|ROLLO|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Prosopis.nigra\",\n             \"nombrevulgar\": \"ALGARROBO NEGRO\",\n             \"total\": \"21\",\n             \"totalkg\": \"7507.5\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"3\",\n             \"totalkg\": \"1275\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"41|Lonchocarpus lilloí|QUINA BLANCA|ROLLO|METRO CUBICO|214/2017/SAMA|[Provincia]\",\n             \"nombrecientifico\": \"Lonchocarpus lilloí\",\n             \"nombrevulgar\": \"QUINA BLANCA\",\n             \"total\": \"17\",\n             \"totalkg\": \"12750\",\n             \"unidad\": \"METRO CUBICO\"}\n         ],\n         \"codigo\": \"TT-10-00003-2017\",\n         \"cuitdestino\": \"20141173612\",\n         \"cuitorigen\": \"27031104663\",\n         \"dniconductor\": \"15911856\",\n         \"fechaalta\": \"2017-11-27 12:22:42.548\",\n         \"fechaemision\": \"2017-11-27 12:22:29.734\",\n         \"fechavencimiento\": \"2017-12-27 12:22:29.734\",\n         \"matacoplado\": \"100-RTU-697\",\n         \"matvehiculo\": \"LMG-987\",\n         \"nombreconductor\": \"JACOPO BELBO\",\n         \"nombredestino\": \"HERNANDEZ, PABLO ENRIQUE\",\n         \"nombreorigen\": \"SILVESTRE, SUSANA ERNESTINA\",\n         \"numfuente\": \"EE-10-00001-2017\",\n         \"tipo\": \"REMITO\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-11-27 12:32:35.813\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"SAN SALVADOR DE JUJUY - JUJUY\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     },\n     \"resultado\": {\n         \"id\": \"15\",\n         \"habilitado\": \"true\",\n         \"nombre\": \"VALIDADA\",\n         \"tipo\": {\n             \"id\": \"2\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"EST_GUIAS\",\n         },\n     },\n     \"ruta\": \"RP. 31\",\n     \"altura\": \"Km 15,900\"}\n  ]\n}",
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
            "field": "ControlesNotFound",
            "description": "<p>No existen controles registrados con esos parámetros.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay controles registrados con los parámetros recibidos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ControlFacadeREST.java",
    "groupTitle": "Control"
  },
  {
    "type": "get",
    "url": "/controles",
    "title": "Ver todos los controles",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/controles -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetControles",
    "group": "Control",
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
    "description": "<p>Método para obtener un listado de los controles existentes. Obtiene los controles mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Control",
            "optional": false,
            "field": "Control",
            "description": "<p>Listado con todas los controles registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"controles\": [\n     {\"id\": \"3\",\n     \"fechahora\": \"2017-08-09 12:52:27.447\",\n     \"obs\": \"Todo salió muy bien\",\n     \"guia\": {\n         \"id\": \"4\",   \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"ORLANDO GOÑI\",\n         \"nombredestino\": \"GONZALEZ MAIZ SA\",\n         \"nombreorigen\": \"LAS CAPRICHOSAS SA\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-09-15 15:26:04.47\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"ALMAGRO - BARRIO - CIUDAD AUTONOMA DE BUENOS AIRES\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     },\n     \"resultado\": {\n         \"id\": \"15\",\n         \"habilitado\": \"true\",\n         \"nombre\": \"VALIDADA\",\n         \"tipo\": {\n             \"id\": \"2\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"EST_GUIAS\",\n         },\n     },\n     \"ruta\": \"RP. 26\",\n     \"altura\": \"Km 29,300\"},\n     {\"id\": \"17\",\n     \"fechahora\": \"2017-10-17 16:37:58.743\",\n     \"obs\": \"Se validó correctamente la Guía\",\n     \"guia\": {\n         \"id\": \"20\",   \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"36|Prosopis.nigra|ALGARROBO NEGRO|ROLLO|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Prosopis.nigra\",\n             \"nombrevulgar\": \"ALGARROBO NEGRO\",\n             \"total\": \"21\",\n             \"totalkg\": \"7507.5\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"3\",\n             \"totalkg\": \"1275\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"41|Lonchocarpus lilloí|QUINA BLANCA|ROLLO|METRO CUBICO|214/2017/SAMA|[Provincia]\",\n             \"nombrecientifico\": \"Lonchocarpus lilloí\",\n             \"nombrevulgar\": \"QUINA BLANCA\",\n             \"total\": \"17\",\n             \"totalkg\": \"12750\",\n             \"unidad\": \"METRO CUBICO\"}\n         ],\n         \"codigo\": \"TT-10-00003-2017\",\n         \"cuitdestino\": \"20141173612\",\n         \"cuitorigen\": \"27031104663\",\n         \"dniconductor\": \"15911856\",\n         \"fechaalta\": \"2017-11-27 12:22:42.548\",\n         \"fechaemision\": \"2017-11-27 12:22:29.734\",\n         \"fechavencimiento\": \"2017-12-27 12:22:29.734\",\n         \"matacoplado\": \"100-RTU-697\",\n         \"matvehiculo\": \"LMG-987\",\n         \"nombreconductor\": \"JACOPO BELBO\",\n         \"nombredestino\": \"HERNANDEZ, PABLO ENRIQUE\",\n         \"nombreorigen\": \"SILVESTRE, SUSANA ERNESTINA\",\n         \"numfuente\": \"EE-10-00001-2017\",\n         \"tipo\": \"REMITO\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-11-27 12:32:35.813\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"SAN SALVADOR DE JUJUY - JUJUY\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     },\n     \"resultado\": {\n         \"id\": \"15\",\n         \"habilitado\": \"true\",\n         \"nombre\": \"VALIDADA\",\n         \"tipo\": {\n             \"id\": \"2\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"EST_GUIAS\",\n         },\n     },\n     \"ruta\": \"RP. 31\",\n     \"altura\": \"Km 15,900\"}\n  ]\n}",
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
            "field": "ComponentesLocalesNotFound",
            "description": "<p>No existen componentes locales registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay componentes locales registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ControlFacadeREST.java",
    "groupTitle": "Control"
  },
  {
    "type": "get",
    "url": "/guias/:id",
    "title": "Ver una Guía según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/guias/4 -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Detalle de la Guía registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n     {\n         \"id\": \"4\",   \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"SEBASTIAN PIANA\",\n         \"nombredestino\": \"LA CACHILA SA\",\n         \"nombreorigen\": \"CALLEJON SRL\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         }\n     }",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/guias/query?codigo=:codigo,matricula=:matricula,provincia=:provincia",
    "title": "Ver Guías según parámetros.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/guias/query?codigo=TT-10-00003-2017 -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/ctrlVerif/rest/guias/query?matricula=LMG-987 -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/ctrlVerif/rest/guias/query?provincia=JUJUY -H \"authorization: xXyYvWzZ\"",
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
            "field": "provincia",
            "description": "<p>Nombre de la Provincia emisora de las Guías buscadas</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener la/s  guía/s según un código, una matrícula de vehículo de tansporte o una Provincia emisora. Solo uno de los parámetros tendrá un valor y los restantes nulos. Según el caso, obtiene las guías en cuestión con los métodos locales getExistente(String codigo), getByVehiculo(String matricula) o getByProvincia(String provincia)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Guía o listado de las Guías obtenidas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"guias\": [\n     {\n         \"id\": \"20\", \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"36|Prosopis.nigra|ALGARROBO NEGRO|ROLLO|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Prosopis.nigra\",\n             \"nombrevulgar\": \"ALGARROBO NEGRO\",\n             \"total\": \"21\",\n             \"totalkg\": \"7507.5\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"3\",\n             \"totalkg\": \"1275\",\n             \"unidad\": \"UNIDAD\"},\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"41|Lonchocarpus lilloí|QUINA BLANCA|ROLLO|METRO CUBICO|214/2017/SAMA|[Provincia]\",\n             \"nombrecientifico\": \"Lonchocarpus lilloí\",\n             \"nombrevulgar\": \"QUINA BLANCA\",\n             \"total\": \"17\",\n             \"totalkg\": \"12750\",\n             \"unidad\": \"METRO CUBICO\"}\n         ],\n         \"codigo\": \"TT-10-00003-2017\",\n         \"cuitdestino\": \"20141173612\",\n         \"cuitorigen\": \"27031104663\",\n         \"dniconductor\": \"15911856\",\n         \"fechaalta\": \"2017-11-27 12:22:42.548\",\n         \"fechaemision\": \"2017-11-27 12:22:29.734\",\n         \"fechavencimiento\": \"2017-12-27 12:22:29.734\",\n         \"matacoplado\": \"100-RTU-697\",\n         \"matvehiculo\": \"LMG-987\",\n         \"nombreconductor\": \"JACOPO BELBO\",\n         \"nombredestino\": \"HERNANDEZ, PABLO ENRIQUE\",\n         \"nombreorigen\": \"SILVESTRE, SUSANA ERNESTINA\",\n         \"numfuente\": \"EE-10-00001-2017\",\n         \"tipo\": \"REMITO\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         }\n     },\n     {\n         \"id\": \"4\", \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"ORLANDO GOÑI\",\n         \"nombredestino\": \"GONZALEZ MAIZ SA\",\n         \"nombreorigen\": \"LAS CAPRICHOSAS SA\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         },\n         \"fechacierre\": \"2017-09-15 15:26:04.47\",\n         \"estado\":{\n             \"id\": \"4\",\n             \"habilitado\": \"true\",\n             \"nombre\": \"CERRADA\",\n             \"tipo\":{\n                 \"id\": \"2\",\n                 \"habilitado\": \"true\",\n                 \"nombre\": \"EST_GUIAS\",\n             }\n         },\n         \"locdestino\": \"ALMAGRO - BARRIO - CIUDAD AUTONOMA DE BUENOS AIRES\",\n         \"locorigen\": \"ALTO BELLO - PUEBLO - SANTIAGO DEL ESTERO\"\n     }\n   ]\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/guias",
    "title": "Ver todas las Guías",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/guias -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Guia",
            "optional": false,
            "field": "Guia",
            "description": "<p>Listado con todas las Guías registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"guias\": [\n     {\"id\": \"4\",   \n         \"items\": [\n             {\"clase\": \"ROLLO\",\n             \"codigoorigen\": \"37|Pterogyne.nitens|TIPA COLORADA|ROLLO|METRO CUBICO|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Pterogyne.nitens\",\n             \"nombrevulgar\": \"TIPA COLORADA\",\n             \"total\": \"21\",\n             \"totalkg\": \"17409\",\n             \"unidad\": \"METRO CUBICO\"},\n             {\"clase\": \"POSTE\",\n             \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n             \"nombrecientifico\": \"Anadenanthera.colubrina\",\n             \"nombrevulgar\": \"HUILCO\",\n             \"total\": \"13\",\n             \"totalkg\": \"5525\",\n             \"unidad\": \"UNIDAD\"}\n         ],\n         \"codigo\": \"TT-0-00016-2017\",\n         \"cuitdestino\": \"27451140609\",\n         \"cuitorigen\": \"23181106199\",\n         \"dniconductor\": \"19611874\",\n         \"fechaalta\": \"2017-08-08 13:45:58.839\",\n         \"fechaemision\": \"2017-08-08 13:45:55.34\",\n         \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n         \"matacoplado\": \"\",\n         \"matvehiculo\": \"SEJ-659\",\n         \"nombreconductor\": \"SEBASTIAN PIANA\",\n         \"nombredestino\": \"LA CACHILA SA\",\n         \"nombreorigen\": \"CALLEJON SRL\",\n         \"numfuente\": \"EE-0-00022-2017\",\n         \"tipo\": \"TRANSPORTE\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         }\n     },\n     {\n         \"id\": \"20\",   \n         \"codigo\": \"TT-10-00003-2017\",\n         \"cuitdestino\": \"20141173612\",\n         \"cuitorigen\": \"27031104663\",\n         \"dniconductor\": \"15911856\",\n         \"fechaalta\": \"2017-11-27 12:22:42.548\",\n         \"fechaemision\": \"2017-11-27 12:22:29.734\",\n         \"fechavencimiento\": \"2017-12-27 12:22:29.734\",\n         \"matacoplado\": \"100-RTU-697\",\n         \"matvehiculo\": \"LMG-987\",\n         \"nombreconductor\": \"JACOPO BELBO\",\n         \"nombredestino\": \"HERNANDEZ, PABLO ENRIQUE\",\n         \"nombreorigen\": \"SILVESTRE, SUSANA ERNESTINA\",\n         \"numfuente\": \"EE-10-00001-2017\",\n         \"tipo\": \"REMITO\",\n         \"tipofuente\": \"GUIA MADRE\",\n         \"componentelocal\":{\n             \"id\": \"3\",\n             \"correoelectronico\": \"componente@[provincia].gob.ar\",\n             \"habilitado\": \"true\",\n             \"provincia\": \"SANTIAGO DEL ESTERO\",\n             \"url\": \"[server]/cgl-santiago/rest\",\n             \"idprovgt\": \"22\"\n         }\n     }\n  ]\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "post",
    "url": "/guias",
    "title": "Registrar una Guia",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X POST -d [PATH_SERVER]/ctrlVerif/rest/guias -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "PostGuia",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Guia",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqControlVerif.jar con los datos de la Persona a registrar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Guia",
          "content": "{\"entity\":{\n        \"id\": \"0\",   \n        \"codigo\": \"TT-0-00016-2017\",\n        \"cuitdestino\": \"27451140609\",\n        \"cuitorigen\": \"23181106199\",\n        \"dniconductor\": \"19611874\",\n        \"fechaalta\": \"2017-08-08 13:45:58.839\",\n        \"fechaemision\": \"2017-08-08 13:45:55.34\",\n        \"fechavencimiento\": \"2017-09-20 14:47:52.133\",\n        \"matacoplado\": \"\",\n        \"matvehiculo\": \"SEJ-659\",\n        \"nombreconductor\": \"ORLANDO GOÑI\",\n        \"nombredestino\": \"GONZALEZ MAIZ SA\",\n        \"nombreorigen\": \"LAS CAPRICHOSAS SA\",\n        \"numfuente\": \"EE-0-00022-2017\",\n        \"tipo\": \"TRANSPORTE\",\n        \"tipofuente\": \"GUIA MADRE\",\n        \"componentelocal\":{\n            \"id\": \"3\",\n            \"correoelectronico\": \"componente@[provincia].gob.ar\",\n            \"habilitado\": \"true\",\n            \"provincia\": \"SANTIAGO DEL ESTERO\",\n            \"url\": \"[server]/cgl-santiago/rest\",\n            \"idprovgt\": \"22\"\n        }\n    }\n}",
          "type": "java"
        }
      ]
    },
    "description": "<p>Método para registrar una nueva Guia. Instancia una entidad a persistir Guia local y la crea mediante el método local create(Guia guia)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>url de acceso mediante GET al Guia registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response exitosa:",
          "content": "HTTP/1.1 201 OK\n{\n  {\n     \"Location\": \"[PATH_SERVER]/ctrlVerif/rest/guias/:id\"\n  }\n}",
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
            "field": "GuiaNoRegistrada",
            "description": "<p>No se registró la Guia.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de Error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Hubo un error procesando la inserción en el Componente de Trazabilidad\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "put",
    "url": "/guias/:id",
    "title": "Actualizar una Guía existente",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X PUT -d [PATH_SERVER]ctrlVerif/rest/guias/20 -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Guia",
            "optional": false,
            "field": "entity",
            "description": "<p>Objeto java del paquete paqControlVerif.jar con los datos de la Guia a actualizar</p>"
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
          "content": "{\"entity\":{\n        \"id\": \"20\",   \n        \"items\": [\n            {\"clase\": \"ROLLO\",\n            \"codigoorigen\": \"36|Prosopis.nigra|ALGARROBO NEGRO|ROLLO|UNIDAD|005/0650/AFDA|[Provincia]\",\n            \"nombrecientifico\": \"Prosopis.nigra\",\n            \"nombrevulgar\": \"ALGARROBO NEGRO\",\n            \"total\": \"21\",\n            \"totalkg\": \"7507.5\",\n            \"unidad\": \"UNIDAD\"},\n            {\"clase\": \"POSTE\",\n            \"codigoorigen\": \"35|Anadenanthera.colubrina|HUILCO|POSTE|UNIDAD|005/0650/AFDA|[Provincia]\",\n            \"nombrecientifico\": \"Anadenanthera.colubrina\",\n            \"nombrevulgar\": \"HUILCO\",\n            \"total\": \"3\",\n            \"totalkg\": \"1275\",\n            \"unidad\": \"UNIDAD\"},\n            {\"clase\": \"ROLLO\",\n            \"codigoorigen\": \"41|Lonchocarpus lilloí|QUINA BLANCA|ROLLO|METRO CUBICO|214/2017/SAMA|[Provincia]\",\n            \"nombrecientifico\": \"Lonchocarpus lilloí\",\n            \"nombrevulgar\": \"QUINA BLANCA\",\n            \"total\": \"17\",\n            \"totalkg\": \"12750\",\n            \"unidad\": \"METRO CUBICO\"}\n        ],\n        \"codigo\": \"TT-10-00003-2017\",\n        \"cuitdestino\": \"20141173612\",\n        \"cuitorigen\": \"27031104663\",\n        \"dniconductor\": \"15911856\",\n        \"fechaalta\": \"2017-11-27 12:22:42.548\",\n        \"fechaemision\": \"2017-11-27 12:22:29.734\",\n        \"fechavencimiento\": \"2017-12-27 12:22:29.734\",\n        \"matacoplado\": \"100-RTU-697\",\n        \"matvehiculo\": \"LMG-987\",\n        \"nombreconductor\": \"JACOPO BELBO\",\n        \"nombredestino\": \"HERNANDEZ, PABLO ENRIQUE\",\n        \"nombreorigen\": \"SILVESTRE, SUSANA ERNESTINA\",\n        \"numfuente\": \"EE-10-00001-2017\",\n        \"tipo\": \"REMITO\",\n        \"tipofuente\": \"GUIA MADRE\",\n        \"componentelocal\":{\n            \"id\": \"3\",\n            \"correoelectronico\": \"componente@[provincia].gob.ar\",\n            \"habilitado\": \"true\",\n            \"provincia\": \"SANTIAGO DEL ESTERO\",\n            \"url\": \"[server]/cgl-santiago/rest\",\n            \"idprovgt\": \"22\"\n        }\n    }\n}",
          "type": "java"
        },
        {
          "title": "Emplo de id",
          "content": "{\n    \"id\": \"20\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Método para actualizar una Guía existente. Obtiene la Guía correspondiente al id recibido mediante el método local find(Long id), actualiza sus datos según los de la entidad recibida y la edita mediante el método local edit(Guia guia).</p>",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/GuiaFacadeREST.java",
    "groupTitle": "Guia"
  },
  {
    "type": "get",
    "url": "/parametricas/:id",
    "title": "Ver una Parametrica",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/parametricas/2 -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Parametrica",
            "optional": false,
            "field": "Parametrica",
            "description": "<p>Detalle de la paramétrica registrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\n     \"id\": \"2\",\n     \"nombre\": \"OPERATIVO\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\"\n     }\n }\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/parametricas/query?tipoParam=:tipoParam,nombre=:nombre",
    "title": "Ver Paramétricas según su nombre y tipo.",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/parametricas/query?tipoParam=EST_GUIAS -H \"authorization: xXyYvWzZ\"\ncurl -X GET -d [PATH_SERVER]/ctrlVerif/rest/parametricas/query?nombre=VALIDADA \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetParametricaQuery",
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
            "type": "String",
            "optional": false,
            "field": "tipoParam",
            "description": "<p>tipo de la Parametrica solicitada</p>"
          },
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
    "description": "<p>Método para obtener la  paramétrica según su tipo y nombre. Los dos parámetros deberán tener un valor asignado. Obtiene la paramétrica con el método local obtenerParametro(String tipoParam, String nombre)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Parametrica",
            "optional": false,
            "field": "Parametrica",
            "description": "<p>Paramétrica obtenida.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"parametrica\": \n     {\"id\": \"3\",\n     \"nombre\": \"VIGENTE\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"EST_GUIAS\",\n     }\n}",
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
            "description": "<p>No existe paramétrica registrada con ese nombre y tipo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay paramétrica registrada con con ese nombre y tipo\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/parametricas",
    "title": "Ver todas las Parametricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/parametricas -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Parametrica",
            "optional": false,
            "field": "Parametricas",
            "description": "<p>Listado con todas las Parametricas registradas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"parametricas\": [\n     {\"id\": \"2\",\n     \"nombre\": \"OPERATIVO\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"ROL_USUARIOS\"\n     },\n     {\"id\": \"3\",\n     \"nombre\": \"VIGENTE\",\n     \"tipo\": {\n         \"id\": \"1\",\n         \"nombre\": \"EST_GUIAS\",\n     }\n  ]\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/ParametricaFacadeREST.java",
    "groupTitle": "Parametrica"
  },
  {
    "type": "get",
    "url": "/puestoscontrol/:id",
    "title": "Ver un Componente local según su id",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/puestoscontrol/2 -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetPuestoControl",
    "group": "PuestoControl",
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
            "description": "<p>Identificador único del PuestoControl</p>"
          }
        ]
      }
    },
    "description": "<p>Método para obtener un Puesto de Control existente según el id remitido. Obtiene el puesto de control mediante el método local find(Long id)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.PuestoControl",
            "optional": false,
            "field": "PuestoControl",
            "description": "<p>Detalle del puesto de control registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"2\",\n     \"departamento\": \"SUSQUES\",\n     \"descripcion\": \"Puesto de prueba\",\n     \"habilitado\": \"true\",\n     \"idlocgt\": \"9967\",\n     \"localidad\": \"MINA PROVIDENCIA\",\n     \"nombre\": \"Segundo\",\n     \"provincia\": \"JUJUY\",\n     \"altura\": \"Km 27\",\n     \"ruta\": \"128\"\n}",
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
            "field": "PuestoControlNotFound",
            "description": "<p>No existe Puesto de control registrado con ese id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay Puesto de control registrado con el id recibido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/PuestoControlFacadeREST.java",
    "groupTitle": "PuestoControl"
  },
  {
    "type": "get",
    "url": "/puestoscontrol",
    "title": "Ver todas los Puestos de control",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/puestoscontrol -H \"authorization: xXyYvWzZ\"",
        "type": "curl"
      }
    ],
    "version": "1.0.0",
    "name": "GetPuestosControl",
    "group": "PuestoControl",
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
    "description": "<p>Método para obtener un listado de los Puestos de control existentes. Obtiene los Puestos de control mediante el método local findAll()</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.PuestoControl",
            "optional": false,
            "field": "PuestoControl",
            "description": "<p>Listado con todas los puestos de control registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n  \"puestosControl\": [\n     {\"id\": \"1\",\n     \"departamento\": \"COMUNA 1\",\n     \"descripcion\": \"Puesto de prueba\",\n     \"habilitado\": \"true\",\n     \"idlocgt\": \"10809\",\n     \"localidad\": \"RETIRO\",\n     \"nombre\": \"Puesto 1\",\n     \"provincia\": \"CIUDAD AUTONOMA DE BUENOS AIRES\",\n     \"altura\": \"Km 1\",\n     \"ruta\": \"1\"},\n     {\"id\": \"2\",\n     \"departamento\": \"SUSQUES\",\n     \"descripcion\": \"Puesto de prueba\",\n     \"habilitado\": \"true\",\n     \"idlocgt\": \"9967\",\n     \"localidad\": \"MINA PROVIDENCIA\",\n     \"nombre\": \"Segundo\",\n     \"provincia\": \"JUJUY\",\n     \"altura\": \"Km 27\",\n     \"ruta\": \"128\"}\n  ]\n}",
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
            "field": "PuestosConrolNotFound",
            "description": "<p>No existen puestos de control registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de error:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No hay puestos de control registrados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/PuestoControlFacadeREST.java",
    "groupTitle": "PuestoControl"
  },
  {
    "type": "get",
    "url": "/tiposparam/:id",
    "title": "Ver un TipoParam",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/tiposparam/2 -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.TipoParam",
            "optional": false,
            "field": "TipoParam",
            "description": "<p>Detalle del tipo de paramétrica registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\n     \"id\": \"2\",\n     \"habilitado\": \"true\",\n     \"nombre\": \"EST_GUIAS\",\n }\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/TipoParamFacadeREST.java",
    "groupTitle": "TipoParam"
  },
  {
    "type": "get",
    "url": "/tiposparam",
    "title": "Ver todos los tipos de paramétricas",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/tiposparam -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.TipoParam",
            "optional": false,
            "field": "TipoParam",
            "description": "<p>Listado con todas los tipos de paramétricas registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n {\"tipoParams\": [\n     {\"id\": \"2\",\n     \"habilitado\": \"true\",\n     \"nombre\": \"EST_GUIAS\"},\n     {\"id\": \"3\",\n     \"nombre\": \"PARAM_CONTROL\"}\n ]\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/TipoParamFacadeREST.java",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/UsuarioApiResource.java",
    "groupTitle": "UsuarioApi"
  },
  {
    "type": "get",
    "url": "/usuarios/:id",
    "title": "Ver un Usuario",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/usuarios/2 -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Usuario",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Detalle del usuario registrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": \"2\",\n     \"fechaalta\": \"2017-06-12 14:31:39.84\",\n     \"fechaultimologin\": \"2017-08-15 16:20:25.212\",\n     \"habilitado\": \"true\",\n     \"login\": \"21633987\",\n     \"nombrecompleto\": \"USUARIO VERIFICADOR\",\n     \"puesto\": {\n             \"id\": \"2\",\n             \"departamento\": \"SUSQUES\",\n             \"descripcion\": \"Puesto de prueba\",\n             \"habilitado\": \"true\",\n             \"idlocgt\": \"9967\",\n             \"localidad\": \"MINA PROVIDENCIA\",\n             \"nombre\": \"Segundo\",\n             \"provincia\": \"JUJUY\",\n             \"altura\": \"Km 27\",\n             \"ruta\": \"128\"\n         },\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ADMINISTRADOR\",\n         \"habilitado\": \"true\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         },\n     \"primeravez\": \"false\",\n     \"correoelectronico\": \"usario2@correo.com\"\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "Ver todos los usuarios",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X GET -d [PATH_SERVER]/ctrlVerif/rest/usuarios -H \"authorization: xXyYvWzZ\"",
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
            "type": "ar.gob.ambiente.sacvefor.servicios.ctrlverif.Usuario",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Listado con todas los usuarios registrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta exitosa:",
          "content": "HTTP/1.1 200 OK\n{\n \"Usuarios\": [\n     {\"id\": \"2\",\n     \"fechaalta\": \"2017-06-12 14:31:39.84\",\n     \"fechaultimologin\": \"2017-08-15 16:20:25.212\",\n     \"habilitado\": \"true\",\n     \"login\": \"21633987\",\n     \"nombrecompleto\": \"USUARIO VERIFICADOR\",\n     \"puesto\": {\n             \"id\": \"2\",\n             \"departamento\": \"SUSQUES\",\n             \"descripcion\": \"Puesto de prueba\",\n             \"habilitado\": \"true\",\n             \"idlocgt\": \"9967\",\n             \"localidad\": \"MINA PROVIDENCIA\",\n             \"nombre\": \"Segundo\",\n             \"provincia\": \"JUJUY\",\n             \"altura\": \"Km 27\",\n             \"ruta\": \"128\"\n         },\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ADMINISTRADOR\",\n         \"habilitado\": \"true\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         },\n     \"primeravez\": \"false\",\n     \"correoelectronico\": \"usario2@correo.com\"},\n     {\"id\": \"1\",\n     \"fechaalta\": \"2017-08-07 14:31:39.84\",\n     \"fechaultimologin\": \"2017-12-01 11:50:02.785\",\n     \"habilitado\": \"true\",\n     \"login\": \"14011378\",\n     \"nombrecompleto\": \"Usuario Controlador\",\n     \"puesto\": {\n             \"id\": \"1\",\n             \"departamento\": \"COMUNA 1\",\n             \"descripcion\": \"Puesto de prueba\",\n             \"habilitado\": \"true\",\n             \"idlocgt\": \"10809\",\n             \"localidad\": \"RETIRO\",\n             \"nombre\": \"Puesto 1\",\n             \"provincia\": \"CIUDAD AUTONOMA DE BUENOS AIRES\",\n             \"altura\": \"Km 1\",\n             \"ruta\": \"1\"\n         },\n     \"rol\":{\n         \"id\": \"1\",\n         \"nombre\": \"ADMINISTRADOR\",\n         \"habilitado\": \"true\",\n         \"tipo\": {\n             \"id\": \"1\",\n             \"nombre\": \"ROL_USUARIOS\"\n             }\n         },\n     \"primeravez\": \"false\",\n     \"correoelectronico\": \"usario1@correo.com\"}\n     ]\n}",
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
    "filename": "src/main/java/ar/gob/ambiente/sacvefor/controlverificacion/service/UsuarioFacadeREST.java",
    "groupTitle": "Usuario"
  }
] });
