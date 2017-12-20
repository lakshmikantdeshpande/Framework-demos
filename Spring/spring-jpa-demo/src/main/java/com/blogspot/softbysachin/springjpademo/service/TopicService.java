package com.blogspot.softbysachin.springjpademo.service;

import com.blogspot.softbysachin.springjpademo.dao.TopicRepository;
import com.blogspot.softbysachin.springjpademo.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    public List<Topic> getAllTopics() {
        List<Topic> topicsList = new ArrayList<>();
        topicRepository.findAll().forEach(topicsList::add);
        return topicsList;
    }

    public Topic getTopicById(String id) {
        return topicRepository.findOne(id);
    }

    public void addTopic(Topic topic) {
        topicRepository.save(topic);
    }

    public void updateTopic(Topic topic) {
        topicRepository.save(topic);
    }

    public void deleteTopic(Topic topic) {
        topicRepository.delete(topic.getId());
    }

}
