function getInputValueId(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInputTextId(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// Donate for Flood at Noakhali, Bangladesh section

const donateButtonEl = document.getElementById("donate-button");
donateButtonEl.addEventListener("click", function () {
  // const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
  // const inputDonateAmount = parseFloat(document.getElementById('input-donate-amount').value);
  const inputDonateAmount = getInputValueId("input-donate-amount");
  const totalDonate = getInputTextId("donate-amount-show");
  const totalAmount = getInputTextId("total-amount");
  // const totalDonate = parseFloat(document.getElementById('donate-amount-show').innerText);

  if (inputDonateAmount > totalAmount || isNaN(inputDonateAmount)) {
    return alert("Please chack Your Amount and Try again...!!");
  }

  const totalDonateShow = inputDonateAmount + totalDonate;
  const totalAmountDecrease = totalAmount - inputDonateAmount;

  document.getElementById("donate-amount-show").innerText = totalDonateShow;
  document.getElementById("total-amount").innerText = totalAmountDecrease;

  const historyItem = document.createElement("div");
  historyItem.classList = "bg-white p-8 border rounded-lg mt-4 mb-3";
  historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
         <h1 class='mt-4'>Date :  ${new Date().toString()} </h1>
    `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_1").showModal();
});

// Donate for Flood Relief in Feni,Bangladesh section

const feniDonateButton = document.getElementById("feni-donate-button");
feniDonateButton.addEventListener("click", function () {
  const totalAmount = parseFloat(
    document.getElementById("total-amount").innerText
  );
  const inputDonateAmount = parseFloat(
    document.getElementById("input-donate-feni").value
  );
  const totalDonate = parseFloat(
    document.getElementById("donate-feni-show").innerText
  );

  if (inputDonateAmount > totalAmount || isNaN(inputDonateAmount)) {
    return alert("Please chack Your Amount and Try again...!!");
  }

  const totalDonateShow = inputDonateAmount + totalDonate;
  const totalAmountDecrease = totalAmount - inputDonateAmount;

  document.getElementById("donate-feni-show").innerText = totalDonateShow;
  document.getElementById("total-amount").innerText = totalAmountDecrease;

  const historyItem = document.createElement("div");
  historyItem.classList = "bg-white p-8 border rounded-lg mt-4 mb-3";
  historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
         <h1 class='mt-4'>Date :  ${new Date().toString()} </h1>
    `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_1").showModal();
});

// Aid for Injured in the Quota Movement section

const quotaDonateButton = document.getElementById("quota-donate-button");
quotaDonateButton.addEventListener("click", function () {
  const totalAmount = parseFloat(
    document.getElementById("total-amount").innerText
  );
  const inputDonateAmount = parseFloat(
    document.getElementById("input-donate-quota").value
  );
  const totalDonate = parseFloat(
    document.getElementById("donate-quota-show").innerText
  );

  if (inputDonateAmount > totalAmount || isNaN(inputDonateAmount)) {
    return alert("Please chack Your Amount and Try again...!!");
  }

  const totalDonateShow = inputDonateAmount + totalDonate;
  const totalAmountDecrease = totalAmount - inputDonateAmount;

  document.getElementById("donate-quota-show").innerText = totalDonateShow;
  document.getElementById("total-amount").innerText = totalAmountDecrease;

  const historyItem = document.createElement("div");
  historyItem.classList = "bg-white p-8 border rounded-lg mt-4 mb-3";
  historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
          <h1 class='mt-4'>Date :  ${new Date().toString()} </h1>
    `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_1").showModal();
});

const donateButton = document.getElementById("donate-btn");
const historyButton = document.getElementById("history-button");
historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-[#B4F461]");

  donateButton.classList.remove("bg-[#B4F461]");

  document.getElementById("donate-page-section").classList.add("hidden");
  document.getElementById("history-list").classList.remove("hidden");
  document
    .getElementById("footer-section")
    .classList.add("mt-[538px]", "lg:mt-[623px]");
});

donateButton.addEventListener("click", function () {
  donateButton.classList.add("bg-[#B4F461]");

  historyButton.classList.remove("bg-[#B4F461]");

  document.getElementById("donate-page-section").classList.remove("hidden");
  document.getElementById("history-list").classList.add("hidden");
  document.getElementById("footer-section").classList.remove("mt-[538px]");
});

const homeButtonEl = document.getElementById("home-btn");
const blogButtonEl = document.getElementById("blog-btn");
blogButtonEl.addEventListener("click", function () {
  document.getElementById("donate-page-section").classList.add("hidden");
  document.getElementById("home-btn").classList.remove("hidden");
  document.getElementById("blog-btn").classList.add("hidden");
  document.getElementById("page-btn").classList.add("hidden");
  document.getElementById("blog-page").classList.remove("hidden");
  document.getElementById("footer-section").classList.add("hidden");
});

homeButtonEl.addEventListener("click", function () {
  document.getElementById("donate-page-section").classList.remove("hidden");
  document.getElementById("home-btn").classList.add("hidden");
  document.getElementById("blog-btn").classList.remove("hidden");
  document.getElementById("page-btn").classList.remove("hidden");
  document.getElementById("blog-page").classList.add("hidden");
  document.getElementById("footer-section").classList.remove("hidden");
});

// navbar scroll section

let navScrollEl = document.getElementById("nav-scroll");

window.onscroll = function () {
  let scrollNav = window.scrollY;

  if (scrollNav >= 100) {
    navScrollEl.classList.add("backdrop-blur");
    document.getElementById("nav-bg").classList.remove("bg-[#F9F7F3]");
    document.getElementById("page-btn").classList.add("backdrop-blur-2xl");
  } else {
    document.getElementById("nav-bg").classList.add("bg-[#F9F7F3]");
  }
};
