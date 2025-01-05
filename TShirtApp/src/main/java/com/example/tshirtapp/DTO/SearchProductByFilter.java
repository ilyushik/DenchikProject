package com.example.tshirtapp.DTO;

import java.util.List;

public class SearchProductByFilter {
    private List<String> brands;

    private List<String> categories;

    private List<String> colors;

    private double minPrice;

    private double maxPrice;

    public SearchProductByFilter() {
    }

    public SearchProductByFilter(List<String> brands, List<String> categories,
                                 List<String> colors, double minPrice, double maxPrice) {
        this.brands = brands;
        this.categories = categories;
        this.colors = colors;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }


    public List<String> getBrands() {
        return brands;
    }

    public void setBrands(List<String> brands) {
        this.brands = brands;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(double minPrice) {
        this.minPrice = minPrice;
    }

    public double getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(double maxPrice) {
        this.maxPrice = maxPrice;
    }
}
