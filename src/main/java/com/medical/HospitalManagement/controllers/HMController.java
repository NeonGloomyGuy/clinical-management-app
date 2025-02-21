package com.medical.HospitalManagement.controllers;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.repository.PatientRepository;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoIterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("data")
    public String exampleRoute2(){

        return "Hola mundoxd";
    }

}
