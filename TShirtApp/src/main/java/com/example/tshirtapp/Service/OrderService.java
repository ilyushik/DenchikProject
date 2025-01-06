package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.CartItem;
import com.example.tshirtapp.Model.Order;
import com.example.tshirtapp.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private PostDeliveryService postDeliveryService;
    @Autowired
    private CourierDeliveryService courierDeliveryService;

    public Order addOrder(Order order) {
        Order newOrder = new Order();
        newOrder.setFirstName(order.getFirstName());
        newOrder.setLastName(order.getLastName());
        newOrder.setPhone(order.getPhone());
        newOrder.setEmail(order.getEmail());

        if (order.getPostDelivery() != null) {
            newOrder.setPostDelivery(postDeliveryService.addPostDelivery(order.getPostDelivery()));
        } else {
            newOrder.setPostDelivery(null);
        }
        if (newOrder.getCourierDelivery() != null) {
            newOrder.setCourierDelivery(courierDeliveryService.save(order.getCourierDelivery()));
        } else {
            newOrder.setCourierDelivery(null);
        }

        orderRepository.save(newOrder);

        for (CartItem cartItem : order.getCartItems()) {
            cartItemService.add(cartItem, newOrder);
        }

        return newOrder;
    }
}
