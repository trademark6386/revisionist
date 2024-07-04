package drai.dev.gravelsextendedbattles.interfaces;

import java.util.*;

public interface IGravelmonConfig {
    boolean getEnableOriginalFanGameTypings();
    boolean getEnableDexResort();
    List<String> getBannedLabels();
    List<String> getAllowedLabels();
    List<String> getImplementedTypes();
    boolean getShouldAddStarters();
}
