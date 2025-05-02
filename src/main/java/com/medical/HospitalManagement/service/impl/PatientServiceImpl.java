package com.medical.HospitalManagement.service.impl;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.repository.PatientRepository;
import com.medical.HospitalManagement.service.PatientService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {
    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public PatientDto savePatient(PatientDto patient) {
        return patientRepository.save(patient);
    }

    @Override
    public List<PatientDto> searchPatients(String patientName) {

        return patientRepository.findByNombre(patientName);
    }

    @Override
    public List<PatientDto> searchAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    @Transactional
    public boolean deletePatientByName(String patientName) {
        PatientDto patient = patientRepository.findByNombre(patientName).get(0);

        if (patient != null) {
            patientRepository.delete(patient);
            return true;
        }

        return false;
    }
}