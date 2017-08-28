package com.blogspot.softbysachin.springjpademo.dao;

import com.blogspot.softbysachin.springjpademo.model.Topic;
import org.springframework.data.repository.CrudRepository;

public interface TopicRepository extends CrudRepository<Topic, String> {
}
