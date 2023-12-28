const product = [
{ 
	id: 0,
	image: 'f&b/popcorn2.jpg',
	title: 'Signature Popcorn',
	price: 17,
},
{
	id: 1,
	image: 'f&b/popcorn3.jpg',
	title: 'Royale Popcorn',
	price: 21,
},
{
	id: 2,
	image: 'f&b/popcorn4.jpg',
	title: 'Golden Horn',
	price: 14,
},
{
	id: 3,
	image: 'f&b/hotfood1.jpg',
	title: 'Big Dipper',
	price: 14,
},
{
	id: 4,
	image: 'f&b/hotfood2.jpg',
	title: 'Hot Minis',
	price: 17,
},
{
	id: 5,
	image: 'f&b/hotfood3.jpg',
	title: 'Chicken Nuggets',
	price: 21,
},
{
	id: 6,
	image: 'f&b/popcorncombos1.jpg',
	title: 'Signature Popcorn Combo',
	price: 17,
},
{
	id: 7,
	image: 'f&b/popcorncombos2.jpg',
	title: 'Royale Popcorn Combo',
	price: 21,
},
{
	id: 8,
	image: 'f&b/popcorncombos3.jpg',
	title: 'Golden Horn Combo',
	price: 14,
},
{
	id: 9,
	image: 'f&b/hotfoodcombos2.jpg',
	title: 'Big Dipper Combo',
	price: 14,
},
{
	id: 10,
	image: 'f&b/hotfoodcombos3.jpg',
	title: 'Hot Minis Combo',
	price: 17,
},
{
	id: 11,
	image: 'f&b/hotfoodcombos4.jpg',
	title: 'Chicken Nugs Combo',
	price: 21,
},
{
	id: 12,
	image: 'f&b/soda1.jpg',
	title: 'Pepsi Black',
	price: 6,
},
{
	id: 13,
	image: 'f&b/soda2.jpg',
	title: 'Mountain Dew',
	price: 6,
},
{
	id: 14,
	image: 'f&b/soda4.jpg',
	title: 'Sarsaparilla',
	price: 6,
},
{
	id: 15,
	image: 'f&b/soda3.jpg',
	title: 'Mirinda Strawberry',
	price: 6,
}
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
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
        <h3>RM ${price}.00</h3>`+
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
        document.getElementById("total").innerHTML = "RM "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RM "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>RM ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

/* POPUP TO BUY F&B OR CHECKOUT */
let popup = document.getElementById("popup");

function openPopup()
{
    popup.classList.add("open-popup");
}

function closePopup()
{
    popup.classList.remove("open-popup");
}

		