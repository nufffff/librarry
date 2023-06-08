package com.fedorov.jwt.backend.controllers;

import com.fedorov.jwt.backend.entites.Book;
import com.fedorov.jwt.backend.entites.Visitor;
import com.fedorov.jwt.backend.services.VisitorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VisitorsController {

    private final VisitorService visitorService;

    public VisitorsController(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    @GetMapping("/getVisitors")
    public ResponseEntity<List<Visitor>> getVisitors() {
        var x = visitorService.getVisitors();
        return ResponseEntity.ok(x);
    }

    @GetMapping("/getVisitor/{id}")
    public ResponseEntity<Visitor> getVisitor(@PathVariable("id") Long id) {
        var visitor = visitorService.getVisitor(id);
        return visitor.map(ResponseEntity::ok).orElse(null);
    }

    @GetMapping("/getVisitorBookList/{id}")
    public ResponseEntity<List<Book>> getBookList(@PathVariable("id") Long id){
        return ResponseEntity.ok(visitorService.getBookList(id));
    }
    @PostMapping("/addVisitor")
    public ResponseEntity<String> assignBook(@RequestBody Visitor visitor){
        visitorService.saveVisitor(visitor);
        return ResponseEntity.ok("OK");
    }
}
