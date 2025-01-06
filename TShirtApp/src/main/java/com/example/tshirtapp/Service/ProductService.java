package com.example.tshirtapp.Service;

import com.example.tshirtapp.DTO.SearchProductByFilter;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).orElseThrow();
    }

    public List<Product> findByFilter(SearchProductByFilter searchProductByFilter) {
        List<Product> products = productRepository.findAll();

        if (searchProductByFilter.getBrands() != null) {
            products = products.stream()
                    .filter(p -> searchProductByFilter.getBrands().contains(p.getBrand()))
                    .toList();
        }

        if (searchProductByFilter.getCategories() != null) {
            products = products.stream()
                    .filter(p -> searchProductByFilter.getCategories().contains(p.getCategory()))
                    .toList();
        }

        if (searchProductByFilter.getColors() != null) {
            products = products.stream()
                    .filter(p -> searchProductByFilter.getColors().contains(p.getColor()))
                    .toList();
        }

        if (searchProductByFilter.getMinPrice() >= 0) {
            products = products.stream()
                    .filter(p -> p.getPrice() >= searchProductByFilter.getMinPrice())
                    .toList();
        }

        if (searchProductByFilter.getMaxPrice() > 0) {
            products = products.stream()
                    .filter(p -> p.getPrice() <= searchProductByFilter.getMaxPrice())
                    .toList();
        }

        return products;
    }

}
