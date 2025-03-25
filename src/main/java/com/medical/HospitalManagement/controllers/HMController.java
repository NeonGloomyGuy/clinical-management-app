package com.medical.HospitalManagement.controllers;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.repository.PatientRepository;
import com.mongodb.client.MongoClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequestMapping("demo/api/v1")
@RestController
public class HMController {

    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private MongoClient mongoClient;


    @GetMapping("message")
    public List<PatientDto> exampleRoute(){


        return patientRepository.findAll();
}

    @PostMapping("savePatient")
    public void exampleRoute2(@RequestBody PatientDto patient){
        try{
            patientRepository.insert(patient);
        } catch (Exception e){
            log.error("Error"+ e);
        }

    }

}
