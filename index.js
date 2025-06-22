let isDOBOpen=false;
let dateOfBirth;
const settingcogEl=document.getElementById("settingIcon");
const settingContentEl=document.getElementById("settingcontent");
const initialTextEl=document.getElementById('initialText');
const afterDOBBtnTxtEl=document.getElementById("afterDOBBtnTxt");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");

const yearsEl=document.getElementById("year");
const monthEl=document.getElementById("month");
const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("second");

const makeTwoDigitNumber=(number)=>{
    return number>9  ? number :`0${number}`
};

const toggleDateOfBirthSelector=()=>{
    //settingContentEl.classList.remove('hide');
    if(isDOBOpen){
        settingContentEl.classList.add('hide');
    }else{
         settingContentEl.classList.remove('hide');
    }
    isDOBOpen=!isDOBOpen;

    console.log("Toggle", isDOBOpen);
};


const updateAge = ()=>{

    const currentDate= new Date();
    const dateDiff=currentDate-dateOfBirth;

    const year=Math.floor(dateDiff /(1000*60*60*24*365));
    const month=Math.floor(dateDiff /(1000*60*60*24*365) %12);
    const day=Math.floor(dateDiff /(1000*60*60*24*365) %30);
    const hour=Math.floor(dateDiff /(1000*60*60) %24);
    const minute=Math.floor(dateDiff /(1000*60) %60);
    const second=Math.floor(dateDiff /(1000) %60);

    yearsEl.innerHTML=makeTwoDigitNumber(year);
    monthEl.innerHTML=makeTwoDigitNumber(month);
    dayEl.innerHTML=makeTwoDigitNumber(day);
      hourEl.innerHTML=makeTwoDigitNumber(hour);
    minuteEl.innerHTML=makeTwoDigitNumber(minute);
    secondEl.innerHTML=makeTwoDigitNumber(second);

    console.log("dateDiff :",dateDiff);
    console.log("year :",year);
    
}
const localStroageGetter=()=>{
    const year=localStorage.getItem("year");
const month=localStorage.getItem("month");
const day=localStorage.getItem("date");

if(year && month && date){
    console.log({
        year,
        month,
        date,
    });
}
updateAge();
};

const contenTogger=()=>{
    updateAge();
    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
    }else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
}

const setDOBHandler =() =>{
const dateString = dobInputEl.value;

dateOfBirth= dateString ? new Date(dateString) :null; //imp

    if(dateOfBirth){
        localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth());
        localStorage.setItem("day",dateOfBirth.getDate());        //imp
        // localStorage.setItem("minute",dateOfBirth.getMinutes());
        // localStorage.setItem("second",dateOfBirth.getSeconds());
       
        // updateAge(); not use
      
    }


    setInterval(()=>updateAge(),1000);
    contenTogger();
// console.log("date of Birth",dateOfBirth);
};
localStroageGetter();
contenTogger();



settingcogEl.addEventListener("click",toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click",setDOBHandler);