package com.example.cafeLog

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.time.LocalDate

@Entity
class DataEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    val name: String,
    val rate : Int,
    val visitedDate: LocalDate?,
    val comment: String?,
    val picture: String?,
    val map : String?,
)