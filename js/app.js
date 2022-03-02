const phoneNames = () => {
    const searchInput = document.getElementById("search-input");
    const inputValue = searchInput.value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => details(data.data));
}
const details = (phones) => {
    for (const phone of phones) {
        // console.log(phone);
        const cardDetails = document.getElementById("phone-details");
        const cardValue = document.createElement("div");
        cardValue.classList.add("col");
        cardValue.innerHTML = `<img src="${phone.image}" class="card-img-top" alt="phone">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <h5 class="card-title">${phone.phone_name}</h5>
            <button onclick="showDetails('${phone.slug}')">Details</button>
        
        </div>`;
        cardDetails.appendChild(cardValue);
    }
};
const showDetails = (details) => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

