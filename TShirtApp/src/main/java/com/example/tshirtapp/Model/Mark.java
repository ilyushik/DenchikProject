package com.example.tshirtapp.Model;

import jakarta.persistence.*;

@Entity
@Table(name="mark")
public class Mark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "product", referencedColumnName = "id")
    private Product product;

    @Column(name = "value")
    private double value;

    @Column(name = "amount")
    private int amount;

    public Mark(int id, Product product, double value, int amount) {
        this.id = id;
        this.product = product;
        this.value = value;
        this.amount = amount;
    }

    public Mark() {
    }

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

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
