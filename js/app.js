





const donateButtonEl = document.getElementById('donate-button');
donateButtonEl.addEventListener('click', function(){

    const inputDonateAmount = parseFloat(document.getElementById('input-donate-amount').value);

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const totalDonate = document.getElementById('donate-amount-show').innerText;
    
    const totalDonateShow = inputDonateAmount;
    const totalAmountDecrease = totalAmount - inputDonateAmount;
    
    document.getElementById('donate-amount-show').innerText = totalDonateShow;
    document.getElementById('total-amount').innerText = totalAmountDecrease;



});

const feniDonateButton = document.getElementById('feni-donate-button');
feniDonateButton.addEventListener('click', function(){

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const inputDonateAmount = parseFloat(document.getElementById('input-donate-feni').value);

    const totalDonateShow = inputDonateAmount;
    const totalAmountDecrease = totalAmount - inputDonateAmount;

    document.getElementById('donate-feni-show').innerText = totalDonateShow;
    document.getElementById('total-amount').innerText = totalAmountDecrease;

});


const quotaDonateButton = document.getElementById('quota-donate-button');
quotaDonateButton.addEventListener('click', function(){

    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
    const inputDonateAmount = parseFloat(document.getElementById('input-donate-quota').value);

    const totalDonateShow = inputDonateAmount;
    const totalAmountDecrease = totalAmount - inputDonateAmount;


    document.getElementById('donate-quota-show').innerText = totalDonateShow
    document.getElementById('total-amount').innerText = totalAmountDecrease;
});