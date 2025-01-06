package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.CourierDelivery;
import com.example.tshirtapp.Repository.CourierDeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourierDeliveryService {

    @Autowired
    private CourierDeliveryRepository courierDeliveryRepository;

    public CourierDelivery save(CourierDelivery courierDelivery) {
        CourierDelivery newCourierDelivery = new CourierDelivery(courierDelivery.getCity(), courierDelivery.getAddress());
        return courierDeliveryRepository.save(newCourierDelivery);
    }
}
