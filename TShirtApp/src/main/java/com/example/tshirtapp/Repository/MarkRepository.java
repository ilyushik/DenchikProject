package com.example.tshirtapp.Repository;

import com.example.tshirtapp.Model.Mark;
import com.example.tshirtapp.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkRepository extends JpaRepository<Mark, Integer> {
    public List<Mark> findMarkByProduct(Product product);
}
