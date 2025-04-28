/* DISPLAY CHANGE  */
const bdContainer = document.querySelector('.bd-container');

const addPatientButton = document.querySelector('.add-patient-logo');

const expedientesContainer = document.querySelector('.add-patient-container');

addPatientButton.addEventListener('click', () => {

    if(expedientesContainer.style.display === 'flex'){
        bdContainer.style.display = 'block';
        expedientesContainer.style.display = 'none';
    } else {

        bdContainer.style.display = 'none';
        expedientesContainer.style.display = 'flex';
    }

});

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


/* BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES BUTTON */

const ddwMAContent = document.getElementById('dropdown_menu_allergies_content');
const ddwMAButton = document.querySelector('.dropdown-menu-allergies-button');

ddwMAButton.addEventListener('click', () => {

    if(ddwMAContent.style.display === 'block') {
        ddwMAContent.style.display = 'none';
    } else {
        ddwMAContent.style.display = 'block';
    }
});

/* BD - EXPEDIENTE - DROPDDOWN MENU ALLERGIES FETCH ALLERGIES FROM ALLERGIES MANAGER */

var arrayAllergiesInMan = []; 
var allergiesDivsInMan = allergiesManager.querySelectorAll('div');

allergiesDivsInMan.forEach(div => {
    arrayAllergiesInMan.push(div.textContent.trim());
});

for(let i=0; i<allergiesDivsInMan.length; i++) {

    ddwMAContent.innerHTML += "<div id='allergie_'"+i+"'>"+arrayAllergiesInMan[i]+"<img class='plus_allergie' src='imgs/addAllergie.png'></div>"
}

console.log(arrayAllergiesInMan);


/* BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES PLUS ALLERGIE*/

const selectedAllergiesContainer = document.getElementById('selected_allergies');
const iconPlusAllergie = document.querySelectorAll('.plus_allergie');

iconPlusAllergie.forEach(icon => {
    icon.addEventListener('click', () => {
        var parentDiv = icon.parentElement;
        var parentDivText = parentDiv.textContent.trim();
        selectedAllergiesContainer.innerHTML += `<div>${parentDivText}</div>`;
    })
});

/* BD - EXPEDIENTE - GET DATA FROM NEW PATIENT */
     //var allergiesContainers = document.getElementById('selected_allergies').querySelectorAll('span');
     //var numOfAllergies = allergiesContainers.length;

     //var allergies = [];

     //for(var i = 0; i < numOfAllergies; i++) {
       // allergies.push(allergiesContainers[i].textContent.trim());
     //}
document.getElementById('savePatient').addEventListener('click', () => {
    var jsonData = JSON.stringify({
        nombre: document.getElementById('nombre').value,
        edad: parseInt(document.getElementById('edad').value),
        tipo_sanguineo: document.getElementById('tipo_sanguineo').value,
        peso: parseFloat(document.getElementById('peso').value),
        estatura: parseFloat(document.getElementById('estatura').value),

        //alergias: allergies
    });
     fetch("http://localhost:8080/demo/api/v1/savePatient", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se enviaron los datos");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Datos enviados con éxito:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

/* BD - TABLE - FETCH PATIENTS */

const tableBody = document.getElementById('table_body');
var tableRowsArray = tableBody.querySelectorAll('tr');


fetch("http://localhost:8080/demo/api/v1/getPatients", {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer <tu_token_aqui>"  // Si es necesario
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
            data.forEach((patient) => {
                console.log(`Paciente: ${patient.firstName} ${patient.lastName}`);
                tableBody.innerHTML += `<tr><td>${patient.firstName}</td><tr>`;
            });
        } else {
            console.error("La respuesta no es un array.");
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });

















