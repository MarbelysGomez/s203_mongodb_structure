
db.createCollection( 'store', {validator: {$jsonSchema: {bsonType: 'object',title:'store',required: [         'address',          'postal_code',          'location',          'employee'],properties: {address: {bsonType: 'string'},postal_code: {bsonType: 'string'},location: {bsonType: 'object',
title:'object',required: [         'name',          'province'],properties: {name: {bsonType: 'string'},province: {bsonType: 'object',
title:'object',required: [         'name'],properties: {name: {bsonType: 'string'}}}}},employee: {bsonType: 'object',
title:'object',required: [         'name',          'last_name',          'nif',          'phone_number',          'type'],properties: {name: {bsonType: 'string'},last_name: {bsonType: 'string'},nif: {bsonType: 'string'},phone_number: {bsonType: 'int'},type: {bsonType: 'string'}}}}         }      }});  