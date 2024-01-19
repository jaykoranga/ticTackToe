document.addEventListener('DOMContentLoaded', () => {
    const sound = document.getElementById("mysound");
    const tada = document.getElementById("tada");
    const blocks = document.querySelectorAll(".blocks");
    let playerTurn = "X";
    const resetButton = document.querySelector("#reset")
    let count = 0;
    let image = document.querySelector("#myimg");
    let turnDisplay = document.querySelector(".turn");
    let gameEnd = false;
    turnDisplay.textContent = ` Turn for ${playerTurn}`;
    blocks.forEach((block) => {


        block.addEventListener('click', () => {
            sound.play();
            if (block.querySelector(".text").textContent === "") {
                block.querySelector(".text").textContent = playerTurn;
                checkWin();
                toggleTurn();
                turnDisplay.textContent = ` Turn for ${playerTurn}`;
                count++;
                gameEnd = false;
                if (count == 9) {
                    turnDisplay.textContent = ` match ended`;

                }
            }

        });

    });

    function checkWin() {
        let arr = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        for (let i = 0; i < 8; i++) {
            let index1 = arr[i][0];
            let index2 = arr[i][1];
            let index3 = arr[i][2];
            if (blocks[index1].querySelector(".text").textContent !== "" && blocks[index1].querySelector(".text").textContent === blocks[index2].querySelector(".text").textContent && blocks[index2].querySelector(".text").textContent === blocks[index3].querySelector(".text").textContent) {
                document.querySelector(".result").textContent = `${playerTurn} wins`;
                tada.play();
                turnDisplay.textContent = "";
                image.setAttribute('style', 'display:block');
                gameEnd = true;
                break;
            }

        }

    }



    function toggleTurn() {
        playerTurn = (playerTurn == "X") ? "O" : "X";
    }

    resetButton.addEventListener('click', () => {
        gameEnd = false;
        playerTurn = "X";
        turnDisplay.textContent = ` Turn for ${playerTurn}`;
        document.querySelector(".result").textContent = ""
        count = 0;
        image.setAttribute('style', 'display:none')
        blocks.forEach((block) => {
            block.querySelector(".text").textContent = ""
        })
    })
});
