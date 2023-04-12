let p=1,w=0,m=0;
let A=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let a=0,b=0;
cross=function(){
    a++;
    document.getElementById('cross').innerText=`${a}`;
}
circle=function(){
    b++;
    document.getElementById('circle').innerText=`${b}`;
}
result=function(l,c){
    w=1;
    if(l!='n')
    {
        let audio=new Audio('Tic-tac-toe-resources/win.wav');
        audio.play();
    }
    if(l=='d' && c==0)
    {
        if(A[0][0]==1)
            cross(); 
        else
            circle();
        for(let i=0;i<3;i++)
        {
            A[i][i]=2;
            document.getElementById(`B${i}${i}`).classList.add('gold');
        }
    }
    else if(l=='d' && c==2)
    {
        if(A[2][0]==1)
            cross(); 
        else
            circle();
        for(let i=0;i<3;i++)
        {
            A[i][2-i]=2;
            document.getElementById(`B${i}${2-i}`).classList.add('gold');
        }
    }
    else if(l=='r')
    {
        if(A[c][0]==1)
            cross(); 
        else
            circle();
        for(let i=0;i<3;i++)
        {
            A[c][i]=2;
            document.getElementById(`B${c}${i}`).classList.add('gold');
        }
    }
    else if(l=='c')
    {
        if(A[0][c]==1)
            cross(); 
        else
            circle();
        for(let i=0;i<3;i++)
        {
            A[i][c]=2;
            document.getElementById(`B${i}${c}`).classList.add('gold');
        }
    }
    setTimeout(()=>{
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                let elem=document.getElementById(`B${i}${j}`);
                elem.classList="";
                elem.classList.add('box');
                A[i][j]=-1;
            }        
        }
        p=1;
        w=0;
        m=0;
    },2000);
}
check=function(){
    let i,j;
    for(i=0;i<3;i++)
    {
        let a=0,b=0;
        for(j=0;j<3;j++)
        {
            if(a==0 && (A[i][j]!=A[i][0] || A[i][0]==-1))
                a=1;
            if(b==0 && (A[j][i]!=A[0][i] || A[0][i]==-1))
                b=1;
        }
        if(a==0)
        {
            result('r',i);
            break;
        }
        if(b==0)
        {
            result('c',i);
            break;
        }
    }
    if(A[0][0]==A[1][1] && A[1][1]==A[2][2] && A[0][0]!=-1)
        result('d',0);
    if(A[2][0]==A[1][1] && A[1][1]==A[0][2] && A[2][0]!=-1)
        result('d',2);
}
move=function(e){
    let r=e.target.id[1];
    let c=e.target.id[2];
    if(w==1)
        return;
    if(A[r][c]!=-1)
    {
        let audio=new Audio('Tic-tac-toe-resources/wrong.wav');
        audio.play();
        return ;
    }
    m++;
    let audio=new Audio('Tic-tac-toe-resources/normal.wav');
    audio.play();
    if(p==1)
    {
        e.target.classList.add('cross');
        A[r][c]=1;
        p=0;
    }
    else
    {
        e.target.classList.add('circle');
        A[r][c]=0;
        p=1;
    }
    check();
    if(m==9)
    {
        result('n',0);
    }

}
document.getElementById('board').addEventListener('click',move);
