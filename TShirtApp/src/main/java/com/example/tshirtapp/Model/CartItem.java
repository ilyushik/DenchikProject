package com.example.tshirtapp.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_item")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "product", referencedColumnName = "id")
    private Product product;

    private int amount;

    private String size;

    @ManyToOne
    @JoinColumn(name = "purchase", referencedColumnName = "id")
    private Order order;

    // Empty constructor
    public CartItem() {
    }

    // Full constructor
    public CartItem(Product product, int amount, String size, Order order) {
        this.product = product;
        this.amount = amount;
        this.size = size;
        this.order = order;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}