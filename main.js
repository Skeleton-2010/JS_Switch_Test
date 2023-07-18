let radDrink = document.getElementsByName("drink");
let btnDrink = document.querySelector(".BtnDrink");


btnDrink.addEventListener("click", () => {
  for(let radi = 0; radi < radDrink.length; radi++)

    if(radDrink[radi].checked){
      alert(radDrink[radi].value)
    }
})

let inpDays = document.querySelector(".InpDays");
let btnDays = document.querySelector(".BtnDays");
let whatDay;

btnDays.addEventListener('click', () => {
  switch (String(inpDays.value)) {
    case "Monday":
    case "monday":
      whatDay = "WorkDay";
      break;

    case "Tuesday":
    case "tuesday":
      whatDay = "WorkDay";
      break;

    case "Wednesday":
    case "wednesday":
      whatDay = "WorkDay";
      break;

    case "Thursday": 
    case "thursday":
      whatDay = "WorkDay";
      break;

    case "Friday":
    case"friday":
      whatDay = "WorkDay";
      break;

    case "Saturday":
    case "saturday":
      whatDay = "RestDay";
      break;

    case "Sunday":
    case "sunday":
      whatDay = "RestDay";
      break;

    default:
      whatDay = "Not Day";
      break;
  }
  alert(inpDays.value + " - " + whatDay)
})

let inpMonth = document.querySelector(".InpMonth");
let btnMonth = document.querySelector(".BtnMonth");

btnMonth.addEventListener("click", () => {
  switch (+inpMonth.value) {
    case 1:
      alert("January");
      break;
    case 2:
      alert("February");
      break;
    case 3:
      alert("March");
      break;
    case 4:
      alert("April");
      break;
    case 5:
      alert("May");
      break;
    case 6:
      alert("June");
      break;
    case 7:
      alert("July");
      break;
    case 8:
      alert("August");
      break;
    case 9:
      alert("September");
      break;
    case 10:
      alert("October");
      break;
    case 11:
      alert("November");
      break;
    case 12:
      alert("December");
      break;

    default:
      alert("No month signed as " + inpMonth.value + " found");
      break;
  }
})

let inpColor = document.querySelector(".InpColor");
let btnColor = document.querySelector(".BtnColor");

btnColor.addEventListener("click", () => {
  switch (String(inpColor.value)) {
    case "Red":
    case "red":
      alert("Stop");
      break;

    case "Yellow":
    case "yellow":
      alert("Ready");
      break;

    case "Green":
    case "green":
    case "Blue":
    case "blue":
      alert("Go");
      break;

    default:
      alert("None");
      break;
  }
})

let div = document.querySelector(".BtnDiv");
let mult = document.querySelector(".BtnMult");
let sub = document.querySelector(".BtnSub");
let sum = document.querySelector(".BtnSum");

let inpA = document.querySelector(".InpOperA");
let inpB = document.querySelector(".InpOperB");

function Operate(A,B,Operator){
  switch(Operator){
    case "/":
      if(B == 0){
        return "Can't divide by Zero";
      }else{
        return A / B;
      }
      break;

    case "+":
      return A + B;
      break;
    case "-":
      return A - B;
      break;
    case "*":
      return A * B;
      break;
  };
}

div.addEventListener("click", () => 
alert(Operate(inpA.value, inpB.value,"/"))
)

sum.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "+"))
);

sub.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "-"))
);

mult.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "*"))
);