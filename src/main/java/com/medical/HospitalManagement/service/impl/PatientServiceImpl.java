package com.medical.HospitalManagement.service.impl;

import com.medical.HospitalManagement.dto.PatientDto;
import com.medical.HospitalManagement.repository.PatientRepository;
import com.medical.HospitalManagement.service.PatientService;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
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

        return patientRepository.findByNombreContainingIgnoreCase(patientName);
    }

    @Override
    public List<PatientDto> searchPatientInfo(String patientName){
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

    @Override
    public boolean fillExcelTemplate(String name) throws IOException {

        List<PatientDto> patientCoincidences = patientRepository.findByNombre(name);
        if(patientCoincidences != null || !patientCoincidences.isEmpty()){
            PatientDto patient = patientCoincidences.get(0);

            FileInputStream fis = new FileInputStream("C:\\TemplatePaths\\FORMATO _NUEVO_INGRESO.xlsx");
            XSSFWorkbook workbook = new XSSFWorkbook(fis);
            XSSFSheet sheet = workbook.getSheetAt(1);

            sheet.getRow(7).getCell(4).setCellValue(patient.getEmpresa());
            sheet.getRow(8).getCell(4).setCellValue(patient.getNombre());
            sheet.getRow(9).getCell(5).setCellValue(patient.getEstadoCivil());
            sheet.getRow(10).getCell(8).setCellValue(patient.getFechaNacimiento());
            sheet.getRow(11).getCell(4).setCellValue(patient.getDomicilio());
            sheet.getRow(12).getCell(8).setCellValue(patient.getPuestoTrabajo());
            sheet.getRow(7).getCell(29).setCellValue(patient.getFecha());
            sheet.getRow(8).getCell(29).setCellValue(patient.getEdad());
            sheet.getRow(9).getCell(29).setCellValue(patient.getSexo());
            sheet.getRow(10).getCell(29).setCellValue(patient.getLugar());
            sheet.getRow(11).getCell(30).setCellValue(patient.getTelefono());
            sheet.getRow(12).getCell(31).setCellValue(patient.getEscolaridad());

            String outputFile = "FORMATO_NUEVO_INGRESO_" + patient.getNombre().replace(" ", "_");

            FileOutputStream fos = new FileOutputStream("C:\\TemplatePaths\\" + outputFile +".xlsx");
            workbook.write(fos);
            workbook.close();
            fis.close();
            fos.close();

            return true;
        }
        return false;
    }
}