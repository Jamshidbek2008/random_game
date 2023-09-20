const btn=document.querySelector('.check');
const input=document.querySelector('.number1');
const re=input.value;
let rendom=parseInt(Math.random()*20);
const text=document.querySelector('.p2');
const div=document.querySelector('.wrap');
const soroq=document.querySelector('.p')
const score=document.querySelector('.score')
const gy=document.querySelector('.p1')
const bir=document.querySelector('.hightscore')
const refresh=document.querySelector('.again')
let imkoniat=9;
let b=1;


btn.addEventListener('click',() => {
     if(rendom ==input.value){
        text.innerText="yutingiz";
        div.style.backgroundColor="green";
        soroq.innerText=input.value;
    }
    else if(imkoniat>-1){
        if(input.value < rendom){
            text.innerText="balandroq kiriting";
            bir.innerText="🥇Highscore: "+b++;
        }
        else if(input.value > rendom){
            text.innerText="sal pasroq";
            bir.innerText="🥇Highscore: "+b++;
        }
        score.innerText="💯score :"+(imkoniat--);
}
else if(imkoniat<=0){
    text.innerText="yutqazdiz";
    div.style.backgroundColor="red";
    bir.innerText="🥇Highscore: "+0;
}
}
)





refresh.addEventListener('click',() => {
    score.innerText="💯score : 10";
    div.style.backgroundColor="black";
    imkoniat=10;
    if(imkoniat>-1){
        if(input.value < rendom){
            text.innerText="balandroq kiriting";
        }
        else if(input.value > rendom){
            text.innerText="sal pasroq";
        }
        else{
            text.innerText="yutingiz";
            div.style.backgroundColor="green";
            soroq.innerText=input.value;
            bir.innerText="🥇Highscore: "+score.value;
        }
        score.innerText="💯score :"+(imkoniat--);
}
else if(imkoniat<=0){
    text.innerText="yutqazdiz";
    div.style.backgroundColor="red";
}
});