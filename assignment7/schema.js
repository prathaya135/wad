const {Schema,model, Collection}=require('mongoose');

// const schema=new schema;

const collection_1=new Schema({
    name:{
        type: String,
        require: true
    },
    marks: {
        type: Number,
        default: 0
    }
})

module.exports =model('User', collection_1);