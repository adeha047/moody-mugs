package com.mugsy.mugs.models;
import com.example.gtommee.rest_tutorial.models.Mugs;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface MugsRepository extends MongoRepository<Mugs, String> {
  Mugs findBy_id(ObjectId _id);
}