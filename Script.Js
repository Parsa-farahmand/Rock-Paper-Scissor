    let userScore = 0;
    let comScore = 0;
    let userScore_span = document.getElementById('user-socre');
    let comScore_span = document.getElementById('computer-score');
    let scoreBoard_div = document.querySelector('.score-board');
    let result_div = document.querySelector('.result > p');
    let rock_div = document.getElementById('r');
    let paper_div = document.getElementById('p');
    let scissor_div = document.getElementById('s');
function getComChoice(){
    const choices = ['r','p','s'];
    const rand = Math.floor(Math.random()*3);
    return choices[rand];
}
function convert(letter){
    if (letter === "r")  return "Rock";  
    if(letter == "p") return "Paper";
    return "Scissor"; 
    }

function victory(userChoice,comChoice){
    userScore++;
   userScore_span.innerHTML = userScore;
   comScore_span.innerHTML = comScore;
   let smallUserWord = "user".fontsize(5).sub();
   let smallComWord =  "com".fontsize(5).sub();
   result_div.innerHTML = `${convert(userChoice)} ${smallUserWord} beats ${convert(comChoice)} ${smallComWord} , You win!`;
}
function lose(userChoice,comChoice){
    comScore++;
   userScore_span.innerHTML = userScore;
   comScore_span.innerHTML = comScore;
   let smallUserWord = "user".fontsize(5).sub();
   let smallComWord =  "com".fontsize(5).sub();
   result_div.innerHTML = `${convert(comChoice)} ${smallUserWord} beats ${convert(userChoice)} ${smallComWord} , You lost...!`;
}
function draw(userChoice,comChoice){
    let smallUserWord = "user".fontsize(5).sub();
    let smallComWord =  "com".fontsize(5).sub();
    result_div.innerHTML = `${convert(userChoice)} ${smallUserWord} equals ${convert(comChoice)} ${smallComWord} , Draw!`;
}
function game(userChoice){
    const comChoice = getComChoice()
      switch (userChoice + comChoice){
     case "rs":
     case "sp":
     case "pr":
      victory(userChoice,comChoice)
         break;
         case "sr":
         case "ps":
         case "rp":
         lose(userChoice,comChoice)
         break;
            case "ss":
            case "pp":
            case "rr":
            draw(userChoice,comChoice)
      }
    }

function main() {
    rock_div.addEventListener('click',()=>{
        game("r")
    });
    paper_div.addEventListener('click',()=>{
        game("p")
    });
    scissor_div.addEventListener('click',()=>{
         game("s")
    })
}

main()