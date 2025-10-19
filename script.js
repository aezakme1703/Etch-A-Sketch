const container = document.getElementById("main__block")
const btnReload = document.querySelector(".btn")

function createElement(num){

    for (let x = 0; x < num; x++){
        const line = document.createElement("div")
        line.classList.add("line")

        for (let y = 0; y < num; y++){
            const column = document.createElement("div")
            column.classList.add("column")
            line.appendChild(column)
        }
        container.appendChild(line)
        
        line.addEventListener('mouseover', e => {
            if (e.target !== line){
                
                const randColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`
                e.target.style.backgroundColor = randColor
            }
        })

    }
}

// Обработчик для кнопки сброса
btnReload.addEventListener('click', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.style.backgroundColor = '';
    });
});

let grid = prompt(`Введите размер сетки (до 100):`)
while (grid > 100){
    grid = prompt(`Превышен лимит размерности сетки. Повтороно введите размер сетки (до 100):`)
}


createElement(grid)
