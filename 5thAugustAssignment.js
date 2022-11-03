let movies={
    name:"spidermen",
    type:"action",
    theater:{
        imax:"chainai",
        pvr:"mumbai"
    },
    collection:"100cr",
    hit:function()
    {
        return `${movies.name} is hit`;
    },
    flop:function()
    {
        return `${movies.name} is fail`
    }
}
const {name,type,theater,collection,hit,flop}=movies;
console.log(theater);
const {imax,pvr}=theater;
console.log(imax);
console.log("theater location are "+imax +' and ' +pvr);
// for(var key in movies)
// {
//     console.log(movies[key]);
// }