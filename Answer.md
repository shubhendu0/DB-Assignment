Answer 1.  Here we are storing references to documents in other collection. In the given diagram, the 'category_id' field from 'product' 
           is making a reference to 'id' field from 'product_category' collection, or vice-versa. Thus establishing a mutual relationship 
           between both the collections. 


Answer 2.  When using Nodejs and MongoDb we have to make sure that while creating Schemas for "Product" collection we have to make sure 
           that the field "category_id" has specified the datatype of that particular field and reference to other collection.
           
           Example :        const ProductSchema = new mongoose.Schema(
                              {
                                  category_id: { 
                                      type: mongoose.Schema.Types.ObjectId, 
                                      ref: 'product_category', 
                                      required: true,
                                  },                                 
                                  name: { type: String, required: true },
                                  desc: { type: String, required: true },                              
                              }
                            )
