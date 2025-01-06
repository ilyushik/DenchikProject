package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.CartItem;
import com.example.tshirtapp.Model.Order;
import com.example.tshirtapp.Repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem add(CartItem cartItem, Order order) {
        CartItem cartItem1 = new CartItem(cartItem.getProduct(), cartItem.getAmount(), cartItem.getSize(), order);
//        order.addCartItem(cartItem1);
        return cartItemRepository.save(cartItem1);
    }
}
