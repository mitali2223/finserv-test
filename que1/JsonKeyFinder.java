
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

public class JsonKeyFinder {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.err.println("missing args");
            System.exit(1);
        }

        String prn = args[0];
        String json_path = args[1];

        try {
            JSONObject jsonobj = readJsonFile(json_path);

            Object dest = findKey(jsonobj, "destination");
            if (dest == null) {
                System.err.println("not found");
                System.exit(1);
            }

            String str = randomStr(8);

            String val = prn + dest.toString() + str;

            String md5Hash = hash(val);

            System.out.println(md5Hash + ";" + str);

        } catch (IOException e) {
            System.err.println("err in json " + e.getMessage());
            System.exit(1);
        } catch (NoSuchAlgorithmException e) {
            System.err.println("err in md5 " + e.getMessage());
            System.exit(1);
        }
    }

    private static JSONObject readJsonFile(String fp) throws IOException {
        try (Reader r = new FileReader(fp)) {
            JSONTokener t = new JSONTokener(r);
            return new JSONObject(t);
        }
    }

    private static Object findKey(JSONObject jsonobj, String key) {
        return rFindKey(jsonobj, key);
    }

    private static Object rFindKey(JSONObject jsonobj, String key) {
        if (jsonobj.has(key)) {
            return jsonobj.get(key);
        }

        for (String currKey : jsonobj.keySet()) {
            Object value = jsonobj.get(currKey);
            if (value instanceof JSONObject) {
                Object best_val = rFindKey((JSONObject) value, key);
                if (best_val != null) {
                    return best_val;
                }
            }
        }
        return null;
    }

    private static String randomStr(int l) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder sb = new StringBuilder(l);
        Random rand = new Random();
        for (int i = 0; i < l; i++) {
            int index = rand.nextInt(chars.length());
            sb.append(chars.charAt(index));
        }
        return sb.toString();
    }

    private static String hash(String input) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] hashBytes = md.digest(input.getBytes());
        StringBuilder hexStr = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexStr.append('0');
            }
            hexStr.append(hex);
        }
        return hexStr.toString();
    }
}
