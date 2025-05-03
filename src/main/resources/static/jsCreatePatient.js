const inputs = document.querySelectorAll('.dato');
inputs.forEach(input => input.value = "");


document.getElementById('savePatient').addEventListener('click', () => {
    console.log("Botón Guardar Paciente presionado");

    var jsonData = JSON.stringify({
        
        empresa: inputs[0].value,
        nombre: inputs[1].value,
        estadoCivil: inputs[2].value,
        fechaNacimiento: inputs[3].value,
        domicilio: inputs[4].value,
        puestoTrabajo: inputs[5].value,
        fecha: inputs[6].value

    });
     fetch("http://localhost:8080/clinic-app/management/api/v1/patients/createPatient", {
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

