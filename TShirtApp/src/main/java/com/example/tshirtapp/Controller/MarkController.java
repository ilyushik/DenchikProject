package com.example.tshirtapp.Controller;

import com.example.tshirtapp.DTO.AddMarkRequest;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Service.MarkService;
import com.example.tshirtapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mark")
public class MarkController {
    @Autowired
    private MarkService markService;
    @Autowired
    private ProductService productService;

    @GetMapping("/searchMark/{id}")
    public ResponseEntity<?> findMark(@PathVariable("id") int id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(markService.markForProduct(product));
    }

    @PostMapping("/addMark")
    public ResponseEntity<?> addMark(@RequestBody AddMarkRequest addMarkRequest) {
        return ResponseEntity.ok(markService.addMark(addMarkRequest));
    }
}
