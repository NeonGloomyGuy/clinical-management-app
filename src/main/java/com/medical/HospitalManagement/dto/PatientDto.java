package com.medical.HospitalManagement.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "PatientsInfo")
public class PatientDto {

    @Id
    private String id;
    private String empresa;
    private String nombre;
    private String estadoCivil;
    private String fechaNacimiento;
    private String domicilio;
    private String puestoTrabajo;
    private String fecha;
    private String edad;
    private String sexo;
    private String lugar;
    private String telefono;
    private String escolaridad;
}