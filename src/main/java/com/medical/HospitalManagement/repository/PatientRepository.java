package com.medical.HospitalManagement.repository;

import com.medical.HospitalManagement.dto.PatientDto;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface PatientRepository extends MongoRepository<PatientDto, String> {
    List<PatientDto> findByLastNameContainingIgnoreCase(String lastName);

}