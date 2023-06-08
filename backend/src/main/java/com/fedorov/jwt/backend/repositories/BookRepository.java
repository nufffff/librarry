package com.fedorov.jwt.backend.repositories;

import com.fedorov.jwt.backend.entites.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {




}
