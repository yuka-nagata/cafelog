package com.example.cafeLog

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CafeLogApplication

fun main(args: Array<String>) {
    runApplication<CafeLogApplication>(*args)
}
