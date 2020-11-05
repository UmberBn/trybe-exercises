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
        addElementDays.className = 'days holiday'
    }
    if (daysOfMonth = 4 || daysOfMonth == 11 || daysOfMonth == 18 || daysOfMonth == 25) {
        addElementDays.className = 'days friday'
    }
    addElementDays.innerHTML = daysOfMonth
    daysArray.appendChild(addElementDays)
}



