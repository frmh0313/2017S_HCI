import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.util.Iterator;
import java.util.Scanner;

public class JSONTEST {
    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub

//        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("src/movie.json"), "utf-8"));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("./output.json"), "utf-8"));
        String line = new Scanner(new File("src/movie.json")).useDelimiter("\\A").next();
        System.out.println(line);
        long drama=0;
        long action=0;
        long horror=0;
        long thriller=0;
        long comedy=0;
        long adventure=0;

        try {
            JSONParser parser = new JSONParser();
            JSONArray jsonArray = (JSONArray) parser.parse(line);
            Iterator<JSONObject> iterator = jsonArray.iterator();
            while(iterator.hasNext()) {
                JSONObject next = iterator.next();
                switch ((String)next.get("장르")) {
                    case "드라마":
                        drama += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                    case "액션":
                        action += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                    case "호러":
                        horror += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                    case "스릴러":
                        thriller += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                    case "코미디":
                        comedy += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                    case "어드벤처":
                        adventure += Long.parseLong((String)next.get("수익(전세계)"));
                        break;
                }
            }
            JSONArray resultArray = new JSONArray();
            JSONObject dramaObj = new JSONObject();
            dramaObj.put("장르", "드라마");
            dramaObj.put("수익", drama);
            JSONObject actionObj = new JSONObject();
            actionObj.put("장르", "액션");
            actionObj.put("수익", action);
            JSONObject horrorObj = new JSONObject();
            horrorObj.put("장르", "호러");
            horrorObj.put("수익", horror);
            JSONObject thrillerObj = new JSONObject();
            thrillerObj.put("장르", "스릴러");
            thrillerObj.put("수익", thriller);
            JSONObject comedyObj = new JSONObject();
            comedyObj.put("장르", "코미디");
            comedyObj.put("수익", comedy);
            JSONObject adventureObj = new JSONObject();
            adventureObj.put("장르", "어드벤처");
            adventureObj.put("수익", adventure);

            resultArray.add(dramaObj);
            resultArray.add(actionObj);
            resultArray.add(horrorObj);
            resultArray.add(thrillerObj);
            resultArray.add(comedyObj);
            resultArray.add(adventureObj);
            bw.write(resultArray.toString());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        bw.close();
    }
}

