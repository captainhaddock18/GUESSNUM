// inialise a number 
//then compare the input number using check button 
let a = Math.random()*100
let k = Math.round(a)
console.log(k)
count = 0
function check(){
   let inp = document.getElementById("num").value
   console.log(count)
   if(count > 10){
      alert('You have reached the limit of 10 moves, TRY AGAIN!')
      let a = Math.random()*100
      let k = Math.round(a)
      console.log(k)
      count = 0
      document.getElementById('num').value =''

   }
   else if(inp == k){
   alert("Congratulations! You're Right!")
      mes = document.getElementById("cornum")
      mes.innerText = ''
      a = Math.random()*100
      k = Math.round(a)
      console.log(k)
      count = 0
      document.getElementById('num').value =''
  
    }    

   
   /*else if(inp < k  && inp>(k-5)){
    let mes = document.getElementById("cornum")
    mes.innerText = "VERY NEAR TO THE NUMBER !!"
    count = count +1
   }
   else if(inp > k && inp<(k+5)){
    let mes = document.getElementById("cornum")
    mes.innerText = "VERY NEAR TO THE NUMBER !!"
    count = count +1
   }*/
   else if(inp < k){
      let mes = document.getElementById("cornum")
      mes.style.visibility = "visible"
      mes.innerText = "LOWER THAN THE CORRECT NUMBER, TRY AGAIN!"
      count = count +1
   }
   else if(inp > k){
    mes = document.getElementById("cornum")
    mes.style.visibility = "visible"
    mes.innerText = "HIGHER THAN THE CORRECT NUMBER, TRY AGAIN!"
    count = count +1
   }
   

   
}
function cl(){
    a = Math.random()*100
    k = Math.round(a)
    console.log(k)
    document.getElementById('num').value =''
    document.getElementById('cornum').innerText =''
    count = 0
    alert('Refreshed Successfully, Play Again!')

}

