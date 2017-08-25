package com.blogspot.softbysachin.controllers;

import com.blogspot.softbysachin.model.Topic;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TopicController {

    @RequestMapping("/topics")
    public List<Topic> getAllTopics() {
        return Arrays.asList(
                new Topic("1", "Daenerys Targaryen", "Mother of dragons"),
                new Topic("2", "John Snow", "The one who knows nothing")
        );
    }

}
