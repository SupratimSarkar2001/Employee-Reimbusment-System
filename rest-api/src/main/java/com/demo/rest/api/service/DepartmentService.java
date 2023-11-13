package com.demo.rest.api.service;

import com.demo.rest.api.entity.Department;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface DepartmentService {
    List<Department> getAllDepartment();
    Department getDepartmentById(int id);
    Department getDepartmentByDepName(String depName);
    Department createDepartment(Department department);
    Department updateDepartment(int id,Department department);
    void deleteDepartmentById(int id);
}
