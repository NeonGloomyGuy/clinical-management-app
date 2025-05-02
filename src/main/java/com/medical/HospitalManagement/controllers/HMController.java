package com.medical.HospitalManagement.controllers;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.service.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/patients")
public class HMController {

    private final PatientService patientService;

    @Autowired
    public HMController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/allPatients")
    public ResponseEntity<List<PatientDto>> getAllPatients() {
        log.info("Request received: GET all patients");
        List<PatientDto> patients = patientService.searchAllPatients();
        return ResponseEntity.ok(patients);
    }

    @PostMapping("/createPatient")
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patient) {
        log.info("Request received: POST create patient");
        PatientDto savedPatient = patientService.savePatient(patient);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPatient);
    }

    @GetMapping("/searchPatient")
    public ResponseEntity<List<PatientDto>> searchPatientsByName(@RequestParam String name) {
        log.info("Request received: GET search patient by name: {}", name);
        List<PatientDto> results = patientService.searchPatients(name);
        return ResponseEntity.ok(results);
    }

    @DeleteMapping("/deletePatient")
    public ResponseEntity<String> deletePatientByName(@RequestParam String name) {
        log.info("Request received: DELETE patient with name = {}", name);
        boolean deleted = patientService.deletePatientByName(name);

        if (deleted) {
            return ResponseEntity.ok("Patient with name '" + name + "' successfully deleted.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No patient found with name '" + name + "'.");
        }
    }
}
