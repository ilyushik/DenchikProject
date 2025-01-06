package com.example.tshirtapp.DTO;

public class AddMarkRequest {
    private int productId;
    private int mark;

    public AddMarkRequest() {
    }

    public AddMarkRequest(int productId, int mark) {
        this.productId = productId;
        this.mark = mark;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }
}
