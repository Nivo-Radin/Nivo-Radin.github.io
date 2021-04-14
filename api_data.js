define({ "api": [
  {
    "type": "GET",
    "url": "/business",
    "title": "Get user business",
    "name": "GetBusiness",
    "group": "Business",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
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
            "field": "id",
            "description": "<p>Business id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Business name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "legal",
            "description": "<p>Is a legal business or not?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationalId",
            "description": "<p>National identity of the Business user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Business mobile, contains country code. +989031231232</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Business email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Business address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Business country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Business province</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Business city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Business currency</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logoImg",
            "description": "<p>Business logo image as base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "telephones",
            "description": "<p>Business telephones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": \"1006-072e4f63f57e47acbe382ec39fd0b537\",\n       \"name\": \"Bizliy\",\n       \"address\": \"somewhere\",\n       \"mobile\": \"+9809035465652\",\n       \"telephones\": [\n           \"22116548\"\n       ],\n       \"email\": \"test@gmail.com\",\n       \"nationalId\": \"001101100\",\n       \"legal\": false,\n       \"country\": \"ایران\",\n       \"province\": \"تهران\",\n       \"city\": \"تهران\",\n       \"currency\": \"تومان\",\n       \"logoImg:\": \"data:image/png;base64...\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/business.controller.ts",
    "groupTitle": "Business",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/business"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/cheque",
    "title": "Create cheque",
    "name": "CreateCheques",
    "group": "Cheque",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Cheque amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Cheque type, ['INCOME', 'EXPENSE']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "due",
            "description": "<p>Cheque due timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "registredAt",
            "description": "<p>Cheque registration timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resourceId",
            "description": "<p>Cheque resource id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chequeNo",
            "description": "<p>Cheque number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankId",
            "description": "<p>Cheque bank id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Cheque status, ['IN_PROGRESS', 'PASSED', 'FAILED', 'SPENT']</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of cheque tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Cheque descriptions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"amount\": 52000000,\n    \"type\": \"INCOME\",\n    \"customerId\": \"1011-59a4b4d9cf554b98aec1d775809d83e7\",\n    \"registeredAt\": 1612211400000,\n    \"due\": 1612221900000,\n    \"resourceId\": \"1008-001\",\n    \"chequeNo\": \"546\",\n    \"bankId\": \"16\",\n    \"status\": \"IN_PROGRESS\",\n    \"description\": \"description for cheque\",\n    \"tags\": [\n    \t\"tag2\",\n    \t\"tag1\"\n    ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/cheque.controller.ts",
    "groupTitle": "Cheque",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/cheque"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/cheque",
    "title": "Get cheques",
    "name": "GetCheques",
    "group": "Cheque",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cheques",
            "description": "<p>List of cheques</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.id",
            "description": "<p>Cheque id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cheques.amount",
            "description": "<p>Cheque amount</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.type",
            "description": "<p>Cheque type, ['INCOME', 'EXPENSE']</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.customerId",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cheques.registredAt",
            "description": "<p>Cheque registration timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.resourceId",
            "description": "<p>Cheque resource id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.chequeNo",
            "description": "<p>Cheque number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.bankId",
            "description": "<p>Cheque bank id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.status",
            "description": "<p>Cheque status, ['IN_PROGRESS', 'PASSED', 'FAILED', 'SPENT']</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "cheques.tags",
            "description": "<p>List of cheque tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "cheques.transactions",
            "description": "<p>List of cheque transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cheques.description",
            "description": "<p>Cheque descriptions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"cheques\": [\n\t\t\t{\n       \"amount\": 52000000,\n       \"type\": \"INCOME\",\n       \"customerId\": \"1011-59a4b4d9cf554b98aec1d775809d83e7\",\n       \"registeredAt\": 1612211400000,\n       \"resourceId\": \"1008-001\",\n       \"chequeNo\": \"546\",\n       \"bankId\": \"16\",\n       \"status\": \"IN_PROGRESS\",\n       \"dueFaIR\": \"1399/11/26\",\n       \"registeredAtFaIR\": \"1399/11/14\",\n       \"transactions\": [\n           {\n               \"id\": \"2bdfe10b399d4a12b16e7bfde3736297\",\n               \"amount\": 150000,\n               \"date\": \"1399/12/06\",\n               \"type\": \"INCOME\"\n           }\n       ],\n\t\t\t\t\"description\": \"description for cheque\",\n\t\t\t\t\"tags\": [\n\t\t\t\t\t\"tag2\",\n\t\t\t\t\t\"tag1\"\n\t\t\t\t]\n\t\t\t},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/cheque.controller.ts",
    "groupTitle": "Cheque",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/cheque"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/customer",
    "title": "Create customer",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Customer name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "legal",
            "description": "<p>Is customer legal or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationalId",
            "description": "<p>Customer national id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "economicId",
            "description": "<p>Customer economicId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationId",
            "description": "<p>Customer business registration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Customer mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of customer tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"test_customer\",\n    \"legal\": true,\n    \"nationalId\": \"123123123123\",\n    \"economicId\": \"3213213343521\",\n    \"registrationId\": \"435132512351234\",\n    \"mobile\": \"+989031231232\",\n    \"email\": \"test@gmail.com\",\n    \"address\": \"somewhere\",\n    \"description\": \"description for customer\",\n    \"tags\": [\n        \"tag2\",\n        \"tag1\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t    \"message\": \"ok\",\n\t    \"customer\": {\n\t        \"_id\": \"1011-3091e7505fdb463b8445536d6b9835c2\",\n\t        \"name\": \"test_customer\",\n\t        \"nationalId\": \"123123123123\",\n\t        \"economicId\": \"3213213343521\",\n\t        \"mobile\": {\n\t            \"country\": \"+98\",\n\t            \"number\": \"9031231232\"\n\t        },\n\t        \"email\": \"test@gmail.com\",\n\t        \"registrationId\": \"435132512351234\",\n\t        \"address\": \"somewhere\",\n\t        \"description\": \"description for customer\",\n\t        \"legal\": true,\n\t        \"tagIds\": [\n\t            \"1014-a3fa8c6946734faa93068934dac2c6fb\",\n\t            \"1014-d38a01f9039d49a4af93fe6b8bd932db\"\n\t        ]\n\t    }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/customer.controller.ts",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/customer"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/customer",
    "title": "Get customers list",
    "name": "GetCustomers",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "customers",
            "description": "<p>List of customers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.id",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.name",
            "description": "<p>Customer name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "customers.legal",
            "description": "<p>Is a legal customer or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.nationalId",
            "description": "<p>National identity of the customer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.economicId",
            "description": "<p>Customer economic id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.registrationId",
            "description": "<p>Customer business registration id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.mobile",
            "description": "<p>Customer mobile, contains country code. +989031231232</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers.description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customers.tags",
            "description": "<p>List of customer tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"customers\": [\n\t\t\t{\n\t\t\t\t\"id\": \"1011-1c71331bc4204227af6145c4da37848d\",\n\t\t\t\t\"name\": \"test_customer\",\n\t\t\t\t\"legal\": true,\n\t\t\t\t\"nationalId\": \"123123123123\",\n\t\t\t\t\"economicId\": \"3213213343521\",\n\t\t\t\t\"mobile\": \"+989031231232\",\n\t\t\t\t\"email\": \"test@gmail.com\",\n\t\t\t\t\"address\": \"somewhere\",\n\t\t\t\t\"description\": \"description for customer\",\n\t\t\t\t\"tags\": [\n\t\t\t\t\t\"tag2\",\n\t\t\t\t\t\"tag1\"\n\t\t\t\t]\n\t\t\t},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/customer.controller.ts",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/customer"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/product",
    "title": "Create product",
    "name": "CreateProduct",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>Is product available for sale or not?</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "barcodes",
            "description": "<p>List of barcodes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Product code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "initialQuantity",
            "description": "<p>Product initial available count</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purchasePrice",
            "description": "<p>Product purchase price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salePrice",
            "description": "<p>Product sale price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tax",
            "description": "<p>Product tax percentage based on year 1396, 1397, 1398, 1399 which municipal is 0.03 and vat is 0.06, total 0.09.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Product image as base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of product tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\": \"test_product\",\n\t\"barcodes\": [\n\t\t\"123\",\n\t\t\"321\"\n\t],\n\t\"initialQuantity\": 12,\n\t\"code\": \"sample_code\",\n\t\"purchasePrice\": 20000,\n\t\"salePrice\": 25000,\n\t\"taxYear\": 1397, // 1396, 1397, 1398, 1399\n\t\"category\": \"sample_category\",\n\t\"image\": \"data:image/png;base64...\",\n\t\"tags\": [\n\t\t\"tag1\",\n\t\t\"tag2\"\n\t],\n\t\"type\": \"PRODUCT\" // SERVICE\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"message\": \"ok\",\n\t\t\"product\": {\n\t\t\t\"_id\": \"1009-6506499e4ffe4700a8227c2cd4defa17\",\n\t\t\t\"barcodes\": [\n\t\t\t\t\"123\",\n\t\t\t\t\"321\"\n\t\t\t],\n\t\t\t\"categoryId\": \"1010-a727123192274fd9812bf06b4b3803ec\",\n\t\t\t\"image\": \"data:image/png;base64...\",\n\t\t\t\"code\": \"sample_code\",\n\t\t\t\"initialQuantity\": 12,\n\t\t\t\"name\": \"test_product\",\n\t\t\t\"purchasePrice\": 20000,\n\t\t\t\"salePrice\": 25000,\n\t\t\t\"tagIds\": [\n\t\t\t\t\"1014-d38a01f9039d49a4af93fe6b8bd932db\",\n\t\t\t\t\"1014-a3fa8c6946734faa93068934dac2c6fb\"\n\t\t\t],\n\t\t\t\"taxId\": \"1004-97standard\",\n\t\t\t\"type\": \"SERVICE\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/product.controller.ts",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/product"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/product",
    "title": "Get product list",
    "name": "GetProduct",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "products.available",
            "description": "<p>Is product available for sale or not?</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products.barcodes",
            "description": "<p>List of barcodes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.code",
            "description": "<p>Product code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.initialQuantity",
            "description": "<p>Product initial available count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.purchasePrice",
            "description": "<p>Product purchase price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.salePrice",
            "description": "<p>Product sale price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.tax",
            "description": "<p>Product tax percentage</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "products.price",
            "description": "<p>Product sale price with additional tax</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.category",
            "description": "<p>Product category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.image",
            "description": "<p>Product image as base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products.tags",
            "description": "<p>List of product tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"products\": [\n\t\t\t{\n\t\t\t\t\"id\": \"1009-4cf696a963fa4a4d82d2a9d123963daa\",\n\t\t\t\t\"name\": \"sample product\",\n\t\t\t\t\"available\": true,\n\t\t\t\t\"barcodes\": [\n\t\t\t\t\t\"barcode1\",\n\t\t\t\t\t\"barcode2\"\n\t\t\t\t],\n\t\t\t\t\"code\": \"sample_code\",\n\t\t\t\t\"initialQuantity\": 5,\n\t\t\t\t\"purchasePrice\": 12000,\n\t\t\t\t\"salePrice\": 32000,\n\t\t\t\t\"tax\": 0.09,\n\t\t\t\t\"price\": 34880,\n\t\t\t\t\"image\": \"data:image/png;base64...\"\n\t\t\t\t\"category\": \"sample_category\",\n\t\t\t\t\"tags\": [\n\t\t\t\t\t\"tag 1\",\n\t\t\t\t\t\"tag 2\"\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/product.controller.ts",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/product"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/purchase-invoice",
    "title": "Create Purchase Invoice",
    "name": "CreatePurchaseInvoice",
    "group": "PurchaseInvoice",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items.id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.discount",
            "description": "<p>Discount of product on the invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.price",
            "description": "<p>Product price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.quantity",
            "description": "<p>Product quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items.taxYear",
            "description": "<p>Product tax year</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "chequeIds",
            "description": "<p>List of related cheques to this invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer related to the invoice, possible to be <code>customer</code> object, as a new customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Customer related to the invoice, if customerId is not available</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.name",
            "description": "<p>Customer name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "customer.legal",
            "description": "<p>Is customer legal or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.nationalId",
            "description": "<p>Customer national id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.economicId",
            "description": "<p>Customer economicId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.registrationId",
            "description": "<p>Customer business registration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.mobile",
            "description": "<p>Customer mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.email",
            "description": "<p>Customer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "customer.tags",
            "description": "<p>List of customer tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Invoice description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "transactionIds",
            "description": "<p>List of related transactions to this invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Invoice date as Unix timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of invoice tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"acceptsOnlinePayment\": true,\n    \"items\": [\n        {\n            \"discount\": 500,\n            \"price\": 25000,\n            \"quantity\": 3,\n            \"id\": \"1009-1ef10a242cde40afb16883db0aeeb024\",\n            \"taxYear\": \"1397\"\n        }\n    ],\n    \"chequeIds\": [],\n    \"customerId\": \"1011-5bf64e86dbc44342a603a5108828e62e\",\n    \"description\": \"asd\",\n    \"paidAmount\": 0,\n    \"tagIds\": [\n        \"1014-d38a01f9039d49a4af93fe6b8bd932db\"\n    ],\n    \"timestamp\": 1612038600000,\n    \"transactionIds\": [\n        \"1013-acf8353e1cf74e16aee108047e595344\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"message\": \"ok\",\n\t\t\"id\": \"1009-6506499e4ffe4700a8227c2cd4defa17\",\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/invoice.controller.ts",
    "groupTitle": "PurchaseInvoice",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/purchase-invoice"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/purchase-invoice",
    "title": "Get purchase invoices",
    "name": "GetPurchaseInvoices",
    "group": "PurchaseInvoice",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"invoices\": [\n        {\n            \"acceptsOnlinePayment\": true,\n            \"chequeIds\": [],\n            \"code\": \"NSI-1003\",\n            \"createdAt\": 1613216820350,\n            \"dateEnUS\": \"2021/01/31\",\n            \"dateFaIR\": \"1399/11/12\",\n            \"description\": \"asd\",\n            \"format\": \"OFFICIAL\",\n            \"paidAmount\": 0,\n            \"paymentGatewayIds\": [],\n            \"paymentStatus\": \"COMPLETED\",\n            \"percentOff\": 2,\n            \"readOnly\": false,\n            \"scheme\": 4,\n            \"signatureVisibility\": true,\n            \"timestamp\": 1612038600000,\n            \"type\": \"NORMAL\",\n            \"updatedAt\": 1614172401347,\n            \"_id\": \"1012-18996fab88d54aeda0e1d2b640806b33\",\n            \"transactions\": [\n                {\n                    \"amount\": 150000,\n                    \"date\": \"1399/12/06\",\n                    \"type\": \"INCOME\"\n                }\n            ],\n            \"items\": [\n                {\n                    \"id\": \"1009-1ef10a242cde40afb16883db0aeeb024\",\n                    \"name\": \"sample_product\",\n                    \"barcodes\": [\n                        \"123\",\n                        \"321\"\n                    ],\n                    \"code\": \"sample_code\",\n                    \"image\": \"data:image/jpeg;base64...\",\n                    \"price\": 27250,\n                    \"tax\": 0.09,\n                    \"type\": \"SERVICE\",\n                    \"category\": \"sample_category\"\n                }\n            ],\n            \"customer\": \"sample customer\"\n        },\n\t  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/invoice.controller.ts",
    "groupTitle": "PurchaseInvoice",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/purchase-invoice"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/sale-invoice",
    "title": "Create Sale Invoice",
    "name": "CreateSaleInvoice",
    "group": "SaleInvoice",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>List of products</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items.id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.discount",
            "description": "<p>Discount of product on the invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.price",
            "description": "<p>Product price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "items.quantity",
            "description": "<p>Product quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items.taxYear",
            "description": "<p>Product tax year</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "acceptsOnlinePayment",
            "description": "<p>Does invoice support online payment?</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "chequeIds",
            "description": "<p>List of related cheques to this invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer related to the invoice, possible to be <code>customer</code> object, as a new customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Customer related to the invoice, if customerId is not available</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.name",
            "description": "<p>Customer name *</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "customer.legal",
            "description": "<p>Is customer legal or not? حقیقی یا حقوقی</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.nationalId",
            "description": "<p>Customer national id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.economicId",
            "description": "<p>Customer economicId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.registrationId",
            "description": "<p>Customer business registration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.mobile",
            "description": "<p>Customer mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.email",
            "description": "<p>Customer email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.address",
            "description": "<p>Customer address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer.description",
            "description": "<p>Customer description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "customer.tags",
            "description": "<p>List of customer tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Invoice description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Invoice format,  ['INFORMAL', 'OFFICIAL'], default is OFFICIAL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "paidAmount",
            "description": "<p>Invoice paid amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "transactionIds",
            "description": "<p>List of related transactions to this invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Invoice date as Unix timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Invoice type ['DRAFT', 'NORMAL'], default is NORMAL</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of invoice tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"acceptsOnlinePayment\": true,\n    \"items\": [\n        {\n            \"discount\": 500,\n            \"price\": 25000,\n            \"quantity\": 3,\n            \"id\": \"1009-1ef10a242cde40afb16883db0aeeb024\",\n            \"taxYear\": \"1397\"\n        }\n    ],\n    \"chequeIds\": [],\n    \"customerId\": \"1011-5bf64e86dbc44342a603a5108828e62e\",\n    \"description\": \"asd\",\n    \"format\": \"OFFICIAL\",\n    \"paidAmount\": 0,\n    \"paymentStatus\": \"COMPLETED\",\n    \"percentOff\": 2,\n    \"readOnly\": false,\n    \"signatureVisibility\": true,\n    \"tagIds\": [\n        \"1014-d38a01f9039d49a4af93fe6b8bd932db\"\n    ],\n    \"timestamp\": 1612038600000,\n    \"transactionIds\": [\n        \"1013-acf8353e1cf74e16aee108047e595344\"\n    ],\n    \"type\": \"NORMAL\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"message\": \"ok\",\n\t\t\"id\": \"1009-6506499e4ffe4700a8227c2cd4defa17\",\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/invoice.controller.ts",
    "groupTitle": "SaleInvoice",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/sale-invoice"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/sale-invoice",
    "title": "Get sale invoices",
    "name": "GetSaleInvoices",
    "group": "SaleInvoice",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"invoices\": [\n        {\n            \"acceptsOnlinePayment\": true,\n            \"chequeIds\": [],\n            \"code\": \"NSI-1003\",\n            \"createdAt\": 1613216820350,\n            \"dateEnUS\": \"2021/01/31\",\n            \"dateFaIR\": \"1399/11/12\",\n            \"description\": \"asd\",\n            \"format\": \"OFFICIAL\",\n            \"paidAmount\": 0,\n            \"paymentGatewayIds\": [],\n            \"paymentStatus\": \"COMPLETED\",\n            \"percentOff\": 2,\n            \"readOnly\": false,\n            \"scheme\": 4,\n            \"signatureVisibility\": true,\n            \"timestamp\": 1612038600000,\n            \"type\": \"NORMAL\",\n            \"updatedAt\": 1614172401347,\n            \"_id\": \"1012-18996fab88d54aeda0e1d2b640806b33\",\n            \"transactions\": [\n                {\n                    \"amount\": 150000,\n                    \"date\": \"1399/12/06\",\n                    \"type\": \"INCOME\"\n                }\n            ],\n            \"items\": [\n                {\n                    \"id\": \"1009-1ef10a242cde40afb16883db0aeeb024\",\n                    \"name\": \"sample_product\",\n                    \"barcodes\": [\n                        \"123\",\n                        \"321\"\n                    ],\n                    \"code\": \"sample_code\",\n                    \"image\": \"data:image/jpeg;base64...\",\n                    \"price\": 27250,\n                    \"tax\": 0.09,\n                    \"type\": \"SERVICE\",\n                    \"category\": \"sample_category\"\n                }\n            ],\n            \"customer\": \"sample customer\"\n        },\n\t  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/invoice.controller.ts",
    "groupTitle": "SaleInvoice",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/sale-invoice"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/transaction",
    "title": "Create Transaction",
    "name": "CreateTransaction",
    "group": "Transaction",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<ul> <li>Transaction amount</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reasonId",
            "description": "<p>Reason of transaction ['PURCHASE', 'SALE'], default is PURCHASE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>Transaction type ['INCOME', 'EXPENSE', 'TRANSFER']</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Invoice date as Unix timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of invoice tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customerId\": \"1011-5bf64e86dbc44342a603a5108828e62e\",\n    \"description\": \"sample_description\",\n    \"reasonId\": \"SALE\",\n    \"type\": \"INCOME\",\n    \"amount\": 250000,\n    \"tagIds\": [\n        \"1014-d38a01f9039d49a4af93fe6b8bd932db\"\n    ],\n    \"timestamp\": 1612038600000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t{\n\t\t\"message\": \"ok\",\n\t\t\"id\": \"1009-6506499e4ffe4700a8227c2cd4defa17\",\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/transaction.controller.ts",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/transaction"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/transaction",
    "title": "Get Transactions",
    "name": "GetTransaction",
    "group": "Transaction",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api-token",
            "description": "<p>header, body or query param *</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"transactions\": [\n        {\n            \"_id\": \"1013-03d4dd5703a54ab68965a1e61b100c19\",\n            \"amount\": 12121212,\n            \"costsFee\": 0,\n            \"createdAt\": 1614414192546,\n            \"dateEnUS\": \"2021/02/04\",\n            \"dateFaIR\": \"1399/11/16\",\n            \"description\": \"\",\n            \"reasonId\": \"\",\n            \"timestamp\": 1612384200000,\n            \"type\": \"INCOME\",\n            \"updatedAt\": 1614414192546,\n            \"customer\": {\n                \"id\": \"1011-da4306b79ef0489b8fe50c0793fc4e68\",\n                \"name\": \"sadf\",\n                \"legal\": false,\n                \"nationalId\": \"\",\n                \"economicId\": \"\",\n                \"registrationId\": \"\",\n                \"mobile\": \"\",\n                \"email\": \"\",\n                \"address\": \"\",\n                \"description\": \"\"\n            },\n            \"tags\": [\n                \"t2\",\n                \"t1\"\n            ]\n        },\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/transaction.controller.ts",
    "groupTitle": "Transaction",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/transaction"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/users/login",
    "title": "Login user",
    "name": "LoginUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone number *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token which have been sent to the user via SMS for authentication *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installationId",
            "description": "<p>Generated UUID on the client *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Client device type, e.g. web *</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceName",
            "description": "<p>Client device name, e.g. chrome;chrome-67</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Client app version</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"country\": \"+98\",\n    \"phone\": \"9031212123\",\n    \"token\": \"1354\",\n    \"installationId\": \"c3e4fec5730849b592d184e14a569a4a\",\n    \"deviceType\": \"web\",\n    \"version\": \"0.0.1\",\n    \"deviceName\": \"chrome;chrome-67\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": {\n        \"user\": {\n            \"entityType\": \"user\",\n            \"username\": \"4a1f0e363b7f4ab5a69c146e5421c3f6\",\n            \"phone\": \"9031212123\",\n            \"initialized\": true,\n            \"createdAt\": 1604596057690,\n            \"updatedAt\": 1614877730240\n        },\n        \"profile\": {\n            \"_id\": \"0003-1d123aeb5e1f4c56935df04da01033a2\",\n            \"name\": \"\",\n            \"createdAt\": 1604596073193,\n            \"updatedAt\": 1604596073193\n        },\n        \"installation\": {\n            \"_id\": \"0002-3f6bac95cd564ad8be97208685c428fe\",\n            \"entityType\": \"installation\",\n            \"installationId\": \"c3e4fec5730849b592d184e14a569a4a\",\n            \"owner\": \"4a1f0e363b7f4ab5a69c146e5421c3f6\",\n            \"sessionId\": \"15d817ab478d684ab3c94ace4ce130037d62c2ca\",\n            \"deviceType\": \"WEB\",\n            \"deviceName\": \"chrome;chrome-67\",\n            \"cookieName\": \"SyncGatewaySession\",\n            \"expiresAt\": \"2080-04-05T22:44:49.137465705Z\",\n            \"channel\": [\n                \"admin+user+installations\",\n                \"4a1f0e363b7f4ab5a69c146e5421c3f6\"\n            ],\n            \"version\": \"0.0.1\",\n            \"createdAt\": 1614870640718,\n            \"updatedAt\": 1614870640718\n        },\n        \"businesses\": {\n            \"_id\": \"1006-2bdfe10b399d4a12b16e7bfde3736297\",\n            \"createdAt\": 1604596105725,\n            \"updatedAt\": 1614595185761,\n            \"name\": \"توسعه‌دهنده نیوو\",\n            \"legal\": false,\n            \"telephones\": [],\n            \"logoImg\": \"data:image/png;base64\"\n            \"currencyId\": \"1005-TOMAN\",\n            \"widgets\": [],\n            \"pin\": \"\",\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/users/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/users/register",
    "title": "Register user",
    "name": "RegisterUSer",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone number *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"phone\": \"9031212123\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": {\n      \"user\": {\n          \"_id\": \"0001-4a1f0e363b7f4ab5a69c146e5421c3f6\",\n          \"_rev\": \"253-c28c008ed3942f615b43461f4b09fba6\",\n          \"entityType\": \"user\",\n          \"username\": \"4a1f0e363b7f4ab5a69c146e5421c3f6\",\n          \"phone\": \"9031212123\",\n          \"initialized\": true,\n          \"createdAt\": 1604596057690,\n          \"updatedAt\": 1614877710710\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/controller/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://bfm.nivoapp.com/api/v1/users/register"
      }
    ]
  }
] });
