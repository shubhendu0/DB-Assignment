// This is the Schema for "Product" collection.

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true },
        SKU: { type: String, required: true },
        category_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'product_category', 
            required: true,
        },
        inventory_id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'product_inventory', 
            required: true,
        },
        price: { type: Number, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("product", ProductSchema);

