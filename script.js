// Tab Switching Animation Logic
function setActiveTab(element) {
    const items = document.querySelectorAll('.bottom-nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Chat Message Sending Logic
function submitOrder() {
    const orderInput = document.getElementById('orderInput');
    const chatContainer = document.getElementById('chatContainer');
    
    const query = orderInput.value.trim();
    if (!query) return;

    // 1. Append User Message (Right Side)
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user-message';
    userMsgDiv.textContent = query;
    chatContainer.appendChild(userMsgDiv);

    // Clear Input
    orderInput.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // 2. Simulate AI Response after 1 second (Left Side)
    setTimeout(() => {
        const aiMsgDiv = document.createElement('div');
        aiMsgDiv.className = 'message ai-message';
        aiMsgDiv.textContent = `Order received! Deploying autonomous agents for: "${query}". Execution pipeline started successfully.`;
        chatContainer.appendChild(aiMsgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

// Allow Enter key to send message
document.getElementById('orderInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitOrder();
    }
});
