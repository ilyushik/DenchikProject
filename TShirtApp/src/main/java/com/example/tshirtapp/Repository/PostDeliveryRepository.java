package com.example.tshirtapp.Repository;

import com.example.tshirtapp.Model.PostDelivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDeliveryRepository extends JpaRepository<PostDelivery,Integer> {
}
