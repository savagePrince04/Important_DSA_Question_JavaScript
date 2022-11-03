var cars =[{
    model:"bmw1",price:5000000},
    {
        model:"bmw2",price:600000
    },
];
for(var car in cars)
{
  console.log(`${car.model} ${car.price} `);
}