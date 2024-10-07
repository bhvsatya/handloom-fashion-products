// Mock data for demo purposes (replace with real data from API in production)
let artisanProducts = [
    { id: 1, name: "Handloom Shawl", price: 50, stock: 10 },
    { id: 2, name: "Handloom Saree", price: 100, stock: 5 },
    { id: 3, name: "Handloom Kurta", price: 40, stock: 20 }
];

let artisanFeedbacks = []; // Array to store buyer feedbacks

// Function to handle listing all handloom products
function artisanListProducts() {
    let productHtml = '<h4>Available Products:</h4><ul>';
    artisanProducts.forEach(product => {
        productHtml += `
            <li>
                ${product.name} - $${product.price} - ${product.stock} in stock
                <button onclick="artisanUpdateProduct(${product.id})">Update Inventory</button>
            </li>`;
    });
    productHtml += '</ul>';
    document.getElementById('action-content').innerHTML = productHtml; // Use correct ID for dynamic content
}

// Function to add a new product
function artisanAddProduct() {
    const productName = prompt("Enter product name:");
    const productPrice = prompt("Enter product price:");
    const productStock = prompt("Enter product stock:");

    if (!productName || isNaN(productPrice) || isNaN(productStock)) {
        alert("Please provide valid product details.");
        return;
    }

    const newProduct = {
        id: artisanProducts.length + 1, // Simple ID generation
        name: productName,
        price: parseFloat(productPrice),
        stock: parseInt(productStock)
    };

    artisanProducts.push(newProduct);
    alert("Product added successfully!");
    artisanListProducts(); // Refresh the product list
}

// Function to update inventory for a product
function artisanUpdateProduct(productId) {
    const product = artisanProducts.find(p => p.id === productId);
    const newStock = prompt(`Enter new stock for ${product.name} (current stock: ${product.stock}):`);

    if (newStock === null || newStock.trim() === '' || isNaN(newStock)) {
        alert("Stock update cancelled or invalid input.");
        return;
    }

    product.stock = parseInt(newStock);
    alert(`Inventory updated for ${product.name}. New stock: ${product.stock}`);
    artisanListProducts(); // Refresh the product list
}

// Function to interact with buyers
function artisanInteractWithBuyers() {
    const buyerMessage = prompt("Enter your message to buyers:");

    if (!buyerMessage) {
        alert("Please provide a message to interact with buyers.");
        return;
    }

    artisanFeedbacks.push(buyerMessage);
    alert("Your message has been submitted to interact with buyers!");
}

// Function to handle logout
function artisanLogout() {
    // Simulate the logout process
    alert("You have been logged out.");
    window.location.href = 'home.html';  // Redirect to the home page after logout
}
