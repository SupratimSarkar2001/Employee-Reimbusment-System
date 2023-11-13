package com.demo.rest.api.controller;

import com.demo.rest.api.entity.Department;
import com.demo.rest.api.service.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/dep")
@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    private Logger logger=  LoggerFactory.getLogger(DepartmentController.class);

    @GetMapping
    public List<Department>  getAllDepartment(){
        logger.info("ALl Data is Fetched");
        return departmentService.getAllDepartment();
    }
    @GetMapping("/{id}")
    public Department getDepartmentById(@PathVariable("id") int depId){
        logger.info("Data is Fetched by ID");
        return departmentService.getDepartmentById(depId);
    }
    @GetMapping("/name/{depName}")
    public Department getDepartmentByDepName(@PathVariable("depName") String depName){
        logger.info("Data is Fetched by Name");
        return departmentService.getDepartmentByDepName(depName);
    }
    @PostMapping
    public Department createDepartment(@Valid @RequestBody Department department){
        logger.info("New Data is Added");
        return departmentService.createDepartment(department);
    }
    @PutMapping("/{id}")
    public Department updateDepartment(@PathVariable("id") int id,@Valid @RequestBody Department department) {
        logger.info("A Data is Updated");
        return departmentService.updateDepartment(id,department);
    }
    @DeleteMapping("/{id}")
    public void deleteDepartmentById(@PathVariable("id") int id){
        logger.info("Some Data i deleted");
        departmentService.deleteDepartmentById(id);
    }

}
