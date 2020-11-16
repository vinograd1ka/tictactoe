(function ticTacToe(){
    var inputEl = document.getElementById('change-input');
    var squaresEl = document.querySelectorAll('.square');

    squaresEl.forEach(function (entry) {
        entry.addEventListener("click", function (event){
            var div = document.createElement("div");
            div.className = "container"
            if(entry.innerHTML === '<div class="container"><img src="smile.jpg" alt=""></div>'){
                entry.innerHTML = '';
            }
            else if(entry.innerHTML === '<div class="container"><div class="add-square"></div></div>'){
                entry.innerHTML = '';
            }
            else if(entry.innerHTML === '<div class="container"><div class="add-circle"></div></div>'){
                entry.innerHTML = '';
            } else if(entry.innerHTML === '<div class="container"><div class="add-cross"></div></div>'){
                entry.innerHTML = '';
            } else if (inputEl.value === 'square'){
                div.innerHTML = '<div class="add-square"></div>';
                entry.appendChild(div);
            } else if (inputEl.value === 'cross'){
                div.innerHTML = '<div class="add-cross"></div>';
                entry.appendChild(div);
            } else if (inputEl.value === 'circle'){
                div.innerHTML = '<div class="add-circle"></div>';
                entry.appendChild(div);
            }
            else{
                div.innerHTML = '<img src="smile.jpg" alt="">';
                entry.appendChild(div);
            }
        });
    });
})();