package com.fedorov.jwt.backend.services;

import com.fedorov.jwt.backend.entites.Book;
import com.fedorov.jwt.backend.entites.Visitor;
import com.fedorov.jwt.backend.repositories.VisitorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
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
