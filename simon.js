console.log('SIMON gAme');
//add keyboard event listeners

let i=0;
let seq=[];
let head=document.getElementById('head');
let l;
maxscore=function(l){
    let score=document.getElementById('maxscore');
    let max=localStorage.getItem('max');
    // score.innerText=``;
    if(max==null){
        score.innerText=`1`;
        localStorage.setItem('max','1');
    }
    else if(max<l){
        score.innerText=`${l}`;
        localStorage.setItem('max',`${l}`);
    }
    else{
        score.innerText=`${max}`;
    }
}
maxscore(1);
boxer=function(v){
    const elem=document.getElementById(`box${v}`);
    elem.style.animation='fade 0.3s 1';
    setTimeout(()=>{
        elem.removeAttribute('style');
    },300);
}

larger=function(){
    let v=Math.floor(1+4*Math.random());
    seq.push(v);
    console.log(v);
    boxer(v);
}

doer=function(e){
    let arena=null;
    let box=null;
    // console.log(e.key);
    if(e.key!=undefined){
        if(e.key=='a'){
            box=0;
            arena='b';
        }
        else if(e.key=='b'){
            box=1;
            arena='b';
        }
        else if(e.key=='c'){
            box=2;
            arena='b';
        }
        else if(e.key=='d'){
            box=3;
            arena='b';
        }
        else{
            arena='a';
        }
    }
    else{
    arena=(e.target.id.toString())[0];
    box=(e.target.id.toString())[3];
    }
    boxer(box);
    if(arena==='b'){
        if(box==seq[i]){
            console.log('correct box');
        }
        else{
            console.log('Incorrect box');
            maxscore(seq.length);
            seq=[];
            i=0;
            head.innerText=`LEVEL 1`;
            return;
        }
    }
    if(i+1==seq.length){
        i=0;
        head.innerText=`LEVEL ${seq.length+1}`;
        setTimeout(()=>{
            maxscore(seq.length);
            larger();
        },500);
    }
    else{
        i++;
    }
}

document.getElementById('arena').addEventListener('click',doer);

document.addEventListener('keydown',doer);

start=function(){
    i=0;
    seq=[];
    head.innerText=`LEVEL ${seq.length+1}`;
    larger();
}

document.getElementById('start').addEventListener('click',start);

document.getElementById('reset').addEventListener('click',()=>{
    localStorage.setItem('max','1');
    maxscore(1);
});
