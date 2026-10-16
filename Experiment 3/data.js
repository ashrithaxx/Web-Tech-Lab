const PRODUCTS = [
{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 1999, qty: 12, discount: 20 },
{ id: 2, name: "Smart Watch", category: "Electronics", price: 4499, qty: 0, discount: 15 },
{ id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 1299, qty: 5, discount: 0 },
{ id: 4, name: "USB-C Charger", category: "Electronics", price: 599, qty: 20, discount: 10 },
{	id:	5,	name:	"Cotton T-Shirt", category: "Clothing", price: 499, qty: 30, discount: 0 },	
{	id:	6,	name:	"Denim Jacket", category: "Clothing", price: 2299, qty: 0, discount: 30 },	
{	id:	7,	name:	"Running Shoes", category: "Clothing", price: 1799, qty: 8, discount: 25 },	
{	id:	8,	name:	"Woolen Scarf", category: "Clothing", price: 349, qty: 15, discount: 0 },	
{	id:	9,	name:	"Basmati Rice 5kg", category: "Grocery", price: 649, qty: 25, discount: 10 },	
{ id: 10, name: "Organic Honey", category: "Grocery", price: 299, qty: 0, discount: 0 },
{ id: 11, name: "Green Tea Pack", category: "Grocery", price: 199, qty: 40, discount: 15 },
{ id: 12, name: "Almonds 1kg", category: "Grocery", price: 899, qty: 6, discount: 0 },
];

const CATEGORIES = ["All", "Electronics", "Clothing", "Grocery"];

const PRICE_RANGES = [
{ label: "All Prices", min: 0, max: Infinity },
{ label: "Under ₹500", min: 0, max: 500 },
{ label: "₹500 – ₹2000", min: 500, max: 2000 },
{ label: "Above ₹2000", min: 2000, max: Infinity },
];
