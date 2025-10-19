const main__block = document.getElementById("main__block")
const btnResize = document.querySelector(".btn-resize")
const btnReload = document.querySelector(".btn-reload")



function createElement(num){
    // Очищаем существующую сетку
    main__block.innerHTML = ''
    for (let x = 0; x < num; x++){
        const line = document.createElement("div")
        line.classList.add("line")

        for (let y = 0; y < num; y++){
            const column = document.createElement("div")
            column.classList.add("column")
            line.appendChild(column)
        }
        main__block.appendChild(line)
        
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


let gridSize = 12
// Обработчик для кнопки сброса
btnReload.addEventListener('click', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.style.backgroundColor =`rgb(255, 255, 255)`;
    });
});

// Обработчик для изменения размерности сетки
btnResize.addEventListener('click', () => {
    let input = prompt(`Введите размер сетки (1 - 40):`)
    if (input === null || isNaN(parseInt(input))){
        gridSize = 12
    }
    else{
        let newSize = parseInt(input)   
        while (newSize > 40 || newSize < 1){
            input = prompt(`Превышен лимит размерности сетки. Повтороно введите размер сетки (1 - 40):`)
            if (input === null || isNaN(parseInt(input))){
                gridSize = 12
                break
            }
            newSize = parseInt(input)
        }
        if (newSize >= 1 && newSize <= 40) {
            gridSize = newSize
        }
    }

    createElement(gridSize)
});




createElement(gridSize)
