//declaration
let count = 0;
let margin =  20;
const result = document.getElementById("res");
const increaseBtn = document.getElementById("inc");
const decreaseBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const disp=document.getElementById('display');
// const pict=document.getElementsByClassName('image');
//calling initially
  display(count);


//increase
function increase() {
  if(count<51){
  count = count + 1;
  movingfor();
  }
  result.innerText = `Count : ${count}`;
  display(count);
}

//decrease
function decrease() {
  if (count > 0) {
    count = count - 1;
    movingback();
  }
  result.innerText = `Count : ${count}`;
   display(count);
}

//reset the count
function reset() {
  let confirmReset = confirm("Do you want to reset?");

  if (confirmReset) {
    count = 0;
    movingreset();
    result.innerText = `Count : ${count}`;
  }
}
const messages = [
"",
"Hii",
"Hello",
"Welcome",
"How are you?",
"Nice to see you",
"Good day",
"Keep going",
"You are doing great",
"Stay positive",
"Learning is fun",
"Practice daily",
"JavaScript is powerful",
"Web development is cool",
"Build projects",
"Keep improving",
"Believe in yourself",
"Consistency matters",
"Small steps daily",
"Great progress",
"Keep coding",
"Don't give up",
"Debug and learn",
"Errors make you better",
"Stay curious",
"Explore more",
"Try new things",
"Focus on logic",
"Write clean code",
"Understand concepts",
"Experiment more",
"Think creatively",
"Practice again",
"You're improving",
"Nice work",
"Almost there",
"Keep pushing",
"Stay motivated",
"Learning never stops",
"Enjoy coding",
"Future developer",
"Skill building",
"Smart work",
"Hard work pays",
"Stay patient",
"One step ahead",
"Code everyday",
"Great learning",
"Master JavaScript",
"Success is near",
"Awesome!"
];

function display(count){
  if(count==0){
    disp.innerHTML=`press forward to start convo`;
  }
  else{
  disp.innerHTML = messages[count] || "Maximum message reached";
}
}
function movingfor(){
  const pict = document.getElementById("image");
  margin += 25;
  pict.style.marginLeft = margin + "px";
}
function movingback(){
  const pict = document.getElementById("image");
  margin -= 25;
  pict.style.marginLeft = margin + "px";
}
function movingreset(){
  const pict = document.getElementById("image");
  margin = 0;
  pict.style.marginLeft = margin + "px";
}

//adding event
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
