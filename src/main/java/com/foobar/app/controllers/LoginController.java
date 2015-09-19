package com.foobar.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by hunterwills on 9/19/15.
 */
//@RestController
@Controller
public class LoginController {

//    @RequestMapping(method = RequestMethod.POST)
    @RequestMapping("/test")
    public String searchCitation() {
        return "THIS IS A TEST!!!";
    }
}