package com.demoFront.demoFront.persistence.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.demoFront.demoFront.entities.Persona;

public interface PersonaRepository extends CrudRepository<Persona, Integer> {

	List<Persona> findAll();
}
