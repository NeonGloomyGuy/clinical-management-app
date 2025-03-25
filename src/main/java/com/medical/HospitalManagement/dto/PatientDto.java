package com.medical.HospitalManagement.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@Document(collection = "GeneralInfo")
public class PatientDto {

    @Id
    private String id;

    @Field("nombre")
    private String nombre;

    @Field("edad")
    private String edad;

    @Field("tipo_sanguineo")
    private String tipo_sanguineo;

    @Field("peso")
    private String peso;

    @Field("estatura")
    private String estatura;
}
