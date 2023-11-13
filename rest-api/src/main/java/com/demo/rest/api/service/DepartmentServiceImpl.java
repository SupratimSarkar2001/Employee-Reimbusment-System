package com.demo.rest.api.service;

import com.demo.rest.api.entity.Department;
import com.demo.rest.api.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService{
    @Autowired
    private DepartmentRepository departmentRepository;
    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.findAll() ;
    }

    @Override
    public Department getDepartmentById(int depId) {
        return departmentRepository.findById(depId).get();
    }

    @Override
    public Department getDepartmentByDepName(String depName) {
        return departmentRepository.findByDepName(depName);
    }


    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public Department updateDepartment(int id, Department department) {
        Department departmentSaved= departmentRepository.findById(id).get();
        departmentSaved.setDepName(department.getDepName());
        departmentSaved.setDepCode(department.getDepCode());
        return departmentRepository.save(departmentSaved);
    }

    @Override
    public void deleteDepartmentById(int id) {
       departmentRepository.deleteById(id);
    }
}
