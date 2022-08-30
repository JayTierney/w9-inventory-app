import { db } from './db'
import { DataTypes } from 'sequelize'
import { items } from '../seedData'

//creating the model
const Item = db.define('Item', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    catagory: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {timestamps: false})

//mapping through the array

async function seedItem () {
    for (let item of items){
        await Item.create(item)
    }
}

module.exports = { Item, seedItem } 