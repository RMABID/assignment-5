





// Donate for Flood at Noakhali, Bangladesh section

const donateButtonEl = document.getElementById('donate-button');
donateButtonEl.addEventListener('click', function(){

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const inputDonateAmount = parseFloat(document.getElementById('input-donate-amount').value);
    const totalDonate = parseFloat(document.getElementById('donate-amount-show').innerText);
    
    if(inputDonateAmount > totalAmount || isNaN(inputDonateAmount)){
        return alert('Your Amount  Please try again ')
    }

    const totalDonateShow = inputDonateAmount + totalDonate;
    const totalAmountDecrease = totalAmount - inputDonateAmount;
    
    
    document.getElementById('donate-amount-show').innerText = totalDonateShow;
    document.getElementById('total-amount').innerText = totalAmountDecrease;

    const historyItem = document.createElement('div');
    historyItem.classList = 'bg-white p-8 border rounded-lg mt-4 mb-3'
    historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
          <h1>${new Date().toLocaleTimeString()} </h1>
    `

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

    

});

// Donate for Flood Relief in Feni,Bangladesh section

const feniDonateButton = document.getElementById('feni-donate-button');
feniDonateButton.addEventListener('click', function(){

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const inputDonateAmount = parseFloat(document.getElementById('input-donate-feni').value);
    const totalDonate = parseFloat(document.getElementById('donate-feni-show').innerText);

    if(inputDonateAmount > totalAmount || isNaN(inputDonateAmount)){
        return alert('Your Amount  Please try again ')
    }

    const totalDonateShow = inputDonateAmount + totalDonate;
    const totalAmountDecrease = totalAmount - inputDonateAmount;

    document.getElementById('donate-feni-show').innerText = totalDonateShow;
    document.getElementById('total-amount').innerText = totalAmountDecrease;

    const historyItem = document.createElement('div');
    historyItem.classList = 'bg-white p-8 border rounded-lg mt-4 mb-3'
    historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
          <h1>${new Date().toLocaleTimeString()} </h1>
    `

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

});


// Aid for Injured in the Quota Movement section

const quotaDonateButton = document.getElementById('quota-donate-button');
quotaDonateButton.addEventListener('click', function(){

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const inputDonateAmount = parseFloat(document.getElementById('input-donate-quota').value);
    const totalDonate = parseFloat(document.getElementById('donate-quota-show').innerText);

    if(inputDonateAmount > totalAmount || isNaN(inputDonateAmount)){
        return alert('Your Amount  Please try again ')
    }

    const totalDonateShow = inputDonateAmount + totalDonate;
    const totalAmountDecrease = totalAmount - inputDonateAmount;


    document.getElementById('donate-quota-show').innerText = totalDonateShow
    document.getElementById('total-amount').innerText = totalAmountDecrease;

    const historyItem = document.createElement('div');
    historyItem.classList = 'bg-white p-8 border rounded-lg mt-4 mb-3'
    historyItem.innerHTML = `
         <h1 class="text-xl font-bold text-black"> ${inputDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
          <h1>${new Date().toLocaleTimeString()} </h1>
    `

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
});



const donateButton = document.getElementById('donate-btn');
const historyButton = document.getElementById('history-button');
historyButton.addEventListener('click', function(){

    historyButton.classList.add(
       'bg-[#B4F461]'
       
    );

    donateButton.classList.remove(
        'bg-[#B4F461]'
    )



    document.getElementById('donate-page-section').classList.add('hidden')
    document.getElementById('history-list').classList.remove('hidden')

});

donateButton.addEventListener('click', function(){

    donateButton.classList.add(
        'bg-[#B4F461]'
    );

    historyButton.classList.remove(
        'bg-[#B4F461]'
        
     );

     document.getElementById('donate-page-section').classList.remove('hidden')
    document.getElementById('history-list').classList.add('hidden')

});



const homeButtonEl = document.getElementById('home-btn');
const blogButtonEl = document.getElementById('blog-btn');
blogButtonEl.addEventListener('click', function(){




    document.getElementById('donate-page-section').classList.add('hidden');
    document.getElementById('home-btn').classList.remove('hidden');
    document.getElementById('blog-btn').classList.add('hidden');
    document.getElementById('page-btn').classList.add('hidden')
    document.getElementById('blog-page').classList.remove('hidden')


});

homeButtonEl.addEventListener('click', function(){

    document.getElementById('donate-page-section').classList.remove('hidden');
    document.getElementById('home-btn').classList.add('hidden');
    document.getElementById('blog-btn').classList.remove('hidden');



});

