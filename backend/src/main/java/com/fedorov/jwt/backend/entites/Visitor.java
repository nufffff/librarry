package com.fedorov.jwt.backend.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "visitors")
public class Visitor {

    @OneToMany(mappedBy = "owner")
    @JsonIgnore
    @ToString.Exclude
    private List<Book> books;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    @Size(max = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    @Size(max = 100)
    private String lastName;

    @Column(name = "middle_name", nullable = false)
    @Size(max = 100)
    private String middleName;
}
