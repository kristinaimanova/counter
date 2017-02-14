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
    counter.count = 0;
},
render: function(){
    counter.countDisplay.innerHTML = counter.count;
},
addEventListeners: function(){
    counter.addButton.addEventListener('click', function(){
        counter.count += 1;
        counter.render();
    });
    counter.subtractButton.addEventListener('click', function(){
        counter.count -= 1;
        counter.render();
    });
    counter.reset.addEventListener('click', function(){
        counter.count = 0;
        counter.render();
    });
}
};

counter.init();
