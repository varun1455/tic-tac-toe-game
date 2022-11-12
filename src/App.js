// import logo from './logo.svg';
import './App.css';


import {useState, useEffect} from 'react';

import Square from './components/Square';

import { winningpatterns } from './components/Winpattern';


function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  
  const [player, setPlayer] = useState('X');
  const [result, setResult] = useState({winner: 'none', state: 'none'});
  
  useEffect(()=>{
    checkwin();
    checktie();
    if(player=='X'){
      setPlayer('0')
    }
  
    else{
      setPlayer('X');
    }
  }, [board]);

  useEffect(()=>{
    if(result.state != 'none'){

      alert(`game finished and winner is ${result.winner}`);
    }
  }, [result]);

 

  const clickedbox = (square) =>{
    setBoard(board.map((val, index)=>{
      if(index==square && val== ""){
        return player;
      }
      return val;

    })
    );

  }



  const checkwin = () =>{
    winningpatterns.forEach((currrentpattern) =>{
        const currplayer = board[currrentpattern[0]];
        if(currplayer=="") return;
        let correctpattern = true;
        currrentpattern.forEach((idx) =>{
          if (board[idx] != currplayer){
            correctpattern = false;
          }
        })

        if(correctpattern){
          setResult({ winner:player, state: 'won'})
        }
    })

  }

  const checktie = () =>{
      let filled  = true;
      board.forEach((square)=>{
        if(square==""){
          filled = false;
        }
      });

      if(filled){
        setResult({winner:'none', state:'tie'});
      }
  }

  
  return (
    <>

    <div className='background'>

      <div className='board'>
        <div className='row'>
          <Square val ={board[0]} selectsquare = {()=>{ clickedbox(0)}}/>
          <Square val ={board[1]} selectsquare = {()=>{ clickedbox(1)}}/>
          <Square val ={board[2]} selectsquare = {()=>{ clickedbox(2)}}/>
        </div>
        <div className='row'>
          <Square val ={board[3]} selectsquare = {()=>{ clickedbox(3)}}/>
          <Square val ={board[4]} selectsquare = {()=>{ clickedbox(4)}}/>
          <Square val ={board[5]} selectsquare = {()=>{ clickedbox(5)}}/>
        </div>
        <div className='row'>
          <Square val ={board[6]} selectsquare = {()=>{ clickedbox(6)}}/>
          <Square val ={board[7]} selectsquare = {()=>{ clickedbox(7)}}/>
          <Square val ={board[8]} selectsquare = {()=>{ clickedbox(8)}}/>
        </div>

      </div>
    </div>

    </>
  );
}

export default App;
