function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var top = document.querySelectorAll('input[name="toppings"]:checked');
    var toppings = [];
    var order = {};

    for(var i = 0; i < top.length; i++){
        toppings.push(top[i].value);
    }

    order['Topppings'] = toppings;
    order['Crust'] = elements.crust.value;
    order['Special Instructions'] = elements.instructions.value;
    
    console.log(order);
}