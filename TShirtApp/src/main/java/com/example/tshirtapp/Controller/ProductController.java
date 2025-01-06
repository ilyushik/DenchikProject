package com.example.tshirtapp.Controller;

import com.example.tshirtapp.DTO.SearchProductByFilter;
import com.example.tshirtapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> allProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") int id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping("/searchByFilter")
    public ResponseEntity<?> findProductByFilter(@RequestBody SearchProductByFilter searchProductByFilter) {
        return ResponseEntity.ok(productService.findByFilter(searchProductByFilter));
    }
}
