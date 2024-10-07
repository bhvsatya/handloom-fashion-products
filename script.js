// Mock data for demo purposes (replace with real data from API in production)
let products = [
    { id: 1, name: "Handloom Shawl", price: 50, stock: 10 },
    { id: 2, name: "Handloom Saree", price: 100, stock: 5 },
    { id: 3, name: "Handloom Kurta", price: 40, stock: 20 }
];

let campaigns = []; // Array to store campaigns
let feedbacks = []; // Array to store feedbacks

// Function to handle listing all handloom products
function listProducts() {
    let productHtml = '<h4>Available Products:</h4><ul>';
    products.forEach(product => {
        productHtml += `
            <li>
                ${product.name} - $${product.price} - ${product.stock} in stock
                <button onclick="promoteProduct(${product.id})">Promote</button>
                <button onclick="updateProduct(${product.id})">Update Inventory</button>
            </li>`;
    });
    productHtml += '</ul>';
    document.getElementById('action-content').innerHTML = productHtml; // Corrected ID for dynamic content
}

// Function to handle promoting a product
function promoteProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert(`You have promoted: ${product.name}`);
}

// Function to update inventory for a product
function updateProduct(productId) {
    const product = products.find(p => p.id === productId);
    const newStock = prompt(`Enter new stock for ${product.name} (current stock: ${product.stock}):`);

    if (newStock === null || newStock.trim() === '' || isNaN(newStock)) {
        alert("Stock update cancelled or invalid input.");
        return;
    }

    product.stock = parseInt(newStock);
    alert(`Inventory updated for ${product.name}. New stock: ${product.stock}`);
    listProducts(); // Refresh the product list
}

// Function to manage campaigns
function manageCampaigns() {
    let campaignsHtml = '<h4>Your Campaigns:</h4><ul>';
    campaigns.forEach((campaign, index) => {
        campaignsHtml += `<li>Campaign ${index + 1}: ${campaign}</li>`;
    });
    campaignsHtml += '</ul>';
    campaignsHtml += `
        <h4>Add New Campaign:</h4>
        <input type="text" id="campaign-name" placeholder="Campaign Name">
        <button onclick="addCampaign()">Add Campaign</button>
    `;
    document.getElementById('action-content').innerHTML = campaignsHtml; // Corrected ID for dynamic content
}

// Function to add a new campaign
function addCampaign() {
    const campaignName = document.getElementById('campaign-name').value;
    if (!campaignName) {
        alert("Please enter a campaign name.");
        return;
    }

    campaigns.push(campaignName);
    alert("Campaign added successfully!");
    manageCampaigns(); // Refresh campaigns display
}

// Function to engage with global audiences
function engageAudiences() {
    document.getElementById('action-content').innerHTML = ` // Corrected ID for dynamic content
        <h4>Engage with Global Audiences:</h4>
        <form id="engagement-form">
            <label for="engagement-content">Your Message:</label><br>
            <textarea id="engagement-content" name="engagement-content" rows="4" required></textarea><br>
            <button type="button" onclick="submitEngagement()">Submit Message</button>
        </form>
    `;
}

// Function to submit engagement message
function submitEngagement() {
    const engagementContent = document.getElementById('engagement-content').value;
    if (!engagementContent) {
        alert("Please provide your message.");
        return;
    }

    alert("Your message has been submitted to engage with global audiences!");
    document.getElementById('engagement-form').reset(); // Clear the form after submission
}

// Function to handle logout
function logout() {
    // Simulate the logout process
    alert("You have been logged out.");
    window.location.href = 'home.html';  // Redirect to the home page after logout
}
