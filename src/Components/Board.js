import React, {useState, useEffect} from "react";
import Square from "./Square";
import {winPat} from "./winPat";

//I started with some research to see what other developers did with ganes that almost the same concepts as minesweeper. I used a few tictactoe videos
//to combine to use for minesweeper. 
function Board() {

  //the first state is to create a array for all 100 blocks.
	const [cells, setCells] = useState(Array(100).fill(''));
  //the bomb below I use to start with but changed it to 1 to fill the first square
  const [bomb, setBomb] = useState('1');
  //the result state is to use when the person win
  const [result, setResult] = useState({winner:'none', status:'none'});

  useEffect(() =>{
    winPlay();
    //checkTie();
  }, [cells]);

  useEffect(() =>{
    if (result.status != 'none'){
      return;}
  }, [result]);

  //the function below is to map through all the squares and start filling the squares
  function handleClick(square) {
    setCells(cells.map((value,ind) => {
      if(ind == square && value== ""){
        return bomb
      }
      return value;
    }))

    // below is if statements for the logic of the game to work.
    if (bomb == '1' && bomb !='2'){
      setBomb('💣');
    } else if(bomb != '💣' && bomb=='2') {
      setBomb('1');
    } else {
      setBomb('2');
    }
	};

  // I created arrays of all the winning combos. Below we are continue to check if the player have won with each click.
  function winPlay () {
    winPat.forEach((currentPat) => {
      const firstMove = cells[currentPat[0]];
      if (firstMove == '') {return};
      let winnerPat = true;
      currentPat.forEach((ind) => {
        if(cells[ind] != firstMove) {
          winnerPat= false;
        }
      });

      if(winnerPat){
        setResult({winner: bomb, status:'won'});
      }
    });
  }

  //function checkTie () {
      //let filled = true;
      //cells.forEach((square) => {
       // if (square == ''){
       //   filled = false;
      //  }
      //});
//
      //if (filled) {
     //   setResult({winner:'No one', status:'Tie'})
     // }
     //}
  //};

  //below is the unction for the restart button. Below the state is change back the initial state
  function restartGame() {
      setCells(Array(100).fill(''));
      setBomb('💣');
  };

//below I created the board and each square have its own value
  return (
    <div className="board">
      <div className="row">
         <Square value={cells[0]} onClick={() => handleClick(0)}/>
         <Square value={cells[1]} onClick={() => handleClick(1)}/>
         <Square value={cells[2]} onClick={() => handleClick(2)}/>
         <Square value={cells[3]} onClick={() => handleClick(3)}/>
         <Square value={cells[4]} onClick={() => handleClick(4)}/>
         <Square value={cells[5]} onClick={() => handleClick(5)}/>
         <Square value={cells[6]} onClick={() => handleClick(6)}/>
         <Square value={cells[7]} onClick={() => handleClick(7)}/>
         <Square value={cells[8]} onClick={() => handleClick(8)}/>
         <Square value={cells[9]} onClick={() => handleClick(9)}/>
      </div>
      <div className="row">
         <Square value={cells[10]} onClick={() => handleClick(10)}/>
         <Square value={cells[11]} onClick={() => handleClick(11)}/>
         <Square value={cells[12]} onClick={() => handleClick(12)}/>
         <Square value={cells[13]} onClick={() => handleClick(13)}/>
         <Square value={cells[14]} onClick={() => handleClick(14)}/>
         <Square value={cells[15]} onClick={() => handleClick(15)}/>
         <Square value={cells[16]} onClick={() => handleClick(16)}/>
         <Square value={cells[17]} onClick={() => handleClick(17)}/>
         <Square value={cells[18]} onClick={() => handleClick(18)}/>
         <Square value={cells[19]} onClick={() => handleClick(19)}/>
      </div>
      <div className="row">
         <Square value={cells[20]} onClick={() => handleClick(20)}/>
         <Square value={cells[21]} onClick={() => handleClick(21)}/>
         <Square value={cells[22]} onClick={() => handleClick(22)}/>
         <Square value={cells[23]} onClick={() => handleClick(23)}/>
         <Square value={cells[24]} onClick={() => handleClick(24)}/>
         <Square value={cells[25]} onClick={() => handleClick(25)}/>
         <Square value={cells[26]} onClick={() => handleClick(26)}/>
         <Square value={cells[27]} onClick={() => handleClick(27)}/>
         <Square value={cells[28]} onClick={() => handleClick(28)}/>
         <Square value={cells[29]} onClick={() => handleClick(29)}/>
      </div>
      <div className="row">
         <Square value={cells[30]} onClick={() => handleClick(30)}/>
         <Square value={cells[31]} onClick={() => handleClick(31)}/>
         <Square value={cells[32]} onClick={() => handleClick(32)}/>
         <Square value={cells[33]} onClick={() => handleClick(33)}/>
         <Square value={cells[34]} onClick={() => handleClick(34)}/>
         <Square value={cells[35]} onClick={() => handleClick(35)}/>
         <Square value={cells[36]} onClick={() => handleClick(36)}/>
         <Square value={cells[37]} onClick={() => handleClick(37)}/>
         <Square value={cells[38]} onClick={() => handleClick(38)}/>
         <Square value={cells[39]} onClick={() => handleClick(39)}/>
      </div>
      <div className="row">
         <Square value={cells[40]} onClick={() => handleClick(40)}/>
         <Square value={cells[41]} onClick={() => handleClick(41)}/>
         <Square value={cells[42]} onClick={() => handleClick(42)}/>
         <Square value={cells[43]} onClick={() => handleClick(43)}/>
         <Square value={cells[44]} onClick={() => handleClick(44)}/>
         <Square value={cells[45]} onClick={() => handleClick(45)}/>
         <Square value={cells[46]} onClick={() => handleClick(46)}/>
         <Square value={cells[47]} onClick={() => handleClick(47)}/>
         <Square value={cells[48]} onClick={() => handleClick(48)}/>
         <Square value={cells[49]} onClick={() => handleClick(49)}/>
      </div>
      <div className="row">
         <Square value={cells[50]} onClick={() => handleClick(50)}/>
         <Square value={cells[51]} onClick={() => handleClick(51)}/>
         <Square value={cells[52]} onClick={() => handleClick(52)}/>
         <Square value={cells[53]} onClick={() => handleClick(53)}/>
         <Square value={cells[54]} onClick={() => handleClick(54)}/>
         <Square value={cells[55]} onClick={() => handleClick(55)}/>
         <Square value={cells[56]} onClick={() => handleClick(56)}/>
         <Square value={cells[57]} onClick={() => handleClick(57)}/>
         <Square value={cells[58]} onClick={() => handleClick(58)}/>
         <Square value={cells[59]} onClick={() => handleClick(59)}/>
      </div>
      <div className="row">
         <Square value={cells[60]} onClick={() => handleClick(60)}/>
         <Square value={cells[61]} onClick={() => handleClick(61)}/>
         <Square value={cells[62]} onClick={() => handleClick(62)}/>
         <Square value={cells[63]} onClick={() => handleClick(63)}/>
         <Square value={cells[64]} onClick={() => handleClick(64)}/>
         <Square value={cells[65]} onClick={() => handleClick(65)}/>
         <Square value={cells[66]} onClick={() => handleClick(66)}/>
         <Square value={cells[67]} onClick={() => handleClick(67)}/>
         <Square value={cells[68]} onClick={() => handleClick(68)}/>
         <Square value={cells[69]} onClick={() => handleClick(69)}/>
      </div>
      <div className="row">
         <Square value={cells[70]} onClick={() => handleClick(70)}/>
         <Square value={cells[71]} onClick={() => handleClick(71)}/>
         <Square value={cells[72]} onClick={() => handleClick(72)}/>
         <Square value={cells[73]} onClick={() => handleClick(73)}/>
         <Square value={cells[74]} onClick={() => handleClick(74)}/>
         <Square value={cells[75]} onClick={() => handleClick(75)}/>
         <Square value={cells[76]} onClick={() => handleClick(76)}/>
         <Square value={cells[77]} onClick={() => handleClick(77)}/>
         <Square value={cells[78]} onClick={() => handleClick(78)}/>
         <Square value={cells[79]} onClick={() => handleClick(79)}/>
      </div>
      <div className="row">
         <Square value={cells[80]} onClick={() => handleClick(80)}/>
         <Square value={cells[81]} onClick={() => handleClick(81)}/>
         <Square value={cells[82]} onClick={() => handleClick(82)}/>
         <Square value={cells[83]} onClick={() => handleClick(83)}/>
         <Square value={cells[84]} onClick={() => handleClick(84)}/>
         <Square value={cells[85]} onClick={() => handleClick(85)}/>
         <Square value={cells[86]} onClick={() => handleClick(86)}/>
         <Square value={cells[87]} onClick={() => handleClick(87)}/>
         <Square value={cells[88]} onClick={() => handleClick(88)}/>
         <Square value={cells[89]} onClick={() => handleClick(89)}/>
      </div>
      <div className="row">
         <Square value={cells[90]} onClick={() => handleClick(90)}/>
         <Square value={cells[91]} onClick={() => handleClick(91)}/>
         <Square value={cells[92]} onClick={() => handleClick(92)}/>
         <Square value={cells[93]} onClick={() => handleClick(93)}/>
         <Square value={cells[94]} onClick={() => handleClick(94)}/>
         <Square value={cells[95]} onClick={() => handleClick(95)}/>
         <Square value={cells[96]} onClick={() => handleClick(96)}/>
         <Square value={cells[97]} onClick={() => handleClick(97)}/>
         <Square value={cells[98]} onClick={() => handleClick(98)}/>
         <Square value={cells[99]} onClick={() => handleClick(99)}/>
      </div>
      <br/>
      <button className="startGame" onClick={restartGame}>Restart Game</button>
     </div>
  );
};

export default Board;