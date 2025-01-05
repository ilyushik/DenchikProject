package com.example.tshirtapp.Controller;

import com.example.tshirtapp.DTO.SearchProductByFilter;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Service.MarkService;
import com.example.tshirtapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private MarkService markService;

    @GetMapping
    public ResponseEntity<?> allProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") int id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping("/searchByFiler")
    public ResponseEntity<?> findProductByFilter(@RequestBody SearchProductByFilter searchProductByFilter) {
        return ResponseEntity.ok(productService.findByFilter(searchProductByFilter));
    }

    @GetMapping("/searchMark/{id}")
    public ResponseEntity<?> findMark(@PathVariable("id") int id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(markService.findByProduct(product));
    }

}
