
db.createCollection( 'product', {validator: {$jsonSchema: {bsonType: 'object',title:'product',required: [         'brand_name',          'right_graduation',          'left_graduation',          'frame_type',          'frame_color',          'crystal_color',          'price',          'suppliers',          'invoice'],properties: {brand_name: {bsonType: 'string'},right_graduation: {bsonType: 'decimal'},left_graduation: {bsonType: 'decimal'},frame_type: {enum: , description:'enum {floating, paste, metallic}',},frame_color: {bsonType: 'string'},crystal_color: {bsonType: 'string'},price: {bsonType: 'decimal'},suppliers: {bsonType: 'objectId'},invoice: {bsonType: 'objectId'}}         }      }});  