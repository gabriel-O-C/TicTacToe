// VARIABLES
let game = [];
let board = [];
let whoPlays = 0; // 0 = player, 1 = CPU
let verify;
let playing = true;
let lvl = 1;
let cpuPlay = 1;
let whoStarts = 1;

// END OF VARIABLES

// FUNCTIONS

// SELECT POSITION FUNCTIONS
function cpuPlays(){
    if(playing){
        let row, column;
        if(lvl === 1){
            do{
                row = Math.round(Math.random() * 2);
                column = Math.round(Math.random() * 2);
            }while(game[row][column] != ""){
                game[row][column] = "O";
            }
        }else if( lvl === 2){
            console.log("...");
        } // implement lvl 2

        
        boardUpdate();
        whoPlays = 0;

        verify = verifyWin();
        if(verify != ""){
            if(verify === "X"){
                alert(verify + " WIN!");
            }else if(verify === "O"){
                alert(verify + " WIN!")
            }else{
                alert("DRAW!")
            }
            playing = false;
            
        }
    }
}


function play(p){ // p as position 
    if((playing) && (whoPlays === 0)){
        switch(p){ // p as position
            case 1:
                if(game[0][0] === ""){
                    game[0][0] = "X"
                    whoPlays = 1;
                }
            break;
            case 2:
                if(game[0][1] === ""){
                    game[0][1] = "X"
                    whoPlays = 1;
                }
            break;
            case 3:
                if(game[0][2] === ""){
                    game[0][2] = "X"
                    whoPlays = 1;
                }
            break;
            case 4:
                if(game[1][0] === ""){
                    game[1][0] = "X"
                    whoPlays = 1;
                }
            break;
            case 5:
                if(game[1][1] === ""){
                    game[1][1] = "X"
                    whoPlays = 1;
                }
            break;
            case 6:
                if(game[1][2] === ""){
                    game[1][2] = "X"
                    whoPlays = 1;
                }
            break;
            case 7:
                if(game[2][0] === ""){
                    game[2][0] = "X"
                    whoPlays = 1;
                }
            break;
            case 8:
                if(game[2][1] === ""){
                    game[2][1] = "X"
                    whoPlays = 1;
                }
            break;
            case 9:
                if(game[2][2] === ""){
                    game[2][2] = "X"
                    whoPlays = 1;
                }
            break;
        }
        if(whoPlays === 1){
            boardUpdate();
            verify = verifyWin();
            if(verify != ""){
                if(verify === "X"){
                    alert(verify + " WIN!");
                }else if(verify === "O"){
                    alert(verify + " WIN!")
                }else{
                    alert("DRAW!")
                }
                playing = false;
                
            }
            
        }
        cpuPlays();
        
       
    }

}

// END OF SELECT POSITION FUNCTIONS

// UI FUNCTION 
function boardUpdate(){
    for(let i = 0; i < 3; i++){ // i as row 
        for(let j = 0; j < 3; j++){ // j as column
            if(game[i][j] === "X"){
                board[i][j].innerHTML = "X";
                board[i][j].style.cursor = "default";
            }else if(game[i][j] === "O"){
                board[i][j].innerHTML = "O";
                board[i][j].style.cursor = "default";

            }else{
                board[i][j].innerHTML = "";
                board[i][j].style.cursor = "pointer";
            }
        }
    }
}

// END OF UI FUNCTION


function verifyWin(){
    let row, column, result;
    for(row = 0; row < 3; row++){ // win in the rows
        if((game[row][0] === game[row][1] &&  game[row][1] === game[row][2])){
            result = game[row][0];
        }

    }
    for(column = 0; column < 3; column++){ // win in the column
        if((game[0][column] === game[1][column] &&  game[1][column] === game[2][column])){
            result = game[0][column];
        }

    }
    // MAIN DIAGONAL 
    if(game[0][0] === game[1][1] && game[1][1] === game[2][2]){
        result = game[0][0];
    }
    
    // SECOND DIAGONAL

    if(game[0][2] === game[1][1] && game[1][1] === game[2][0]){
        result = game[0][2];
    }

    // DRAW

    if(result === ""){
        let fullCamps = 0;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(game[i][j] != ""){
                    fullCamps++;
                }
            }
        }
        if(fullCamps === 9){
            result = "D";
        }
    }
    return result;
}

function start(){
    playing = true;
    cpuPlay = 1;
    game = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    board = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]

    ];
    boardUpdate();
    if(whoStarts === 1){
        whoStarts = 0;
        whoPlays = whoStarts;
        document.getElementById("who-starts").innerHTML = "WHO STARTS: PLAYER";
    }else{
        whoStarts = 1;
        whoPlays = whoStarts;
        document.getElementById("who-starts").innerHTML = "WHO STARTS: CPU";
        cpuPlays();
    }
}
// END OF THE FUNCTIONS

// EVENT LISTENERS

window.addEventListener("load",start);

// END OF THE EVENT LISTENERS