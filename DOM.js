console.log("We're LIVE")

/* 

document.querySelector(selectors);
*/ //Search it by using querySelector - #title, h1 .myclass

var title = document.querySelector('#title');

// Innertext

//title['innerText'] = 'The current time is ' + new Date()
title.innerText = 'The current time is ' + new Date();

var text = ['ONE', 'TWO', 'THREE'];

for (var i = 0; i < text.length; i += 1) {
    var li = document.querySelector('#item' + (i + 5));
    li.innerText = text[i];
    //li['innerText'] = text[i];
}

for (var i = 0; i < text.length; i += 1) {
    var li = document.createElement('li');
    li.innerText = text[i];
    document.querySelector('#mylist').appendChild(li);
}
