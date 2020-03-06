package utils;

import org.json.JSONException;
import org.json.JSONObject;

public class Utils {
    public static JSONObject mergeJSON(JSONObject obj1, JSONObject obj2){
        JSONObject merged = new JSONObject();
        try{
            merged = new JSONObject(obj1, JSONObject.getNames(obj1));
            for(String crunchKey : JSONObject.getNames(obj2)){
                merged.put(crunchKey, obj2.get(crunchKey));
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return merged;
    }
}
