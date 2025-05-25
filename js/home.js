document.getElementById('noakhali-btn').addEventListener('click', function () {

    const mainBalance = getTextValueById('main-balance');
    const noakhaliDonationBalance = getTextValueById('noakhali-donation-balance');
    const donateNoakhali = getInputFieldValueById('donate-noakhali');
    const modal = document.getElementById('my_modal_5');

    calculation(mainBalance, noakhaliDonationBalance, donateNoakhali, 'main-balance', 'noakhali-donation-balance', modal,'Noakhali');
})


document.getElementById('feni-btn').addEventListener('click', function () {

    const mainBalance = getTextValueById('main-balance');
    const feniDonationBalance = getTextValueById('feni-donation-balance');
    const donateFeni = getInputFieldValueById('donate-feni');
    const modal = document.getElementById('my_modal_5');

    calculation(mainBalance, feniDonationBalance, donateFeni, 'main-balance', 'feni-donation-balance', modal,'Feni');
})


document.getElementById('quota-btn').addEventListener('click', function () {

    const mainBalance = getTextValueById('main-balance');
    const quotaDonationBalance = getTextValueById('quota-donation-balance');
    const donateQuota = getInputFieldValueById('donate-quota');
    const modal = document.getElementById('my_modal_5');

    calculation(mainBalance, quotaDonationBalance, donateQuota, 'main-balance', 'quota-donation-balance', modal,'Injured in the Quota Movement');
})


