package com.example.cafeLog

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.time.LocalDate

@Entity
class DataEntity (
    @Id
    @GeneratedValue
    var id: Long? = null,
    val name: String,
    val rate : Number,
    val visitedDate: LocalDate?,
    val comment: String?,
    val picture: String?,
    val map : String?,
)