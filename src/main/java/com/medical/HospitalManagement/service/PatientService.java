package com.medical.HospitalManagement.service;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public PatientDto savePatient(PatientDto patient) {
        return patientRepository.save(patient);
    }

    public List<PatientDto> searchPatients(String query) {
        return patientRepository.findByLastNameContainingIgnoreCase(query);
    }

    public List<PatientDto> searchAllPatients() {
        return patientRepository.findAll();
    }

    @Transactional
    public boolean deleteExactPatientByLastName(String lastName) {
        Optional<PatientDto> patientOptional = patientRepository.findFirstByLastName(lastName);

        if (patientOptional.isPresent()) {
            patientRepository.delete(patientOptional.get());
            return true;
        } else {
            return false;
        }
    }


}