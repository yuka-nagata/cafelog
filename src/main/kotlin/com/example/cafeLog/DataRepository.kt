package com.example.cafeLog

import org.springframework.data.repository.CrudRepository

interface DataRepository: CrudRepository<DataEntity, Long>