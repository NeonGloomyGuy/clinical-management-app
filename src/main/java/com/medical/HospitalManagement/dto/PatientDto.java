package com.medical.HospitalManagement.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Document(collection = "PatientsInfo")
public class PatientDto {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private String gender;
    private String address;
    private String phoneNumber;
    private String email;
    private String bloodType;
    private List<String> allergies;
    private List<String> chronicConditions;
}
