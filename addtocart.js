const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVPn3toWDXDHNFg_LxrNSCb0887NcKiOL4Q&usqp=CAU',
        title: 'Aashirvaad Aata',
		price: 200,
    },
    {
		id: 1,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UyhZhPNqes6cy2LFAVSLnxQC4WQmptB1rg&usqp=CAU',
		title: 'Ghee',
		price: 550,
	},
	{
		id: 2,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7nbZuCx1H8v4Ipu1pHqwHm_dxDyOsM0sHg&usqp=CAU',
		title: 'Lux Soap',
		price: 30,
	},
	{
		id: 3,
		image: 'https://m.media-amazon.com/images/I/612bVvzKYwL._AC_UF1000,1000_QL80_.jpg',
		title: 'Dettol Handwash',
		price: 110,
	},
	{
		id: 4,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGO2eZ2HKDziGc3eYQtgMOUu4ZL9mVoMB5MN6jvHY_FKh6QhGNbN-E2hoqgF-AL3OGzng&usqp=CAU',
		title: 'MDH Garam Masala',
		price: 70,
	}
];
const categories = [...new Set(product.map((item)=>
    {return item}))];
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00 Rs</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0 +".00 Rs";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00 Rs";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00 Rs</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }    
}