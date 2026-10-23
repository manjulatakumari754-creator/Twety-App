// Tab Switching Animation Logic
function setActiveTab(element) {
    const items = document.querySelectorAll('.bottom-nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Chat & Order Execution Viewer Logic
function submitOrder() {
    const orderInput = document.getElementById('orderInput');
    const chatContainer = document.getElementById('chatContainer');
    
    const query = orderInput.value.trim();
    if (!query) return;

    // 1. Append User Message (Right Side)
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.textContent = query;
    chatContainer.appendChild(userMsg);

    orderInput.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 2. Simulate AI Response with Interactive Execution Viewer Card (Left Side)
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai-message';
        aiMsg.innerHTML = `
            <div>Order received. Initializing autonomous multi-agent pipeline for your request.</div>
            <div class="execution-card">
                <h4>Agent Swarm Viewer</h4>
                <div class="execution-info">Project: "${query}"</div>
                <div class="exec-status-badge" id="statusBadge-${Date.now()}">Deploying 15-20 Autonomous Swarm Models...</div>
            </div>
        `;
        chatContainer.appendChild(aiMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Simulate progress update inside the card
        const badge = aiMsg.querySelector('.exec-status-badge');
        setTimeout(() => {
            badge.textContent = '✓ Execution Completed & Code Generated';
            badge.style.background = 'rgba(16, 185, 129, 0.2)';
            badge.style.color = '#10b981';
            badge.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 2500);

    }, 1000);
}

// Allow Enter key to send message
document.getElementById('orderInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitOrder();
    }
});
