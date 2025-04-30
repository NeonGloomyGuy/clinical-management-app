package com.medical.HospitalManagement.controllers;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.service.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RequestMapping("/api/v1/patients")
@RestController
public class HMController {

    private final PatientService patientService;
    private static final Logger logger = LoggerFactory.getLogger(HMController.class);

    @Autowired
    public HMController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/allPatients")
    public List<PatientDto> searchPatients() {
        logger.info("Se hace petición a mongo");
        return patientService.searchAllPatients();
    }

    @PostMapping("/createPatient")
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patient) {
        return ResponseEntity.ok(patientService.savePatient(patient));
    }

    @GetMapping("/searchPatient")
    public List<PatientDto> searchPatients(@RequestParam String query) {

        return patientService.searchPatients(query);
    }

    @DeleteMapping("/deletePatient")
    public ResponseEntity<String> deleteExactPatient(@RequestParam String lastName) {
        logger.info("Received request to delete one patient with exact lastName: {}", lastName);
        boolean deleted = patientService.deleteExactPatientByLastName(lastName);

        if (deleted) {
            return ResponseEntity.ok("Successfully deleted one patient with exact lastName: " + lastName);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No patient found with exact lastName: " + lastName);
        }
    }

}