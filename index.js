let bombs=[];
let gamepoint=0;

function updategamepoint(){
    const game=document.getElementById("gamepoint");
    game.innerHTML="GamePoint "+gamepoint;

}
function remove(){
    const remove=document.getElementById("app");
    remove.innerHTML=" ";
}



function addgrid(){
    let gamegoing=true;
    const app=document.getElementById("app");
    const gamemark=document.createElement("h1");
    gamemark.id="gamepoint";
    gamemark.innerHTML="GamePoint";
    app.append(gamemark);
    for(let i=0;i<9;i++){
        const row=document.createElement("div");
        row.className="bom"
        row.style.height="60px"
        for(let j=0;j<9;j++){
            const index=i*9+j;
            const column=document.createElement("div");
            column.className="allcol"
            column.style.display="inline-block";
            column.style.height="60px";
            column.style.width="60px";
            column.style.border="1px solid black";
            column.style.textAlign='center';
            column.style.verticalAlign="center";
            column.setAttribute("index",index);
            
            column.addEventListener("click",function(){
                if(gamegoing){
                if(bombs.includes(index)){
                    column.style.backgroundColor="red";
                    gamepoint=" ";
                    gamegoing=false;
                    alert("game over");
                   
                
              
                }
                else{
                    if( column.style.backgroundColor!="green"){
                        gamepoint++;
                        column.style.backgroundColor="green";
                    }
                    
                    updategamepoint();
                }
            }
            })
            row.append(column);
        }
        app.appendChild(row);

    }
  
}


function genertatebomb(){
 while(bombs.length<11){
    const randam=Math.floor(Math.random()*100);
      if(randam<81&&!bombs.includes(randam)){
          bombs.push(randam);
      }
    }

  
}

addgrid();
genertatebomb();
console.log(bombs);
function start(){
     bombs=[];
    addgrid();
    genertatebomb()

}
