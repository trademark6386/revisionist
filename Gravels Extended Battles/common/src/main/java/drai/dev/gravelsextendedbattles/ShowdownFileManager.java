package drai.dev.gravelsextendedbattles;

import java.io.*;
import java.nio.file.*;

public class ShowdownFileManager {
    public static void renameFile(String originalFilePath, String newFilePath) throws IOException {
        Path source = Paths.get(originalFilePath);
        Path destination = Paths.get(newFilePath);
//        File presentFile = destination.toFile();
//        if(!presentFile.exists()) {
//            presentFile.delete();
//        }
        Files.move(source, destination, StandardCopyOption.REPLACE_EXISTING);
    }

    static public String exportResource(String minecraftFolder,String resourceName) throws Exception {
        String jarFolder = minecraftFolder +resourceName;
        try (InputStream stream = GravelsExtendedBattles.class.getResourceAsStream(resourceName); OutputStream resStreamOut = new FileOutputStream(jarFolder)){
            if(stream == null) {
                throw new Exception("Cannot get resource \"" + resourceName + "\" from Jar file.");
            }

            int readBytes;
            byte[] buffer = new byte[4096];
            Files.createDirectories(new File(minecraftFolder).toPath());
            //jarFolder = "C:\\Users\\Stijn\\Desktop\\test\\"+resourceName;

            while ((readBytes = stream.read(buffer)) > 0) {
                resStreamOut.write(buffer, 0, readBytes);
            }

        } catch (Exception ex) {
            throw ex;
        }

        return jarFolder + resourceName;
    }
}
