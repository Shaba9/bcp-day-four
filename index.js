function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var guess = elements.guess.value;

    var result = document.getElementById('result');
    // var name = elements.name.value;
    // console.log('name', name);

    // var comments = elements.name.value;
    // console.log('comments', comments);

    // var toppings = elements.name.value;
    // console.log('toppings', toppings);

    // var grade = elements.name.value;
    // console.log('grade', grade);


    

    // result.textContent = 'You made a guess of ' + guess;

    console.log(guess);
    
    var correct = 7;

    if (guess == correct){
        result.textContent = 'Correct';
    } else if(guess < correct){
        result.textContent = 'Too low';
    }else {
        result.textContent = 'Too high';
    }

    console.log(elements.grade.value);
    console.log(elements.toppings.slice(0,3).value);
}