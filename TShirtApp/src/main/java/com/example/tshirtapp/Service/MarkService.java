package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.Mark;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Repository.MarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarkService {

    @Autowired
    private MarkRepository markRepository;

    public Mark findByProduct(Product product) {
        return markRepository.findMarkByProduct(product);
    }
}
