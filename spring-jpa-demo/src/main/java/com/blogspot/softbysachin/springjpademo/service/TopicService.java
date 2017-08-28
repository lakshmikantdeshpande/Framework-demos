package com.blogspot.softbysachin.springjpademo.service;

import com.blogspot.softbysachin.springjpademo.model.Topic;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TopicService {

    private List<Topic> topics = new ArrayList<>(Arrays.asList(
            new Topic("1", "Daenerys Targaryen", "Mother of dragons"),
            new Topic("2", "John Snow", "The one who knows nothing")
    ));

    public List<Topic> getAllTopics() {
        return topics;
    }

    public Topic getTopicById(String id) {
        return topics.stream().filter(topic -> topic.getId().equals(id)).findFirst().get();
    }

    public void addTopic(Topic topic) {
        topics.add(topic);
    }

    public void updateTopic(Topic topic) {
        for (int i = 0; i < topics.size(); i++) {
            if (topics.get(i).getId().equals(topic.getId())) {
                topics.set(i, topic);
                break;
            }
        }
    }

    public void deleteTopic(Topic topic) {
        topics.removeIf(t -> t.getId().equals(topic.getId()));
    }

}
