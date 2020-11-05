function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysArray = document.getElementById('days');


for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysOfMonth = dezDaysList[index]
    let addElementDays = document.createElement('li')
    addElementDays.className = 'days'
    if (daysOfMonth == 24 || daysOfMonth == 25 || daysOfMonth == 31) {
        addElementDays.classList.add('holiday')
    }
    if (daysOfMonth == 4 || daysOfMonth == 11 || daysOfMonth == 18 || daysOfMonth == 25) {
        addElementDays.classList.add('friday')
    }
    addElementDays.innerHTML = daysOfMonth
    daysArray.appendChild(addElementDays)
}


function holidayButton(buttonName) {
    let buttonLocal = document.getElementsByClassName('buttons-container')
    let addButton = document.createElement('button');
    addButton.innerText = buttonName;
    addButton.setAttribute('id', 'btn-holiday')
    for (let index = 0; index < buttonLocal.length; index += 1) {
        buttonLocal[index].appendChild(addButton)
    }

}

holidayButton('Feriado')

let clickHoliday = document.getElementById('btn-holiday')
clickHoliday.addEventListener('click', changeHolidayClick)

function changeHolidayClick() {
    let holidayCurrentColor = document.getElementsByClassName('holiday')
    for (let index = 0; index < holidayCurrentColor.length; index += 1) {
        if (holidayCurrentColor[index].style.backgroundColor == "rgb(238, 238, 238)" || holidayCurrentColor[index].style.backgroundColor == '') {
            holidayCurrentColor[index].style.backgroundColor = "rgb(20, 184, 20)"
            holidayCurrentColor[index].style.color = "white"
        }
        else {
            holidayCurrentColor[index].style.backgroundColor = "rgb(238, 238, 238)"
            holidayCurrentColor[index].style.color = "#777"
        }
    }
}

function fridayButton(buttonName) {
    let buttonLocal = document.getElementsByClassName('buttons-container')
    let addButton = document.createElement('button');
    addButton.innerText = buttonName;
    addButton.setAttribute('id', 'btn-friday')
    for (let index = 0; index < buttonLocal.length; index += 1) {
        buttonLocal[index].appendChild(addButton)
    }

}

fridayButton('Sextou!')

let clickFriday = document.getElementById('btn-friday');
clickFriday.addEventListener('click', changeTextFriday);
let aux = [];
function changeTextFriday() {
    let fridayDays = document.getElementsByClassName('friday')
    for (let index = 0; index < fridayDays.length; index += 1) {

        if (fridayDays[index].innerText != 'Sextou!') {
            aux.push(fridayDays[index].innerHTML)
            fridayDays[index].innerText = "Sextou!"
            fridayDays[index].style.color = "cyan"
        }
        else {
            fridayDays[index].innerHTML = aux[index]
        }
    }
}

function zoomEffect() {
    let mouseHover = document.querySelectorAll('.days')
    for (index = 0; index < mouseHover.length; index += 1) {
        mouseHover[index].addEventListener('mouseover', function (event) {
            event.target.style.fontSize = "25px"
        })
        mouseHover[index].addEventListener('mouseout',function(event){
            event.target.style.fontSize = ""})
    }
}

zoomEffect()