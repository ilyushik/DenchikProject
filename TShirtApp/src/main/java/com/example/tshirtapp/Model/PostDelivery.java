package com.example.tshirtapp.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "post_delivery")
public class PostDelivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "city")
    private String city;

    @Column(name = "postOffice")
    public int postOffice;

    @OneToMany(mappedBy = "postDelivery")
    private List<Order> orders;

    public PostDelivery() {
    }

    public PostDelivery(int id, String city, int postOffice, List<Order> orders) {
        this.id = id;
        this.city = city;
        this.postOffice = postOffice;
        this.orders = orders;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPostOffice() {
        return postOffice;
    }

    public void setPostOffice(int postOffice) {
        this.postOffice = postOffice;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
