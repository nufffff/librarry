package com.fedorov.jwt.backend.entites;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "books")
public class Book {

    @ManyToOne
    @JoinColumn(name = "visitor_id", referencedColumnName = "id")
    private Visitor owner;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(max = 100)
    private String title;

    @Column(nullable = false)
    @Size(max = 100)
    private String author;

    @Column(nullable = false)
    @Min(value = 868, message = "Год должен быть больше, чем 868")
    private Integer year;
}
