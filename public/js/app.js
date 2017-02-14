var counter = {
count: [],
init: function(){
    counter.cacheDom();
    counter.render();
    counter.addEventListeners();
},
cacheDom: function(){
    counter.subtractButton = document.getElementById('subtractButton');
    counter.addButton = document.getElementById('addButton');
    counter.countDisplay = document.getElementById('counter');
    counter.reset = document.getElementById('reset');
    counter.countBy = document.getElementById('countBy');
    counter.submitButton = document.getElementById('submitButton');
    counter.count = 0;
    counter.setCountBy = 1;
},
render: function(){
    counter.countDisplay.innerHTML = counter.count;
},
// countByFunction: function(){
//     var countBySelection = countBy.value;
//     console.log(countBySelection);
//     counter.render();
// },

addEventListeners: function(){
    counter.addButton.addEventListener('click', function(){
        counter.count += counter.setCountBy;
        if (counter.count > 999){
            counter.countDisplay.style.fontSize = "50px";
        }
        if (counter.count > 9999){
            counter.countDisplay.style.fontSize = "30px";
        }
        counter.render();
    });
    counter.subtractButton.addEventListener('click', function(){
        counter.count -= counter.setCountBy;
        if (counter.count < -999){
            counter.countDisplay.style.fontSize = "50px";
        }
        if (counter.count < -9999){
            counter.countDisplay.style.fontSize = "30px";
        }
        counter.render();
    });
    counter.reset.addEventListener('click', function(){
        counter.count = 0;
        counter.render();
    });
    counter.submitButton.addEventListener('click', function(){
        var countBySelection = countBy.value;
        console.log(countBySelection);
        counter.setCountBy = parseInt(countBySelection);
        counter.render();
    });
}
};

counter.init();
