let myImage = document.querySelector('img');

let fetureList = document.querySelectorAll('li');
let darkMode = document.querySelector('body');
let shift = document.querySelector('input');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Mobicip-icon.png') {
    myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/limit1-06f883a456896bd60eec8b744971b4b0e7aa8016c45756c93e46c76b3aa7ef2a.png');
  } else if(mySrc === "https://www.mobicip.com/assets/content/home/limit1-06f883a456896bd60eec8b744971b4b0e7aa8016c45756c93e46c76b3aa7ef2a.png"){
    myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/protect1-602886d854591f276482c36fd57af5c0066703e0c7b253d032763d65ec1fc4e3.png');
  }
  else if(mySrc === "https://www.mobicip.com/assets/content/home/protect1-602886d854591f276482c36fd57af5c0066703e0c7b253d032763d65ec1fc4e3.png"){
    myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/monitor1-833c0038a6a480b4bd4d92e5eab99e39719e4ac9233821a4683d15425fb73a1e.png');
  }
  else if(mySrc === "https://www.mobicip.com/assets/content/home/monitor1-833c0038a6a480b4bd4d92e5eab99e39719e4ac9233821a4683d15425fb73a1e.png"){
    myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/collaborate1-1aab4a2810bb11dfe53ff79916d11e085d6cd1e7cbfffe2a45bd2eac4e781e79.png');
  }
  else if(mySrc === "https://www.mobicip.com/assets/content/home/collaborate1-1aab4a2810bb11dfe53ff79916d11e085d6cd1e7cbfffe2a45bd2eac4e781e79.png"){
    myImage.setAttribute ('src','images/Mobicip-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myname = document.querySelector('#Name');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myname.innerHTML = myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myname.innerHTML = storedName;
}

myButton.onclick = function() {
  setUserName();
}
function selectimage(e){
    var li = e.currentTarget;
    var name = li.innerHTML;
    if(name === "Limit screen time"){
        myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/limit1-06f883a456896bd60eec8b744971b4b0e7aa8016c45756c93e46c76b3aa7ef2a.png');
    }
    else if(name === "filter internet"){
        myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/protect1-602886d854591f276482c36fd57af5c0066703e0c7b253d032763d65ec1fc4e3.png');
    }
    else if(name === "monitor social media"){
        myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/monitor1-833c0038a6a480b4bd4d92e5eab99e39719e4ac9233821a4683d15425fb73a1e.png');
    }
    else if(name === "track location"){
        myImage.setAttribute ('src','https://www.mobicip.com/assets/content/home/collaborate1-1aab4a2810bb11dfe53ff79916d11e085d6cd1e7cbfffe2a45bd2eac4e781e79.png');
    }else{
        myImage.setAttribute ('src','images/Mobicip-icon.png');
    }
    console.log();
}

fetureList.forEach(Element => {
    Element.onmouseover = selectimage;
})

fetureList.forEach(Element => {
    Element.onmouseleave = () => {myImage.setAttribute('src','images/Mobicip-icon.png');};
})

function darkModeToggel(){
    darkMode.classList.toggle("dark");
}