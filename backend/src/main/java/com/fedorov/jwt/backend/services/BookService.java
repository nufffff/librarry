package com.fedorov.jwt.backend.services;

import com.fedorov.jwt.backend.entites.Book;
import com.fedorov.jwt.backend.entites.Visitor;
import com.fedorov.jwt.backend.repositories.BookRepository;
import com.fedorov.jwt.backend.repositories.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BookService {

    private final BookRepository bookRepository;

    private final VisitorRepository visitorRepository;

    @Autowired
    public BookService(BookRepository bookRepository, VisitorRepository visitorRepository) {
        this.bookRepository = bookRepository;
        this.visitorRepository = visitorRepository;
    }

    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    public Book getBook(Long id){
        var x = bookRepository.findById(id);
        if (x.isPresent())
            return x.get();
        else throw new NoSuchElementException("no book with id" + id.toString());
    }

    public void releaseBook(Long id){
        var book = bookRepository.findById(id).get();
        System.out.println(book.getId());
        book.setOwner(null);
        System.out.println("hello");
        bookRepository.save(book);
    }

    public Visitor assignBook(Long idBook, Long idVisitor){
        var book = bookRepository.findById(idBook).get();
        var visitor = visitorRepository.findById(idVisitor).get();
        book.setOwner(visitor);
        bookRepository.save(book);
        return visitor;
    }

    public void saveBook(Book book){
        bookRepository.save(book);
    }

}
