// // newbutton = document.createElement("button");
// // newbutton.innerText= "click me";
// // newbutton.style.backgroundColor = "red";
// // newbutton.style.color = "white";

// // let div = document.querySelector("body");
// // div.prepend(newbutton)
// // let para = document.querySelector("p");
// // //para.classList.add("newclass");
// // // para.setAttribute("class" , "newclass")
// let btn = document.querySelector("#btn");
// body = document.querySelector("body");
// let curmode = "light";
// btn.addEventListener("click", () =>{
//     if(curmode == "light"){
//         curmode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         curmode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })
// let message;
// btn.addEventListener("mouseover" , () =>{
//     if(message){
//         message.remove();
//     }
//         message = document.createElement("h1");
//         if(curmode == "light"){
//              message.innerText = "this is daytime";
//         }
//         else{
//             message.innerText = "this is night";
//         }
//         document.body.append(message);
    

//         })
    let boxes = document.querySelectorAll(".btn");
    let resetbtn = document.querySelector(".resetbtn");
    let body = document.querySelector("body");
    let newgame = document.querySelector("#newgame");
    let msg = document.querySelector("#msg"); 
    let msgcontainer = document.querySelector(".msg-container");
    let draw = document.querySelector(".draw");
    let turn0 = "true";
    let winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    boxes.forEach((box) => {
        box.addEventListener("click",() => {
            if(turn0){
                box.innerHTML ='<span style = " color: blue;">0</span>';
                turn0 = false;
            }
            else{
                box.innerHTML ='<span style = " color: red;">X</span>';
                turn0 = true;
            }
          box.disabled = "true";
          winnerchecker()
        })
    })
        newgame.addEventListener("click" ,() =>{
            for(let box of boxes){
            turn0 = "true";
            box.disabled = false;
            box.innerHTML = "";
             msgcontainer.classList.add("hide");
              draw.classList.add("hide1");

            }
        })
          resetbtn.addEventListener("click" , () =>{
            for(let box of boxes){
            turn0 = "true";
            box.disabled = false;
            box.innerHTML = "";
             draw.classList.add("hide1");
            }
        })


           const disable = () =>{
            for(let box of boxes ){
                box.disabled ="true";
            }
           }

          const showwinner =(winner) =>{
            msg.innertext = `the winner is ${winner}`
            msgcontainer.classList.remove("hide");
          }
          
          const winnerchecker = () =>{
            for(let pattern of winning)
             { 
                let pos1value0 = boxes[pattern[0]].innerHTML
                let pos1value1 = boxes[pattern[1]].innerHTML;
                let pos1value2 =boxes[pattern[2]].innerHTML;

                if(pos1value0 !=""&& pos1value1!="" && pos1value2!=""){
                    if(pos1value0 === pos1value1 && pos1value1 === pos1value2){
                    showwinner(pos1value0);
                    disable();
                    return;
                    }
                }
             }
                      let count = 0;
                        for(let box of boxes){
                            if(box.innerHTML != ""){
                                count++;
                                }
                            
                        }
                        if(count === 9){
                            draw.classList.remove("hide1");
                        }

                        }
                
            
        
          



