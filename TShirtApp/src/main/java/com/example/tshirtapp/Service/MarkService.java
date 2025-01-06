package com.example.tshirtapp.Service;

import com.example.tshirtapp.DTO.AddMarkRequest;
import com.example.tshirtapp.Model.Mark;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Repository.MarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkService {

    @Autowired
    private MarkRepository markRepository;
    @Autowired
    private ProductService productService;

    public List<Mark> findByProduct(Product product) {
        return markRepository.findMarkByProduct(product);
    }

    public double markForProduct(Product product) {
        List<Mark> marks = findByProduct(product);
        double markCount = 0;
        for (Mark mark : marks) {
            markCount += mark.getValue();
        }
        return markCount / marks.size();
    }

    public Mark addMark(AddMarkRequest addMarkRequest) {
        Product product = productService.getProductById(addMarkRequest.getProductId());
        Mark mark = new Mark(product, addMarkRequest.getMark(), 1);
        return markRepository.save(mark);
    }
}
