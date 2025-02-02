document.getElementById('click-btn').addEventListener('click', () =>{
    let bristiChoyaField = document.getElementById('bristiChoya-field');
    let bristiChoyaFieldText = bristiChoyaField.value;
    let bristiChoyaRent = parseFloat(bristiChoyaFieldText);

    //  console.log(typeof(bristiChoyaRent));

    let meghViewField = document.getElementById('meghView-field');
    let meghViewFieldText = meghViewField.value;
    let meghViewRent = parseFloat(meghViewFieldText);

    let ghomGhorField = document.getElementById('ghomGhor-filed');
    let ghomGhorFieldText = ghomGhorField.value;
    let ghomGhorRent = parseFloat(ghomGhorFieldText);

    let tentField = document.getElementById('tent-field');
    let tentFieldText = tentField.value;
    let tentRent = parseFloat(tentFieldText);

    let totalRent = bristiChoyaRent + meghViewRent + ghomGhorRent + tentRent; 
    let totalRentFixed = totalRent.toFixed(2);

    let showTotalRent = document.getElementById('show-total-rent');
    showTotalRent.innerText = totalRentFixed;
})



