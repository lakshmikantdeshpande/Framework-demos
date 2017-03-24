package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lakshmikant on 24/3/17.
 */

@Controller
@RequestMapping("/home")
public class DemoController {

    @RequestMapping("/hello")
    @ResponseBody
    public String sayHello() {
        return "Hello there! \n";
    }
}
