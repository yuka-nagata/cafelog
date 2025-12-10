package com.example.cafeLog

import java.time.LocalDate

data class DataRequest(
    val name: String,
    val rate : Int,
    val visitedDate: LocalDate,
    val comment: String,
    val picture: String,
    val map : String,
)
