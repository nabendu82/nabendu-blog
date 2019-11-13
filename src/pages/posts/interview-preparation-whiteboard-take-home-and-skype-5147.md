---
title: 'Interview Preparation — Whiteboard, Take Home and Skype'
date: '2019-09-09T16:30:13.473Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--_rJ6xcjs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--f-il0k2B--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/rctb9alzjzp8oc4unf8d.jpeg
comments_count: 0
positive_reactions_count: 3
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/interview-preparation-whiteboard-take-home-and-skype-2b7494cc695
template: post
---
Welcome to part-17 of the series and the final part of Interview Preparation.

Below questions can be asked during a whiteboard/paper interview. You will be given a small component to make within 15–20 mins on a whiteboard/paper. You can also be asked to make a component in 15–20 mins in a jsfiddle type of environment.
Or there can be a larger take home problem, which needed to be submitted within 1–2 days.

**Question 127-** *Write a function to reverse a string?*
**Answer-**A very common whiteboard question. There is a *reverse* method available on array, so we convert it to array of string.

In the below solution str.split(''), will give [ “h”, “e”, “l”, “l”, “o” ]. Now when we do reverse() on it, it will give [ “o”, “l”, “l”, “e”, “h” ].

Now, we need to convert it back to String and we will use the join('')on the above result to return ‘**olleh**’

    function reverseString(str) {
     return str.split('').reverse().join('');
    }

    console.log(reverseString('hello')); //**olleh**

**Question 128-** *Write a function to sort an array?*
**Answer-**This can be easily done by the inbuilt sort() on array. But the syntax is a bit different and we need to pass a callback function to it.

    function ascendingArray(arr) {
    let sortedarr = arr.sort((a,b) => {
          return a > b;
        });
        return sortedarr;

    }

    console.log(ascendingArray([4,5,1,2])); //**[ 1, 2, 4, 5 ]**

**Question 129-** *Write a function to sort an array without using the in-built sort() method?*
**Answer-**This can be done by using two nested for loops. The outer loop for “i” will iterate through the whole array. The inner loop for “j” will check whether the current element is smaller then the comparing element. It then changes position.

    function ascendingWithoutSort(Arr) {
      for (var i = 1; i < Arr.length; i++) {
            for (var j = 0; j < i; j++)
              if (Arr[i] < Arr[j]) {
                var x = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = x;
          }
      }
      return Arr;

    }

    console.log(ascendingWithoutSort([4,5,1,2])); //**[ 1, 2, 4, 5 ]**

**Question 130-** *Given an array of integers and a target sum, return the first pairs that add up to the target sum. Write a function that solves this?*
**Answer-**This can be solve by solution given below, where we have two nested for loop. The we check whether *arr[j] === target — arr[i]* is true, which means we found the combination. Then we return from the function those values.

    const twoSum = (arr, target) => {
      for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
          if (arr[j] === target - arr[i]) {
            return ([arr[i], arr[j]]);
          }
        }
      }
      
    }

    const arr = [7, 0, -4, 5, 2, 3];
    console.log(twoSum(arr, 5)); **//[0, 5]**

**Question 131-** *Design a simple keyboard like below in plain CSS and HTML within 15 mins?*

