
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue.replace('BDT', ''))
    return inputNumber;
}


function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue.replace('BDT', ''));
    return textNumber;
}

function calculation(id1, id2, id3,id4,id5,id6) {

    if (isNaN(id3)) {
        alert('Failed to donate!!');
        return;
    }
    if (id1 < id3) {
        alert('You do not have sufficient balance');
        return;
    }

    const newMainBalance = id1 - id3;
    const newDonationBalance = id3 + id2;

    document.getElementById(id4).innerText = `${newMainBalance}BDT`;
    document.getElementById(id5).innerText = `${newDonationBalance}BDT`;

    id6.showModal();

}

function showSectionId(id1,id2,id3){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('btn-donation').classList.add('bg-lime-400');
    
    
     


    document.getElementById(id1).classList.remove('hidden');
    document.getElementById(id2).classList.remove('bg-lime-400');
    document.getElementById(id3).classList.add('bg-lime-400');

}