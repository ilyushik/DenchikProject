package com.example.tshirtapp.DTO;

public class AddCommentRequest {
    private int productId;
    private String text;

    public AddCommentRequest() {
    }

    public AddCommentRequest(int productId, String text) {
        this.productId = productId;
        this.text = text;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
