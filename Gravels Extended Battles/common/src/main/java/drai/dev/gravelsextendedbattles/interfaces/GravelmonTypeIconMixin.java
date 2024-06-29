package drai.dev.gravelsextendedbattles.interfaces;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.*;
import net.minecraft.util.*;

public interface GravelmonTypeIconMixin {
    boolean getSmall();

    boolean getCenteredX();

    ElementalType getSecondaryType();

    float getDoubleCenteredOffset();

    float getSecondaryOffset();

    Identifier getSmallTypesResource();

    Identifier getTypesResource();

    float getSCALE();

    float getOpacity();

    void setSmallTypesResource(Identifier gravelmon);

    void setTypesResource(Identifier gravelmon);

    TypeIcon getSelf();
}
