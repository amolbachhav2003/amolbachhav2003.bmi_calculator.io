const form = document.querySelector('form');
console.log(form);

//THIS USECASE WILL GIVE YOU EMPTY VALUE BEC WE ARE ACCEPTING HEIGHT BEFORE FORM EVEN GETTING SUBMITED 
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    }

    else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6)
        results.innerHTML = `<span>${bmi}</span> Your are under weight `;

        else if(bmi > 24.9)
        results.innerHTML = `<span>${bmi}</span> Your are in Over weight`;

        else{
            results.innerHTML = `<span>${bmi}</span> So beautiful so elegant just looking like a wow `; 
        }

    }

});