
db.createCollection( 'invoice', {validator: {$jsonSchema: {bsonType: 'object',title:'invoice',required: [         'date',          'sales_employee',          'import',          'customer'],properties: {date: {bsonType: 'date'},sales_employee: {bsonType: 'object',
title:'object',properties: {name: {bsonType: 'string'}}},import: {bsonType: 'decimal'},customer: {bsonType: 'objectId'}}         }      }});  