package drai.dev.gravelsextendedbattles.interfaces;

import java.util.*;

public interface IGravelmonConfig {
    boolean getEnableOriginalFanGameTypings();
    boolean getEnableDexResort();
    boolean getAutomaticMoveInsertion();
    List<String> getBannedLabels();
    List<String> getAllowedLabels();
    List<String> getImplementedTypes();
    List<String> getPasswords();
    boolean getShouldAddStarters();
}
