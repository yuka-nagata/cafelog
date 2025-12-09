package com.example.cafeLog

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
class DataController (
    @Autowired val dataRepository: DataRepository
){
    @GetMapping("/api/cafe")
    fun getCafeData(): List<DataEntity> {
        val data = dataRepository.findAll()
        return data.toList()
        //return listOf(DataEntity(1,"testName",3, LocalDate.now(),"testComment","testPicture", "testMap" ))
    }

    @PostMapping("/api/cafe")
    fun postCafe(@RequestBody dataRequest: DataRequest) {
        val entity = DataEntity(
            name=dataRequest.name,
            rate=dataRequest.rate,
            visitedDate = dataRequest.visitedDate,
            comment=dataRequest.comment,
            picture=dataRequest.picture,
            map=dataRequest.map,
        )
        dataRepository.save(entity)
    }

    @DeleteMapping("api/cafe/{id}")
    fun deleteCafeById(@PathVariable id: Long) {
        dataRepository.deleteById(id)
    }
}
