(function ticTacToe(){
    var inputEl = document.getElementById('change-input');
    var squaresEl = document.querySelectorAll('.square');

    squaresEl.forEach(function (entry) {
        entry.addEventListener("click", function (event){
            var div = document.createElement("div");
            var display = 'block';
            div.className = "container"

            if (inputEl.value === 'square'){
                div.innerHTML = '<div class="add-square" id="add-square"></div>';
            } else if (inputEl.value === 'cross'){
                div.innerHTML = '<div class="add-cross"></div>';
            } else if (inputEl.value === 'circle'){
                div.innerHTML = '<div class="add-circle"></div>';
            } else{
                div.innerHTML = '<img src="smile.jpg" alt="">';
                display='none';
            }

            entry.appendChild(div);
            document.getElementsByClassName('add-square').style.display=display;
        });
    });
})();