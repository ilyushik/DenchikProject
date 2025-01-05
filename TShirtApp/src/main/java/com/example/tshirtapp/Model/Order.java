package com.example.tshirtapp.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "purchase")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @OneToMany
    @JoinColumn(name = "cart_items")
    private List<CartItem> cartItems;

    @ManyToOne
    @JoinColumn(name = "post_delivery", referencedColumnName = "id")
    private PostDelivery postDelivery;

    @ManyToOne
    @JoinColumn(name = "courier_delivery", referencedColumnName = "id")
    private CourierDelivery courierDelivery;

    public Order() {
    }

    public Order(int id, String firstName, String lastName, String phone, String email,
                 List<CartItem> cartItems, PostDelivery postDelivery,
                 CourierDelivery courierDelivery) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.cartItems = cartItems;
        this.postDelivery = postDelivery;
        this.courierDelivery = courierDelivery;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public PostDelivery getPostDelivery() {
        return postDelivery;
    }

    public void setPostDelivery(PostDelivery postDelivery) {
        this.postDelivery = postDelivery;
    }

    public CourierDelivery getCourierDelivery() {
        return courierDelivery;
    }

    public void setCourierDelivery(CourierDelivery courierDelivery) {
        this.courierDelivery = courierDelivery;
    }
}
