let btns = document.querySelectorAll("button")
let items = [
	{
		name : "Pizza",
		price : 40,
		tag : "pizza",
		Item : 1,
		inCart: 0
	},
	{
		name : "Burger",
		price : 60,
		tag : "burger",
		Item : 2,
		inCart: 0
	},
	{
		name : "Shawarma",
		price : 30,
		tag : "shawarma",
		Item : 3,
		inCart: 0
	},
	{
		name : "Chicken Rolls",
		price : 50,
		Item : 4,
		inCart: 0
	},
	{
		name : "Thumbs Up",
		price : 60,
		tag : "thumbsup",
		Item : 5,
		inCart: 0
	},
	{
		name : "Chilled Drinks",
		price : 45,
		tag : "chilldrink",
		Item : 6,
		inCart: 0
	},
	{
		name : "Fanta Drinks",
		price : 10,
		tag : "fanta",
		Item : 7,
		inCart: 0
	},
	{
		name : "Mojito",
		price : 40,
		tag : "mojito",
		Item : 8,
		inCart: 0
	}
]
for(let i=0; i<btns.length; i++ ){
	btns[i].addEventListener("click", () => {
		let product = localStorage.getItem("cartNumber")
		product = parseInt(product)
		if(product > 10)
		{
			alert("Can't put more items in cart !")
			return false
		}
		setItems(items[i])
		cartNumbers()
		totalCost(items[i])
	})
}
function setItems(product){
	let cartItems = localStorage.getItem("Basket")
	cartItems = JSON.parse(cartItems)
	if(cartItems != null){
		
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		
		cartItems[product.tag].inCart += 1
	} else {
		product.inCart = 1
		cartItems = {
			[product.tag] : product
		}
	}
	localStorage.setItem("Basket", JSON.stringify(cartItems))
}
function cartNumbers(){
	let product = localStorage.getItem("cartNumber")
	product = parseInt(product)
	if(!product){
		localStorage.setItem("cartNumber", 1)
	}
	else{
		localStorage.setItem("cartNumber", product + 1)
		document.querySelector("#inCart").textContent = product + 1
	}
}
function putCart(){
	let product = localStorage.getItem("cartNumber")
	if(product == undefined)
		document.querySelector("#inCart").textContent = "0"
	else
		document.querySelector("#inCart").textContent = product
	
}
function totalCost(product){
	let cost = localStorage.totalCost
	if(cost != null){
		cost = parseInt(cost)
		localStorage.setItem("totalCost", parseInt(product["price"]) + cost)
	}else{
		localStorage.setItem("totalCost", parseInt(product["price"]))
	}
}
putCart()
console.log(JSON.parse(localStorage.Basket))