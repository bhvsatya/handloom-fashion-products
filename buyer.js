// Mock data for demo purposes (replace with real data from API in production)
let products = [
    { id: 1, name: "Handloom Shawl", price: 50, stock: 10 },
    { id: 2, name: "Handloom Saree", price: 100, stock: 5 },
    { id: 3, name: "Handloom Kurta", price: 40, stock: 20 }
];

let orders = []; // Array to store orders
let feedbacks = []; // Array to store feedbacks

// Function to handle browsing all handloom products
function buyerBrowseProducts() {
    let productHtml = '<h4>Available Products:</h4><ul>';
    products.forEach(product => {
        productHtml += `
            <li>
                ${product.name} - $${product.price} - ${product.stock} in stock
                <button onclick="buyerOrderProduct(${product.id})">Order</button>
            </li>`;
    });
    productHtml += '</ul>';
    document.getElementById('action-content').innerHTML = productHtml; // Use correct ID for dynamic content
}

// Function to order a product
function buyerOrderProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
        orders.push({ productId: product.id, productName: product.name });
        product.stock--; // Decrease stock
        alert(`You have ordered: ${product.name}`);
    } else {
        alert("Product is out of stock.");
    }
}

// Function to track orders
function buyerTrackOrders() {
    let ordersHtml = '<h4>Your Orders:</h4><ul>';
    if (orders.length === 0) {
        ordersHtml += '<li>No orders placed yet.</li>';
    } else {
        orders.forEach(order => {
            ordersHtml += `<li>${order.productName}</li>`;
        });
    }
    ordersHtml += '</ul>';
    document.getElementById('action-content').innerHTML = ordersHtml; // Use correct ID for dynamic content
}

// Function to provide feedback
function buyerProvideFeedback() {
    const buyerFeedback = prompt("Enter your feedback:");

    if (!buyerFeedback) {
        alert("Please provide feedback.");
        return;
    }

    feedbacks.push(buyerFeedback);
    alert("Your feedback has been submitted!");
}

// Function to handle logout
function buyerLogout() {
    // Simulate the logout process
    alert("You have been logged out.");
    window.location.href = 'home.html';  // Redirect to the home page after logout
}
