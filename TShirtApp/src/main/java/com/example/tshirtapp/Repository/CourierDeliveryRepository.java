package com.example.tshirtapp.Repository;

import com.example.tshirtapp.Model.CourierDelivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourierDeliveryRepository extends JpaRepository<CourierDelivery, Integer> {
}
