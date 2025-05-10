package com.medical.HospitalManagement.service;

import com.medical.HospitalManagement.dto.PatientDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface PatientService {

    PatientDto savePatient(PatientDto patient);

    List<PatientDto> searchPatients(String patientName);

    List<PatientDto> searchPatientInfo(String patientName);

    List<PatientDto> searchAllPatients();

    boolean deletePatientByName(String patientName);

    boolean fillExcelTemplate(String name) throws IOException;
}