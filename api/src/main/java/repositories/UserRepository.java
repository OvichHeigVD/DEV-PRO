package repositories;

import models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends CrudRepository<User, Integer>{ // <Model, Key>
    @Query("select u from User u where u.email = ?1")
    User findByEmailAddress(String emailAddress);
}
