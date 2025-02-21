package com.medical.HospitalManagement.repository;

import com.medical.HospitalManagement.dto.PatientDto;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PatientRepository extends MongoRepository<PatientDto, String> {


}
