const today=new Date();
const theYear=today.getFullYear();
const theMonth=today.getMonth()+1;
const theDate=today.getDate();
const birth_year=2005;
const birth_month=9;
const birth_date=12;
const aside=document.querySelector(".age");
let age;
if(theMonth<birth_month || theMonth==birth_month && theDate<birth_date){
    age=theYear-birth_year-1;
}else{
    age=theYear-birth_year;
}

aside.innerHTML=(age)+"(B2)";