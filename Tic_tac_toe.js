console.log('Tic-tac-toe Game');
let m=0;
let arr=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let result=document.getElementById('result');
circle=function(){
        result.innerText=`Player 2 wins`;
        console.log('circle Wins');
}
cross=function(){
    result.innerText=`Player 1 wins`;
    console.log('cross Wins');
}
check=function(){
    let i,j;
    for(i=0;i<3;i++){
        for(j=1;j<3;j++){
            if(arr[i][j]!=arr[i][0] || arr[i][0]==-1){
                break;
            }
        }
        if(j===3){
            break;
        }
    }
    if(i!=3){
        if(arr[i][0]==0){
            circle();
        }
        else{
            cross();
        }
    }
    for(i=0;i<3;i++){
        for(j=1;j<3;j++){
            if(arr[j][i]!=arr[0][i] || arr[0][i]==-1){
                break;
            }
        }
        if(j===3){
            break;
        }
    }
    if(i!=3){
        if(arr[0][i]==0){
            circle();
        }
        else{
            cross();
        }
    }
    for(i=1;i<3;i++){
        if(arr[i][i]!=arr[0][0] || arr[0][0]==-1){
            break;
        }
    }
    if(i===3){
        if(arr[0][0]==0){
            circle();
        }
        else{
            cross();
        }
    }
    for(i=1;i<3;i++){
        if(arr[i][2-i]!=arr[0][2] || arr[0][2]==-1){
            break;
        }
    }
    if(i===3){
        if(arr[0][2]==0){
            circle();
        }
        else{
            cross();
        }
    }
}

move=function(e){
    let idr=(e.target.id)[1];
    let idc=(e.target.id)[2];
    let box=document.getElementById(`b${idr}${idc}`);
    if(m%2==0){
        box.style.backgroundImage=`url('close.png')`;
        arr[idr][idc]=1;
    }
    else{
        box.style.backgroundImage=`url('rec.png')`;
        arr[idr][idc]=0;
    }
    m++;
    if(m>=4)
    {
        check();
    }
}

let container=document.getElementById('container');
container.addEventListener('click',move);