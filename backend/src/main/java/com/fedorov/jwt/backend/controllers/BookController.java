package com.fedorov.jwt.backend.controllers;

import com.fedorov.jwt.backend.dtos.AssignDto;
import com.fedorov.jwt.backend.entites.Book;
import com.fedorov.jwt.backend.entites.Visitor;
import com.fedorov.jwt.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/getBooks")
    public ResponseEntity<List<Book>> getBooks() {
        var x = bookService.getBooks();
        return ResponseEntity.ok(x);
    }

    @GetMapping("/getBook/{id}")
    public ResponseEntity<Book> getBook(@PathVariable("id") Long id) {
        var book = bookService.getBook(id);
        return ResponseEntity.ok(book);
    }

    @GetMapping("/getBookVisitor/{id}")
    public ResponseEntity<Visitor> getBookVisitor(@PathVariable("id") Long id) {
        var book = bookService.getBook(id);
        return ResponseEntity.ok(book.getOwner());
    }

    @GetMapping("/releaseBook/{id}")
    public ResponseEntity<String> releaseBook(@PathVariable("id") Long id) {
        bookService.releaseBook(id);
        return ResponseEntity.ok("OK");
    }

    @PostMapping("/assignBook")
    public ResponseEntity<Visitor> assignBook(@RequestBody AssignDto assignDto){
        Long idBook = assignDto.getIdBook();
        Long idVisitor = assignDto.getIdVisitor();

        var vis = bookService.assignBook(idBook, idVisitor);
        return ResponseEntity.ok(vis);
    }

    @PostMapping("/addBook")
    public ResponseEntity<String> assignBook(@RequestBody Book book){
        bookService.saveBook(book);
        return ResponseEntity.ok("OK");
    }
}
