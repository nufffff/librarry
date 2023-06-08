package com.sergio.jwt.backend.services;

import com.sergio.jwt.backend.entites.Book;
import com.sergio.jwt.backend.entites.Visitor;
import com.sergio.jwt.backend.repositories.VisitorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class VisitorService {

    private final VisitorRepository visitorRepository;

    public VisitorService(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    public List<Visitor> getVisitors() {
        return visitorRepository.findAll();
    }

    public Optional<Visitor> getVisitor(Long id){
        return visitorRepository.findById(id);
    }

    public List<Book> getBookList(Long id) {
        return visitorRepository.findById(id).get().getBooks();
    }

    public void saveVisitor(Visitor visitor){
        visitorRepository.save(visitor);
    }
}
