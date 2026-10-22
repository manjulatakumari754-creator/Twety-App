// Tab Switching Animation Logic
function setActiveTab(element) {
    const items = document.querySelectorAll('.bottom-nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Order Submission & Agent Swarm Execution Logic
function submitOrder() {
    const orderInput = document.getElementById('orderInput');
    const orderStatusText = document.getElementById('orderStatusText');
    const agentTierStatus = document.getElementById('agentTierStatus');
    
    const query = orderInput.value.trim();
    if (!query) {
        alert('Bhai, pehle kuch project description toh likh!');
        return;
    }

    // Update UI to show live processing state
    orderStatusText.innerHTML = `Processing Order: "<strong>${query}</strong>"`;
    agentTierStatus.innerHTML = `<span class="status-badge" style="background: rgba(59, 130, 246, 0.2); color: #3b82f6; border-color: rgba(59, 130, 246, 0.4);">Assigning 15-20 Autonomous Swarm Agents...</span>`;

    setTimeout(() => {
        agentTierStatus.innerHTML = `<span class="status-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981; border-color: rgba(16, 185, 129, 0.4);">✓ Execution Completed via AI Collaborative Pipeline</span>`;
    }, 2000);

    orderInput.value = '';
}

// Allow Enter key to submit order
document.getElementById('orderInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitOrder();
    }
});
