// error text
const errorMsg = document.getElementById('error-text');
// Get all phones
const phoneNames = () => {
    const searchInput = document.getElementById("search-input");
    const inputValue = searchInput.value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    if (inputValue == '') {
        errorMsg.style.display = 'block';
    }
    fetch(url)
        .then(res => res.json())
        .then(data => details(data.data.slice(0, 20)));
};
// Get phone data
const details = (phones) => {
    errorMsg.style.display = 'none';
    if (phones.length == 0) {
        errorMsg.style.display = 'block';
    }
    const cardDetails = document.getElementById("phone-details");
    cardDetails.textContent = '';
    for (const phone of phones) {
        // console.log(phone);
        const cardValue = document.createElement("div");
        cardValue.classList.add("col");
        cardValue.innerHTML = `<img src="${phone.image}" class="card-img-top" alt="phone">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <h5 class="card-title">${phone.phone_name}</h5>
            <button onclick="loadDetails('${phone.slug}')">Details</button>
        
        </div>`;
        // create childs
        cardDetails.appendChild(cardValue);
    }
};
// Load phone Details
const loadDetails = (details) => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data));
};
// Show Phone Details
const showDetails = (phnDetails) => {
    console.log(phnDetails);
    const detailsOfPhone = document.getElementById("details");
    detailsOfPhone.textContent = '';
    const createDiv = document.createElement("div");
    // Phone features
    createDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
  <img src="${phnDetails.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="title">${phnDetails.name}</h5>
  <h5 class="title">${phnDetails.brand}</h5>
  <P><span class="text">Release Date :</span> ${phnDetails.releaseDate ? phnDetails.releaseDate : "Not Found !"}</P>
  <h5 class="title">Main Featues :</h5>
  <P><span class="text">Chipset :</span> ${phnDetails.mainFeatures.chipSet}</P>
  <P><span class="text">Display :</span> ${phnDetails.mainFeatures.displaySize}</P>
  <P><span class="text">Memory :</span> ${phnDetails.mainFeatures.memory}</P>
  <P><span class="text">Storage :</span> ${phnDetails.mainFeatures.storage}</P>
  <h5 class="title">Others :</h5>
  <P><span class="text">Bluetooth :</span> ${phnDetails.others?.Bluetooth ? phnDetails.others?.Bluetooth : "Not Found !"}</P>
  <P><span class="text">GPS :</span> ${phnDetails.others?.GPS ? phnDetails.others?.GPS : "Not Found !"}</P>
  <P><span class="text">NFC :</span> ${phnDetails.others?.NFC ? phnDetails.others?.NFC : "Not Found !"}</P>
  <P><span class="text">Radio :</span> ${phnDetails.others?.Radio ? phnDetails.others.Radio : "Not Found !"}</P>
  <P><span class="text">USB :</span> ${phnDetails.others?.USB ? phnDetails.others?.USB : "Not Found !"}</P>
  <P><span class="text">WLAN :</span> ${phnDetails.others?.WLAN ? phnDetails.others?.WLAN : "Not Found !"}</P>

  </div>
</div>`
//  create childs
    detailsOfPhone.appendChild(createDiv);
}

