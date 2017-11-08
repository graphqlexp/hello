var {graphql,buildSchema} = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String,
        halow:String
    }
`);
var root = {hello:()=>'Hello world',halow:()=>'Halow world'}
graphql(schema,'{hello}',root).then((response)=>{
    console.log(response);
})
graphql(schema,'{halow}',root).then((response)=>{
    console.log(response);
})
