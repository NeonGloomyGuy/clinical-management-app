/* DISPLAY CHANGE  */
const bdContainer = document.querySelector('.bd-container');

const addPatientButton = document.querySelector('.add-patient-logo');

const expedientesContainer = document.querySelector('.add-patient-container');
const expedientesButtonMenu = document.getElementById('expedientes-button-menu');

addPatientButton.addEventListener('click', () => {

    if(expedientesContainer.style.display === 'grid'){

        bdContainer.style.display = 'block';
        expedientesContainer.style.display = 'none';
    } else {

        bdContainer.style.display = 'none';
        expedientesContainer.style.display = 'grid';
    }

});

/* HEADER - MENU */

const headerMenu = document.querySelector('.header-menu');
const headerMenuButton = document.querySelector('.header-menu-button');

headerMenuButton.addEventListener('click', () => {

    if(headerMenu.style.display === 'block') {
        headerMenu.style.display = 'none';
    } else {
        headerMenu.style.display = 'block';
    }
});

/* HEADER - MENU - ALLERGIES MANAGER CONTAINER */

const allergiesManager = document.getElementById('allergies_manager');
const allergiesManagerButton = document.querySelector('.allergies-manager-button');

allergiesManagerButton.addEventListener('click', () => {

    if(allergiesManager.style.display === 'block') {
            allergiesManager.style.display = 'none';
        } else {
            allergiesManager.style.display = 'block';
        }
});


/* BD - SEARCH - FOCUS INPUT FROM BUTTON*/

const searchButton = document.getElementById('search_button');
const searchBar = document.getElementById('search_bar');

searchButton.addEventListener('click', () => {

    searchBar.focus();
});

/* BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES BUTTON */

const ddwMAContent = document.getElementById('dropdown_menu_allergies_content');
const ddwMAButton = document.querySelector('.dropdown-menu-allergies-button');

ddwMAButton.addEventListener('click', () => {

    if(ddwMAContent.style.display === 'block') {
        ddwMAContent.style.display = "none";
    } else {
        ddwMAContent.style.display = "block";
    }
});

/* BD - EXPEDIENTE - GET ALLERGIES FROM ALLERGIES MANAGER */

allergiesManagerNumOf = allergiesManager.querySelectorAll('div').length;



/* BD - EXPEDIENTE - DROPDOWN MENU ALLERGIES PLUS ALLERGIE*/

const allergie1Text = document.getElementById('allergie_1').innerText;
const selectedAllergiesContainer = document.getElementById('selected_allergies');
const iconPlusAllergie = document.getElementById('plus_allergie');

iconPlusAllergie.addEventListener('click', () => {

    selectedAllergiesContainer.innerHTML += allergie1Text;
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











