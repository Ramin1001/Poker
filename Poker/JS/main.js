"use strict";

let cards = document.querySelectorAll('.card');
let card_place = document.querySelectorAll('.card_box');
let cardBox = [];



// butun cartlara id verildi
for (let card of cards) {
    card.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("cardElementID", this.id);
        
        cardBox.push(card);
        
    })
}

for (let drop_place of card_place) {
    drop_place.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    
    drop_place.addEventListener("drop", function (e) {
        let id = e.dataTransfer.getData("cardElementID");

        let cardNum = document.getElementById(id).getAttribute("card-num");

        this.appendChild(document.querySelector('#' + id));       

    })
    
    for(let i=0; i<=cardBox.length-1; i++){
        if(i === cardBox[card]){
                alert("you win");
                }
            else alert("your loser");
        }
    
}

 



//    
//    if(crl == i){
//        
//        console.log('Hi');
////document.querySelector("#win.active").classList.remove("active");
////document.querySelector("#win").classList.add("active");
////        
//    }

//         let check=document.querySelector('.card')[1].getAttribute("card-num");

//if(i === check){
//           
//document.querySelector("#win.active").classList.remove("active");
//           document.querySelector("#win").classList.add("active");
//           
//      }









// document.querySelector('.dropup.active').classList.remove("active");
//
//        this.classList.add("active");
//
//
//        let btnId = this.getAttribute("data-btnId");
//
// setTimeout(function () {
//            document.querySelector(`[data-textId="${btnId}"]`).classList.add('P-active');
//        }, 1500);
