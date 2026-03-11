async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/marketplace/api/items')
    const json = await data.json()
    return json
}

async function renderItem(){
    const card = document.getElementsByClassName("items-grid");
    card.innerHTML += `
                <div class="item-card">
                    <img
                        src="${data.imageUrl}"
                        alt="${data.title}"
                        class="item-image" />
                    <div class="item-content">
                        <span class="status-badge status-active">${data.status}</span>
                        <h3 class="item-title">${data.title}</h3>
                        <p class="item-description">
                            ${data.description}
                        </p>
                        <div class="item-footer">
                            <div>
                                <div class="item-price">${data.price}</div>
                                <div class="bid-info">
                                    ${data.highestBid}
                                    <span class="bid-count">${data.bidCount}</span>
                                </div>
                            </div>
                            <div class="item-meta">
                                <span class="item-seller">
                                    ${data.username}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

`
}