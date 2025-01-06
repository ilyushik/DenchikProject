package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.PostDelivery;
import com.example.tshirtapp.Repository.PostDeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostDeliveryService {

    @Autowired
    private PostDeliveryRepository postDeliveryRepository;

    public PostDelivery addPostDelivery(PostDelivery postDelivery){
        PostDelivery newPostDelivery = new PostDelivery(postDelivery.getCity(), postDelivery.getPostOffice());
        return postDeliveryRepository.save(newPostDelivery);
    }
}
