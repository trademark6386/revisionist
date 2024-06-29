package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;
import com.google.gson.*;
import net.minecraft.util.*;
import org.jetbrains.annotations.*;

public class GravelmonLazyPreEvolution implements PreEvolution {

    private PokemonProperties properties;
    private FormData formData;
    private Species species;
    private String rawData;
    boolean speciesInitialized = false;
    boolean formDataInitialized = false;

    public GravelmonLazyPreEvolution(String rawData, JsonDeserializationContext context) {
        this.rawData = rawData;
    }

    private PokemonProperties getProperties() {
        if (properties == null) {
            properties = PokemonProperties.Companion.parse(rawData);
        }
        return properties;
    }
    @NotNull
    @Override
    public FormData getForm() {
        if(!formDataInitialized){
            formDataInitialized = true;
            String formId = this.getProperties().getForm();
            FormData resultForm;

            if (formId != null && this.getSpecies() != null) {
                resultForm = this.getSpecies().getForms().stream()
                        .filter(form -> form.formOnlyShowdownId().equalsIgnoreCase(formId))
                        .findFirst()
                        .orElse(null);
            } else {
                resultForm = null;
            }

            if (resultForm == null && this.getSpecies()!=null) {
                resultForm = this.getSpecies().getStandardForm();
            }

            formData = resultForm;
        }

        return formData;
    }

    @NotNull
    @Override
    public Species getSpecies() {
        if(!speciesInitialized){
            speciesInitialized = true;
            if (this.getProperties().getSpecies() != null) {
                Identifier identifier = asIdentifierDefaultingNamespace(this.getProperties().getSpecies());
                Species species = PokemonSpecies.INSTANCE.getByIdentifier(identifier);
                this.species = species;
            }
        }
        return species;
    }

    public static Identifier asIdentifierDefaultingNamespace(String input, String namespace) {
        String id = input.toLowerCase();
        if (id.contains(":")) {
            return new Identifier(id.substring(0, id.indexOf(":")), id.substring(id.indexOf(":") + 1));
        } else {
            return new Identifier(namespace, id);
        }
    }

    public static Identifier asIdentifierDefaultingNamespace(String input) {
        return asIdentifierDefaultingNamespace(input, Cobblemon.MODID);
    }
}
