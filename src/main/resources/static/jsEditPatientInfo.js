/* --- BD - TABLE  --- */

const inputs = document.querySelectorAll('.dato');
inputs.forEach(input => input.value = "");

document.addEventListener('DOMContentLoaded', () => {

    const patientData = JSON.parse(localStorage.getItem("datosPaciente"));
    console.log("Datos del Paciente recibido:", patientData);

    console.log(inputs);

    if(patientData && Array.isArray(patientData) && patientData.length > 0) {
        const patientDataObject = patientData[0];

        inputs[0].value = patientDataObject.empresa;
        inputs[1].value = patientDataObject.nombre;
    }

});