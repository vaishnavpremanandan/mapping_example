export default function Product(){

    const products=[
        {id:1,name:"laptop",price:500000},
         {id:2,name:"desktop",price:80000},
         {id:4,name:"earpod",price:50000},
         {id:5,name:"tv",price:50000},
         {id:6,name:"grinder",price:50000},
         {id:7,name:"mixer",price:50000},
         {id:8,name:"iphone",price:50000},

                    ];
    const productList = products.map((product)=>
    (
        <h3 key={product.id}>
        {product.name}:${product.price}
        </h3>
     ));
    return <div>{productList}</div>

}