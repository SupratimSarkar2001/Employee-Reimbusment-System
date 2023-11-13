package com.demo.rest.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Department {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private int depId;
    @NotBlank(message = "Department name is mandatory")
    @Length(max=10, min=2)
    private String depName;
    @NotBlank(message = "Department code is mandatory")
    private String depCode;
}
