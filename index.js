 
const express = require('express')
const app = express()

const headphonePosts = [
  {
  category: "Headphones",
    items: [
    {
      brandName: "Sony",
      yearCreated: 2023,
      description: "Sony WH-1000XM5 noise-canceling headphones with premium sound quality and long battery life.",
      condition: "New",
      path: "/item/0",
      forSale: true,
      marketPrice: 296.99,
      imageUrl: "https://m.media-amazon.com/images/I/41M7sHrx90L._AC_UF894,1000_QL80_.jpg"
    },
    {
      brandName: "Bose",
      yearCreated: 2022,
      description: "Bose QuietComfort 45 with industry-leading noise cancellation and comfortable design.",
      condition: "New",
      path: "/item/1",
      forSale: true,
      marketPrice: 329.99,
      imageUrl: "https://m.media-amazon.com/images/I/513SArZRYRL.jpg"
    },
    {
      brandName: "Apple",
      yearCreated: 2021,
      description: "Apple AirPods Max with high-fidelity audio and active noise cancellation.",
      condition: "Used - Like New",
      path: "/item/2",
      forSale: true,
      marketPrice: 549.00,
      imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-blue_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492894477"
    },
    {
      brandName: "Beats",
      yearCreated: 2019,
      description: "Beats Studio3 Wireless headphones with pure adaptive noise canceling.",
      condition: "Used - Fair",
      path: "/item/3",
      forSale: false,
      marketPrice: 248.37,
      imageUrl: "https://m.media-amazon.com/images/I/61akJzywmPL._AC_UF894,1000_QL80_.jpg"
    },
    {
      brandName: "JBL",
      yearCreated: 2023,
      description: "JBL Tour One wireless headphones with adaptive noise canceling.",
      condition: "New",
      path: "/item/4",
      forSale: true,
      marketPrice: 104.99,
      imageUrl: "https://m.media-amazon.com/images/I/61d4aWYnnBL.jpg"
    },
    {
      brandName: "Skullcandy",
      yearCreated: 2023,
      description: "Skullcandy Crusher Evo Wireless Headphones with adjustable sensory bass and long battery life.",
      condition: "New",
      path: "/item/5",
      forSale: true,
      marketPrice: 129.95,
      imageUrl: "https://m.media-amazon.com/images/I/71I0lybSq+L.jpg"
    }
  ]
}
]

  
app.set('view engine', 'ejs')


app.use((req, res, next) => {
  console.log(req.method + "/" + req.path)
  next()
})

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})   

app.get("/item/:id", (req, res) => {
  res.render("category.ejs", Headphones[0]);
});


app.get("/brand/:id",(req, res)=>{ 
  const itemId = req.params.id;
  const item = inventory
  res.render("product.ejs",Headphones[0]);
  
  
  })



























app.listen(3000, () => {
  console.log("Server running")
})