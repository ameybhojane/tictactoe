let i=0;
let g=new Array(9);
g.fill(true);
let a= new Array(9);
a.fill("");
let xi=document.createElement("i");
xi.setAttribute("class","fas fa-times vac ");
let wontext=document.createElement("span");
wontext.innerText="  WON"
let turn=document.createElement("span");
turn.innerText=" Turn";
let dw=document.createElement("span");
dw.innerText=" Draw";

let oi=document.createElement("i");
oi.setAttribute("class","far fa-circle vac ");

document.getElementById("win").appendChild(xi);
document.getElementById("win").appendChild(turn);

function fun(n){
    //console.log(n+"hello");
    n=(Number)(n);
    if(!g[n])
    return;
    if(i%2==0){
        let x=document.getElementById(n);
        let r=document.createElement("i");
        r.setAttribute("class","fas fa-times fa-5x vac "+n)
        r.setAttribute("style","color:red ")
        // x.innerHTML="";
        x.appendChild(r);
        i++;
        document.getElementById("win").innerHTML="";
        document.getElementById("win").appendChild(oi);
        document.getElementById("win").appendChild(turn);
        g[n]=false;
        a[n]="x";
        check();
    }else{
        let x=document.getElementById(n);
        let r=document.createElement("i");
        r.setAttribute("class","far fa-circle fa-5x vac "+n)
        r.setAttribute("style","color:green ")
        // x.innerHTML="";
        x.appendChild(r);
    i++;
    document.getElementById("win").innerHTML="";
    document.getElementById("win").appendChild(xi);
    document.getElementById("win").appendChild(turn);
    g[n]=false;
    a[n]="o";
    check();
    }
}
function check(){

   if(a[0]==a[1] && a[1]==a[2] && a[1]!="")
   win(a[0],0,1,2);
   else if(a[4]==a[3] && a[3]==a[5] && a[5]!="")
   win(a[4],3,4,5);
   else if(a[7]==a[8] && a[8]==a[6] && a[6]!="")
   win(a[7],7,8,6);
   else if(a[1]==a[4] && a[4]==a[7] && a[7]!="")
   win(a[1],1,4,7);
    else if(a[2]==a[5] && a[5]==a[8] && a[8]!="")
   win(a[8],2,5,8);
   else if(a[3]==a[6] && a[6]==a[0] && a[6]!="")
   win(a[3],0,3,6);
   else if(a[0]==a[4] && a[4]==a[8] && a[4]!="")
   win(a[4],0,4,8);
   else if(a[6]==a[4] && a[4]==a[2] && a[2]!="")
   win(a[4],6,4,2);
  else if(i==9)
   draw();
}
console.log(g);
console.log(a);
function win(winner,a,b,c){
    // document.getElementsByClassName(a)[0].style.opacity=0.1;
    // document.getElementsByClassName(b)[0].style.opacity=0.1;
    // document.getElementsByClassName(c)[0].style.opacity=0.1;
    //document.getElementsByTagName("table")[0].style.opacity=0.1;
    if(winner=="x"){
        for(let k=0;k<9;k++){
            if(g[k]==false){
                if(!(k===a || k===b || k===c)){
                    document.getElementsByClassName(k)[0].style.opacity=0.3; 
                }
            }
        }
    document.getElementById("win").innerHTML="";
    document.getElementById("win").appendChild(xi);
    document.getElementById("win").appendChild(wontext);
    document.getElementById("win").style.color="red"
    document.getElementById("btn").innerText=" Play Again ";
    }
    else{ if(winner=="o")
    for(let k=0;k<9;k++){
        if(g[k]==false){
            if(!(k===a || k===b || k===c)){
                document.getElementsByClassName(k)[0].style.opacity=0.3; 
            }
        }
    }
    document.getElementById("win").innerHTML="";
    document.getElementById("win").appendChild(oi);
    document.getElementById("win").appendChild(wontext);
    document.getElementById("win").style.color="green"
    document.getElementById("btn").innerText=" Play Again ";

    
    

}

g.fill(false);
}

function draw() {
    document.getElementById("win").innerHTML=""; 
   // document.getElementById("win").appendChild(xi); 
   // document.getElementById("win").appendChild(oi);
    document.getElementById("win").appendChild(dw);
    document.getElementById("win").style.color="yellow"
    document.getElementById("btn").innerText= " Play Again ";
    g.fill(false);
    for(let k=0;k<9;k++)
    document.getElementsByClassName(k)[0].style.opacity=0.3;

}
function reset(){
    for(let j=0;j<9;j++){
        if(g[j]===false){
            let x=document.getElementById(j);
            x.innerHTML="";
            g[j]=true;
            
        }
     
    }
    g.fill(true);
    i=0;
    a.fill("");
    document.getElementById("btn").innerText=" Reset ";
    document.getElementById("win").innerText= "";
    document.getElementById("win").innerHTML="";
    document.getElementById("win").style.color="black"
    document.getElementById("win").appendChild(xi);
    document.getElementById("win").appendChild(turn);

}
