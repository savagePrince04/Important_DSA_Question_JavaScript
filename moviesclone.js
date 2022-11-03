const movie = [{
    name: 'Spiderman',
    genre: 'action',
    collection: '100cr',
    hit: function () {
    return `${this.name}, is hit`;
    },
    flop: function () {
    return `${this.name}, is flop`;
    },
    },
    {
    name: 'Batman',
    genre: 'action',
    collection: '120cr',
    hit: function () {
    return `${this.name}, is hit`;
    },
    flop: function () {
    return `${this.name}, is flop`;
},
},]
const cloneMovie = Object.assign({}, movie);
for ([key, value] of Object.entries(cloneMovie)){
console.log(`Movie ${value.hit()}`)
}