package com.blogspot.softbysachin.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @ResponseBody
    @RequestMapping("/controllers")
    public String sayHello() {
        return "Hello";
    }

}
