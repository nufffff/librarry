package com.fedorov.jwt.backend.repositories;

import com.fedorov.jwt.backend.entites.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {

}
