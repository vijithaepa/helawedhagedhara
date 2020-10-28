package org.wedha.hela.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author VEpa
 * @since 28/10/20
 */
@RestController
@RequestMapping("/doctor")
public class Doctor {

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getDoctors() {

        return "Doctors";
    }
}
