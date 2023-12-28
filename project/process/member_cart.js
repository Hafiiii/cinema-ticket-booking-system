// JavaScript code to HTML 
$(document).ready(function() {
	var productItem = [
		{
			productName: "AVATAR: THE WAY OF WATER ",
			price: "16",
			photo: "avatar.jpg"
		},
		{
			productName: "CONNECT",
			price: "14",
			photo: "connect.jpg"
		},
		{
			productName: "ESCAPE",
			price: "13",
			photo: "escape.jpg"
		},
		{
			productName: "MUNDEY KAMPUNG DEY",
			price: "16",
			photo: "kampung.jpg"
		},
		{
			productName: "KKN DI DESA PENARI: LUWIH DONO, LUWIH MEDENI",
			price: "20",
			photo: "kkn.jpg"
		},
		{
			productName: "CHAPTER 1: MAENAK REBORN",
			price: "15",
			photo: "maenak_reborn.jpg"
		},
		{
			productName: "MECHAMATO MOVIE",
			price: "19",
			photo: "mechamato.jpg"
		},
		{
			productName: "PUSS IN BOOTS: THE LAST WISH",
			price: "18",
			photo: "puss_in_boots.jpg"
		},
		{
			productName: "CIRKUS",
			price: "13",
			photo: "rohit_shettys.jpg"
		},
		{
			productName: "THAT TIME I GOT REINCARNATED AS A SLIME THE MOVIE: SCARLET BOND",
			price: "17",
			photo: "slime.jpg"
		},
		{
			productName: "VIOLENT NIGHT",
			price: "15",
			photo: "violent_night.jpg"
		},
		{
			productName: "ZAARA",
			price: "13",
			photo: "zaara.jpg"
		}
	];
	showProductGallery(productItem);
	showCartTable();
});

function addToCart(element)
{
	var productParent = $(element).closest('div.product-item');
	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();
	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);
	var cartArray = new Array();

	// If shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

function emptyCart()
{
	if (sessionStorage.getItem('shopping-cart')) {
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}

function removeCartItem(index)
{
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

function showCartTable()
{
	var cartRowHTML = "";
	var itemAmount = 0;
	var grandTotal = 0;
	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemAmount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>RM" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>RM" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}

	$('#cart-table-body').html(cartRowHTML);
	$('#itemAmount').text(itemAmount);
	$('#totalAmount').text("RM" + grandTotal.toFixed(2));
}


function showProductGallery(product)
{
	var productHTML = "";
	
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img src="movies_poster/' + item.photo + '">'+
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">RM<span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
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