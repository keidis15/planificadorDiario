import { agregarTarea } from "./agregarTareas.js";
import { agregarCita } from "./citas.js";
import { agregarNota } from "./notas.js";


const btnAgregarTarea = document.getElementById('agregarTarea');
btnAgregarTarea.addEventListener('click', agregarTarea);

const botonCita = document.querySelector('.agregarCita');
botonCita.addEventListener('click', agregarCita);

const btnNotas = document.getElementById('agregarNota');
btnNotas.addEventListener('click', agregarNota)

//sistema del calendario
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    let selectedMonth = currentDate.getMonth();
    let selectedYear = currentDate.getFullYear();
    const today = currentDate.getDate();
    const thisMonth = currentDate.getMonth();
    const thisYear = currentDate.getFullYear();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const daysInWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = 32 - new Date(year, month, 32).getDate();
        const calendarBody = document.querySelector('#calendar-body tbody');
        calendarBody.innerHTML = '';

        document.getElementById('month-year').textContent = `${monthNames[month]} ${year}`;

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.textContent = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.textContent = date;
                    if (date === today && month === thisMonth && year === thisYear) {
                        cell.classList.add('today');
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    document.getElementById('prev').addEventListener('click', () => {
        selectedMonth--;
        if (selectedMonth < 0) {
            selectedMonth = 11;
            selectedYear--;
        }
        renderCalendar(selectedMonth, selectedYear);
    });

    document.getElementById('next').addEventListener('click', () => {
        selectedMonth++;
        if (selectedMonth > 11) {
            selectedMonth = 0;
            selectedYear++;
        }
        renderCalendar(selectedMonth, selectedYear);
    });

    renderCalendar(selectedMonth, selectedYear);
});





