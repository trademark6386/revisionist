package drai.dev.gravelmon.fabric;

import drai.dev.gravelmon.*;
import net.fabricmc.api.*;
import net.fabricmc.loader.api.*;
import org.apache.commons.io.*;

import java.io.*;
import java.net.*;
import java.nio.file.FileSystem;
import java.nio.file.*;
import java.util.*;
import java.util.jar.*;
import java.util.zip.*;

import static drai.dev.gravelmon.GravelsExtendedBattles.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FabricLoader.getInstance().getConfigDir().getParent().toString()+"\\showdown\\data\\mods\\cobblemon\\";
    @Override
    public void onInitialize() {
        /*try {
            copyShowdownFolder(new File(MinecraftFolder));
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }*/
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }



    public void copyShowdownFolder(File destination) throws URISyntaxException, IOException {

        URI uri = getClass().getClassLoader().getResource("showdown").toURI();
        Path showdownFolder = null;
        if ("jar".equals(uri.getScheme())) {
            FileInputStream fs = null;
            JarInputStream Zs = null;
            ZipEntry ze = null;
            FileSystem fileSystem = FileSystems.newFileSystem(uri, Collections.emptyMap(), null);
            for (String fileName :
                    showdownFiles) {
                showdownFolder = fileSystem.getPath("showdown\\data\\mod\\cobblemon\\"+fileName);
                fs = new FileInputStream(showdownFolder.toString());
                Zs = new JarInputStream(new BufferedInputStream(fs));

                while((ze = Zs.getNextEntry()) != null){
                    System.out.println(ze.getName());
                }
            }

        } else {
            showdownFolder = Paths.get(uri);
        }
        if(showdownFolder != null){
            var showdownFolderFile = showdownFolder.toFile();
            if(showdownFolderFile.exists()){
                copyFileToDest(showdownFolder.toFile(),destination);
            }
        }
    }
    /*private List<File> unzip(Path resource) {
        List<File> files = new ArrayList<>();
        try {
            ZipInputStream zin = new ZipFile().getInputStream().getInputStream());
            ZipEntry entry = null;
            while((entry = zin.getNextEntry()) != null) {
                File file = new File(entry.getName());
                FileOutputStream  os = new FileOutputStream(file);
                for (int c = zin.read(); c != -1; c = zin.read()) {
                    os.write(c);
                }
                os.close();
                files.add(file);
            }
        } catch (IOException e) {
            log.error("Error while extract the zip: "+e);
        }
        return files;
    }*/
    public void exportShowdown(String fileName) throws Exception {
        var showdownLoc = new File(getClass().getClassLoader().getResource("showdown").getPath().toString()+"\\data\\mod\\cobblemon\\"+fileName);
        File dest = new File(MinecraftFolder +"/"+fileName);
        if(showdownLoc.exists()){
            FileUtils.copyDirectory(showdownLoc, dest);
        }
    }

    static public String exportResource(String resourceName) throws Exception {
        InputStream stream = null;
        OutputStream resStreamOut = null;
        String jarFolder;
        try {
            stream = GravelsExtendedBattles.class.getResourceAsStream("..\\..\\..\\"+resourceName);//note that each / is a directory down in the "jar tree" been the jar the root of the tree
            if(stream == null) {
                throw new Exception("Cannot get resource \"" + resourceName + "\" from Jar file.");
            }

            int readBytes;
            byte[] buffer = new byte[4096];
            jarFolder = MinecraftFolder +resourceName;
            //jarFolder = "C:\\Users\\Stijn\\Desktop\\test\\"+resourceName;
            resStreamOut = new FileOutputStream(jarFolder);
            while ((readBytes = stream.read(buffer)) > 0) {
                resStreamOut.write(buffer, 0, readBytes);
            }
        } catch (Exception ex) {
            throw ex;
        } finally {
            stream.close();
            resStreamOut.close();
        }

        return jarFolder + resourceName;
    }
}
