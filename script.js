let date = new Date();

let currentHours = date.getHours();

let greetings = document.querySelector(".greetings");

let msg;

if (currentHours >= 00 && currentHours < 12){
    msg = "Good Morning, Chukwuma";
}else if(currentHours >= 12 && currentHours < 16){
    msg = "Good Afernoon, Chukwuma";
}else if(currentHours >= 16 && currentHours < 20){
    msg = "Good Evening, Chukwuma";
}else if(currentHours >= 20 && currentHours < 00){
    msg = "Good Night, Chukwuma";
}else {
    msg = "What Planet Are You From";
}

greetings.innerHTML = msg