![Keyboard with hover effect](https://cdn-images-1.medium.com/max/2312/1*7XtBXBvq4miV4tzSb9Fd5A.png)*Keyboard with hover effect*

**Answer-**To create this keyboard within 15 mins, you can use whatever CSS you are comfortable with. It can be done with CSS grid pretty quickly, as we have only 15 mins. The solution can be as below.

    <div class="keyboard">
            <div class="key">A</div>
            <div class="key">B</div>
            <div class="key">C</div>
            <div class="key">D</div>
            <div class="key">E</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">I</div>
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
            <div class="key">M</div>
            <div class="key">N</div>
            <div class="key">0</div>
            <div class="key">P</div>
            <div class="key">Q</div>
            <div class="key">R</div>
            <div class="key">S</div>
            <div class="key">T</div>
            <div class="key">U</div>
            <div class="key">V</div>
            <div class="key">X</div>
            <div class="key">Y</div>
            <div class="key">Z</div>
            <div class="key"></div>
            <div class="key"></div>
            <div class="key"></div>
            <div class="key"></div>
            <div class="key"></div>
            <div class="key">1</div>
            <div class="key">2</div>
            <div class="key">3</div>
            <div class="key">4</div>
            <div class="key">5</div>
            <div class="key">6</div>
            <div class="key">7</div>
            <div class="key">8</div>
            <div class="key">9</div>
            <div class="key">0</div>
        </div>

    .keyboard {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 5px;
        width: 40%;
        height: 300px;
        background: # 666666;
        padding: 5px;
    }

    .key{
        display: grid;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: white;
    }

    .key:hover{
        background: # 999999;
    }

The codepen to the is above is [here](https://codepen.io/nabendu82/pen/JmarqV).

**Question 132-** *Create a simple todo list in React within 30 mins in jsfiddle?*
**Answer-**The key here is 30 mins and the interviewer is constantly watching you code on skype or personally on laptop. So, we should not try to do any fancy stuff. Below is a solution, which have a simple react input field. On click of the button we add the enterred text in the state list array.
From within the component we iterate through the list using map to display the todo list items.

<iframe src="https://medium.com/media/81eb8d51d2981bb834a5ce53dfa097f0" frameborder=0></iframe>

**Question 133-** *Create a simple Bar Chart with the below data in React within 30 mins in jsfiddle?*

    [
     [1, 10],
     [2, 20],
     [3, 40],
     [4, 80]
    ]

**Answer-**Now we don’t have to use any external library like rechart to show the Bar Chart. So, will plain logic we can do it by the below solution.

<iframe src="https://medium.com/media/9946b976e25080208965cb18b64038d3" frameborder=0></iframe>

**Question 134-** *Create the game of connect-4 in ReactJS in 2 days time. Below are the guidelines for the same.*

    * The main window of the application displays a gameboard for playing four in a row. This consists of seven columns and six rows. The board is initially empty.
    * Game will have 2 players. Each take turns in placing a coin in a column of their choice. Coin takes the bottommost free row in that column. Each player has his / her own color coins. 
    * The main window should specify which player is to play and what color he / she plays.
    * If 1 of the 2 players achieved to have 4 coins in a row (vertically, horizontally and / or diagonal), this player has won, which is confirmed by the display of a clear message. Then the game is terminated.
    * Provide a button "New Game" which can start a new game (the game also can be restarted when it is busy, such as all boxes are filled)
    * In case you have not seen this game before, please follow this URL : http://www.youtube.com/watch?v=wbv6Adn8jsE

**Answer-**The code for the game which i created using react and redux, can be found [here](https://github.com/nabendu82/connect-4).

The main component which have the initial rendering and winning logic start from this code.

    <Fragment>
                    <div className="header__style">
                        <div className="header__text">Connect 4</div>
                        <div className="btn__style__header" onClick={() => this.reloadGame()}>New Game</div>
                    </div>
                    {this.showCurrentPlayer()} 
                    <div className="board__wrapper">
                        <div className="row__style">
                            <div className="btn__style" onClick={() => this.handleClick(0)}>Drop 0</div>
                            <div className="btn__style" onClick={() => this.handleClick(1)}>Drop 1</div>
                            <div className="btn__style" onClick={() => this.handleClick(2)}>Drop 2</div>
                            <div className="btn__style" onClick={() => this.handleClick(3)}>Drop 3</div>
                            <div className="btn__style" onClick={() => this.handleClick(4)}>Drop 4</div>
                            <div className="btn__style" onClick={() => this.handleClick(5)}>Drop 5</div>
                            <div className="btn__style" onClick={() => this.handleClick(6)}>Drop 6</div>
                        </div>
                        {this.showGrid()}
                    </div>

    </Fragment>

Now, the showGrid() shows the initial board, which is 7 columns and 6 rows.

    showGrid() {
            const items = [];
            for(let i=5; i>=0; i--) {
                const row = [];
                for(let j=0; j<7; j++) {
                    row.push(<GameCell key={j} row={j} col={i}/>)
                }
                items.push(<div className="row__style" key={i}>{row}</div>)
            }
            return items;
        }

When, a user click on a button, the handleClick() sends the column number to the action creator.

    handleClick(col) {
            console.log(
`Column number ${col}`
);
            this.props.init(col);
    }
    ...
    const mapDispatchToProps = dispatch => ({
        init: (col) => {
            dispatch(gameAction.colorColumnCell(col));
        }
    });

The action creator is simple and consists of below code.

    export const colorColumnCell = (col) =>  {
        return {type: COL_DATA, payload: col};
    };

Now, the reducer is where we maintain the state of the board and also the turn of the player. Now, the *playingBoard* is a 2-dimentional array where we save the board data in six columns.

    const initialState = {
        currentPlayer: 'red',
        playingBoard: [
            [],  //col 0
            [],  //col 1
            [],  //col 2
            [],  //col 3
            [],  //col 4
            [],   //col 5
            []   //col 6
        ]
      };

    const gameReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
          case types.COL_DATA:
            const newCol = [...state.playingBoard[action.payload], state.currentPlayer];
            const newBoard = [...state.playingBoard];
            newBoard[action.payload] = newCol;
            newState = {...state, currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red', playingBoard: newBoard};
            break;
          default:
            newState = state;
        }
        return newState;
      };

If ‘red’ player hits the “Drop 0” button, then the *playingBoard *will become *[[‘red’], [], [], [], [], [], []].*
After this if the ‘yellow’ player hits the “Drop 0” button, then the *playingBoard *will become *[[‘red’, ‘yellow’], [], [], [], [], [], []].*

The newState after each clicking of the button, will update the *playingBoard* and *currentPlayer* in the main Connect component.

    const mapStateToProps = ({ gameReducer }) => ({
        playingBoard: gameReducer.playingBoard,
        currentPlayer: gameReducer.currentPlayer
    });

This will check the below function and it will in-turn check for the winning logic in other function checkForWinning().

    showCurrentPlayer() {
            const winningCheck = this.checkForWinning();

    if(!winningCheck) {
                if(this.props.currentPlayer) {
                    return <div className="curr__style">Current Player: {this.props.currentPlayer}</div>
                } else {
                    return <div className="curr__style">Current Player: Red</div>
                }
            } else {
                return <ShowPopup closePopup={this.reloadGame.bind(this)} winner={winningCheck} />

    }

    }

Now the checkForWinning() function have the logic to check whether a player is winning horizontal, vertically or diagnolly.

    checkForWinning() {
            const { playingBoard } = this.props;
            if (playingBoard) {
                //CHecking vertically for win
                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 3; j++) { //Only need to check down 3 rows from bottom

    if (playingBoard[i][j] === 'red' && playingBoard[i][j + 1] === 'red' && playingBoard[i][j + 2] === 'red' && playingBoard[i][j + 3] === 'red') {
                            return "red";
                        }
                        if (playingBoard[i][j] === 'yellow' && playingBoard[i][j + 1] === 'yellow' && playingBoard[i][j + 2] === 'yellow' && playingBoard[i][j + 3] === 'yellow') {
                            return "yellow";
                        }

    }
                }

    //CHecking horizonatally for win
                for (let i = 0; i < 4; i++) { //Only need to check 3 column from left
                    for (let j = 0; j < 6; j++) {
                        if (playingBoard[i][j] === 'red' && playingBoard[i+1][j] === 'red' && playingBoard[i+2][j] === 'red' && playingBoard[i+3][j] === 'red') {
                            return "red";
                        }
                        if (playingBoard[i][j] === 'yellow' && playingBoard[i+1][j] === 'yellow' && playingBoard[i+2][j] === 'yellow' && playingBoard[i+3][j] === 'yellow') {
                            return "yellow";
                        }

    }
                }

    //CHecking up diagnolly for win(/)
                for (let i = 0; i < 4; i++) { //only need to check 4 row
                    for (let j = 0; j < 3; j++) {  // only need to check 3 col
                        if (playingBoard[i][j] === 'red' && playingBoard[i+1][j+1] === 'red' && playingBoard[i+2][j+2] === 'red' && playingBoard[i+3][j+3] === 'red') {
                            return "red";
                        }
                        if (playingBoard[i][j] === 'yellow' && playingBoard[i+1][j+1] === 'yellow' && playingBoard[i+2][j+2] === 'yellow' && playingBoard[i+3][j+3] === 'yellow') {
                            return "yellow";
                        }

    }
                }

    //CHecking down diagnolly for win(\)
                for (let i = 0; i < 4; i++) { //only need to check 4 row
                    for (let j = 5; j > 2; j--) { // only need to check 3 col
                        if (playingBoard[i][j] === 'red' && playingBoard[i + 1][j - 1] === 'red' && playingBoard[i + 2][j - 2] === 'red' && playingBoard[i + 3][j - 3] === 'red') {
                            return "red";
                        }
                        if (playingBoard[i][j] === 'yellow' && playingBoard[i + 1][j - 1] === 'yellow' && playingBoard[i + 2][j - 2] === 'yellow' && playingBoard[i + 3][j - 3] === 'yellow') {
                            return "yellow";
                        }

    }
                }

    //CHecking if all cell are filled without a winner
                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 7; j++) {
                        if (playingBoard[i][j] === undefined) {
                            return false;
                        }
                    }
                }

    return "no body"
            }

    return false;
        }

If any player doesn’t win we change the *currentPlayer* name and the game is like below:

![Not a winner yet](https://cdn-images-1.medium.com/max/2880/1*55S1yRO1klZXW_oGVDC00g.png)*Not a winner yet*

And if a player wins, we show a Popup with a button with the “Close” button reloading the game.

![A winner is here](https://cdn-images-1.medium.com/max/2880/1*zXSpC931f9XhwEQo4ZAZKw.png)*A winner is here*

This concludes the 17 part series on Interview Preparation. Hope you liked it. Please clap or comment to show you support :)


*[This post is also available on DEV.](https://dev.to/nabendu82/interview-preparation-whiteboard-take-home-and-skype-5147)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
