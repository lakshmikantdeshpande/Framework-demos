package com.example.model;

/**
 * Created by lakshmikant on 24/3/17.
 */
public class Customer {
    long id;
    String name;

    public Customer(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {

        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
