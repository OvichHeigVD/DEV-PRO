package controllers;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JSONController {

    @GetMapping(path="/json", headers="Accept=application/json")
    public String json() {
        JSONObject status = new JSONObject();
        status.put("status", "ok");
        status.put("id", "connected");
        status.put("data", "json controller");
        return status.toJSONString();
    }

}