async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/marketplace/api/items')
    const json = await data.json()
    return json
}

async function renderItem(){
    const items = await fetchData();
    const card = document.querySelector(".items-grid");
    card.innerHTML = '';

    items.forEach(item => {
        card.innerHTML += `
            <div class="item-card">
                <img
                    src="${item.imageUrl}"
                    alt="${item.title}"
                    class="item-image" 
                    loading="lazy" />
                <div class="item-content">
                    <span class="status-badge">
                        ${item.status}
                    </span>
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">
                        ${item.description}
                    </p>
                    <div class="item-footer">
                        <div>
                            <div class="item-price">${item.price} ₽</div>
                            <div class="bid-info">
                                Текущая ставка: ${item.highestBid}
                                <span class="bid-count">${item.bidCount}</span>
                            </div>
                        </div>
                        <div class="item-meta">
                            <span class="item-seller">
                                Продавец: ${item.username}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
renderItem();