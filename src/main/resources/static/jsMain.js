/* DISPLAY CHANGE  */
const bdContainer = document.querySelector('.bd-container');

/* BD - SEARCH - FOCUS INPUT FROM BUTTON*/

const searchButton = document.getElementById('search_button');
const searchBar = document.getElementById('search_bar');

searchButton.addEventListener('click', () => {

    searchBar.focus();
});

/* HEADER - MENU */

const headerMenu = document.querySelector('.header-menu');
const headerMenuButton = document.querySelector('.header-menu-button');

headerMenuButton.addEventListener('click', () => {

    if(headerMenu.style.display === 'block') {
        headerMenu.style.display = 'none';
        allergiesManager.style.display = 'none';
        addAllergieInManager.style.display = 'none';
    } else {
        headerMenu.style.display = 'block';
    }
});

/* HEADER - MENU - ALLERGIES MANAGER CONTAINER */

const allergiesManager = document.getElementById('allergies_manager');
const allergiesManagerButton = document.querySelector('.allergies-manager-button');

const addAllergieInManager = document.getElementById('add_allergie_in_manager');
const addAllergieInManagerButton = document.querySelector('.add-allergie-in-manager-button')

const backToAaimIcon = document.getElementById('back_to_aaim_icon');

allergiesManagerButton.addEventListener('click', () => {

    if(allergiesManager.style.display === 'block') {
            allergiesManager.style.display = 'none';
        } else {
            allergiesManager.style.display = 'block';
        }
});

addAllergieInManagerButton.addEventListener('click', () => {

    if(addAllergieInManager.style.display === 'block') {
            allergiesManager.style.display = 'none';
            addAllergieInManager.style.display = 'block';
        } else {
            addAllergieInManager.style.display = 'block';
            allergiesManager.style.display = 'none';
        }
});

backToAaimIcon.addEventListener('click', () => {

    if(addAllergieInManager.style.display === 'block') {
            allergiesManager.style.display = 'block';
            addAllergieInManager.style.display = 'none';
        } else {
            allergiesManager.style.display = 'none';
            addAllergieInManager.style.display = 'block';
        }
});


/* BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES BUTTON

const ddwMAContent = document.getElementById('dropdown_menu_allergies_content');
const ddwMAButton = document.querySelector('.dropdown-menu-allergies-button');

ddwMAButton.addEventListener('click', () => {

    if(ddwMAContent.style.display === 'block') {
        ddwMAContent.style.display = 'none';
    } else {
        ddwMAContent.style.display = 'block';
    }
});

BD - EXPEDIENTE - DROPDDOWN MENU ALLERGIES FETCH ALLERGIES FROM ALLERGIES MANAGER

var arrayAllergiesInMan = [];
var allergiesDivsInMan = allergiesManager.querySelectorAll('div');

allergiesDivsInMan.forEach(div => {
    arrayAllergiesInMan.push(div.textContent.trim());
});

for(let i=0; i<allergiesDivsInMan.length; i++) {

    ddwMAContent.innerHTML += "<div id='allergie_'"+i+"'>"+arrayAllergiesInMan[i]+"<img class='plus_allergie' src='imgs/addAllergie.png'></div>"
}

console.log(arrayAllergiesInMan);


 BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES PLUS ALLERGIE

const selectedAllergiesContainer = document.getElementById('selected_allergies');
const iconPlusAllergie = document.querySelectorAll('.plus_allergie');

iconPlusAllergie.forEach(icon => {
    icon.addEventListener('click', () => {
        var parentDiv = icon.parentElement;
        var parentDivText = parentDiv.textContent.trim();
        selectedAllergiesContainer.innerHTML += `<div>${parentDivText}</div>`;
    })
});



/* --- BD - TABLE  --- */

/* BD - TABLE - FETCH PATIENTS */

const tableBody = document.getElementById('table_body');

