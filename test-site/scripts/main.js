var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dogs.jpg'){
        myImage.setAttribute('src','images/puppy.jpg');
    }else{
        myImage.setAttribute('src','images/dogs.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Adopt a dog, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
    }else{
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Adopt a dog, ' + storedName;
    }
    myButton,onclick = function(){
        setUserName();
    }