function fetchPatients() {

    fetch("http://localhost:8080/clinic-app/management/api/v1/patients/allPatients", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos de los pacientes");
            }
            return response.json();  // Aquí convertimos la respuesta a un array de pacientes
        })
        .then((data) => {
            console.log("Datos de pacientes obtenidos con éxito:", data);

            // Asegúrate de que los datos sean un array
            if (Array.isArray(data)) {
                // Aquí puedes trabajar con el array de pacientes

                tableBody.innerHTML = '';

                data.forEach((patient) => {
                    console.log(`Paciente: ${patient.nombre}`);

                        const row = document.createElement('tr');

                        const nameCell = document.createElement('td');
                        const edadCell = document.createElement('td');
                        const sexoCell = document.createElement('td');
                        const fechaCell = document.createElement('td');
                        const empresaCell = document.createElement('td');

                        nameCell.textContent = patient.nombre;
                        edadCell.textContent = patient.edad;
                        sexoCell.textContent = patient.sexo;
                        fechaCell.textContent = patient.fecha;
                        empresaCell.textContent = patient.empresa;

                        row.appendChild(nameCell);
                        row.appendChild(edadCell);
                        row.appendChild(sexoCell);
                        row.appendChild(fechaCell);
                        row.appendChild(empresaCell);

                        tableBody.appendChild(row);

                });
                
            } else {
                console.error("La respuesta no es un array.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

};

document.addEventListener('DOMContentLoaded', () => {
    fetchPatients();
});

document.getElementById('reload_table_btn').addEventListener('click', () => {
    fetchPatients();
});


/* BD - TABLE - SELECT PATIENT */

tableBody.addEventListener('click', (event) => {
    const clickedRow = event.target.closest('tr');

    if (clickedRow) {

        if (clickedRow.classList.contains('selected')) {
            clickedRow.classList.remove('selected');
        } else {

            const previouslySelected = tableBody.querySelector('.selected');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected');
            }

            clickedRow.classList.add('selected');
        }

    }
});


/* BD - TABLE - LOOK PATIENT INFO */

const lookPatientBtn = document.getElementById('look_patient_btn');

lookPatientBtn.addEventListener('click', () => {

    var selectedRow = document.querySelector('.selected');
    var cells = selectedRow.querySelectorAll('td');

    if(selectedRow) {

    var patientName = cells[0].textContent;
    const encodedPatientName = encodeURIComponent(patientName);
    const url = `http://localhost:8080/clinic-app/management/api/v1/patients/searchPatient?name=${encodedPatientName}`;

    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos de los pacientes");
            }
            return response.json();  // Aquí convertimos la respuesta a un array de pacientes
        })
        .then((data) => {

            const patientData = data;
            localStorage.setItem("datosPaciente", JSON.stringify(patientData));

            // Asegúrate de que los datos sean un array
            if (Array.isArray(data)) {


                    window.location.href = "lookPatientInfo.html";

            } else {
                console.error("La respuesta no es un array.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    } else {
        console.log("No hay paciente seleccionado para mirar.");
    }

});


/* BD - TABLE - EDIT PATIENT INFO */

const editPatientBtn = document.getElementById('edit_patient_btn');

editPatientBtn.addEventListener('click', () => {

    var selectedRow = document.querySelector('.selected');
    var cells = selectedRow.querySelectorAll('td');

    if(selectedRow) {

    var patientName = cells[0].textContent;
    const encodedPatientName = encodeURIComponent(patientName);
    const url = `http://localhost:8080/clinic-app/management/api/v1/patients/searchPatient?name=${encodedPatientName}`;

    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos de los pacientes");
            }
            return response.json();  // Aquí convertimos la respuesta a un array de pacientes
        })
        .then((data) => {

            const patientData = data;
            localStorage.setItem("datosPaciente", JSON.stringify(patientData));

            // Asegúrate de que los datos sean un array
            if (Array.isArray(data)) {

                window.location.href = "editPatientInfo.html";

            } else {
                console.error("La respuesta no es un array.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    } else {
        console.log("No hay paciente seleccionado para mirar.");
    }

});


/* BD - TABLE - DELETE PATIENT */

const deleteExpedienteButton = document.getElementById('delete_expediente_btn');

deleteExpedienteButton.addEventListener('click', () => {

    var selectedRow = document.querySelector('.selected');
    var celdas = selectedRow.querySelectorAll('td');

    if(selectedRow) {

        var patientName = celdas[0].textContent;
        const encodedLastName = encodeURIComponent(patientName);
        const url = `http://localhost:8080/clinic-app/management/api/v1/patients/deletePatient?lastName=${encodedLastName}`;

        fetch(url, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo eliminar el paciente");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Paciente eliminado con éxito:", data);
            selectedRow.remove();
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    } else {
        console.log("No hay paciente seleccionado para eliminar.");
    }
});


/* BD - EXPEDIENTE - GO TO CREATE PATIENT */

const addPatientButton = document.querySelector('.add-patient-btn');

addPatientButton.addEventListener('click', () => {
    window.location.href = "createPatient.html";
});

/* BD - EXPEDIENTE - SEARCH PATIENT IN SEARCH-BAR */

const searchInput = document.getElementById('search_bar');

function searchPatient() {

    var searchValue = searchInput.value;

    if(searchValue) {

    const encodedSearchedName = encodeURIComponent(searchValue);
    const url = `http://localhost:8080/clinic-app/management/api/v1/patients/searchPatients?name=${encodedSearchedName}`;

    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos de los pacientes");
            }
            return response.json();  // Aquí convertimos la respuesta a un array de pacientes
        })
        .then((data) => {

            if (Array.isArray(data)) {

                tableBody.innerHTML = '';

                data.forEach((patient) => {
                    console.log(`Paciente: ${patient.nombre}`);

                        const row = document.createElement('tr');

                        const nameCell = document.createElement('td');
                        const edadCell = document.createElement('td');
                        const sexoCell = document.createElement('td');
                        const fechaCell = document.createElement('td');
                        const empresaCell = document.createElement('td');

                        nameCell.textContent = patient.nombre;
                        edadCell.textContent = patient.edad;
                        sexoCell.textContent = patient.sexo;
                        fechaCell.textContent = patient.fecha;
                        empresaCell.textContent = patient.empresa;

                        row.appendChild(nameCell);
                        row.appendChild(edadCell);
                        row.appendChild(sexoCell);
                        row.appendChild(fechaCell);
                        row.appendChild(empresaCell);

                        tableBody.appendChild(row);

                });

            } else {
                console.error("La respuesta no es un array.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    } else {
        console.log("No hay paciente seleccionado para mirar.");
    }

};

document.getElementById('search_button').addEventListener('click', searchPatient);
    
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchPatient();
    }
});