package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.client.render.*;
import com.cobblemon.mod.common.client.render.models.blockbench.repository.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.fabric.*;
import kotlin.collections.*;
import net.minecraft.resource.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.io.*;
import java.nio.charset.*;
import java.util.*;
import java.util.stream.*;

import static drai.dev.gravelsextendedbattles.fabric.GravelsExtendedBattlesFabric.modeledPokemonIdentifiers;
import static drai.dev.gravelsextendedbattles.fabric.GravelsExtendedBattlesFabric.scaleNeedsARefresh;

@Mixin(VaryingModelRepository.class)
public class VaryingModelRepositoryMixin {

    @Inject(method = "registerVariations", at = @At("TAIL"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    public final void registerVariations(ResourceManager resourceManager, CallbackInfo ci) {
        if(((VaryingModelRepository)(Object)this).getType().equalsIgnoreCase("pokemon")){
            for (Object directory : ((VaryingModelRepository)(Object)this).getVariationDirectories()){
                if(directory instanceof String){
                    //TODO figure out how to read the models that are being read into the game and then note those down in a list
                    //TODO so their scale can be configured
                    resourceManager.findResources((String) directory, (identifier)-> identifier.toString().endsWith(".json")).forEach(((identifier, resource) ->
                    {
                            try {
                                //System.out.println(identifier);
                                String json = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
                                var modelVariationSet = VaryingRenderableResolver.Companion.getGSON().fromJson(json, ModelVariationSet.class);
                                //System.out.println(identifier.getNamespace()+":"+modelVariationSet.getName().getPath());
                                if(!identifier.getNamespace().equalsIgnoreCase("gravelmon")){
                                    GravelsExtendedBattlesFabric.addModeledPokemon(modelVariationSet.getName());
                                }
                            } catch (IOException e) {
                                throw new RuntimeException(e);
                            }
                    }));
                }
            }
            scaleNeedsARefresh.emit(true);
        }
    }

    /**
     * @author
     * @reason
     */
    /*@Overwrite(remap = false)
    public final void registerVariations(ResourceManager resourceManager) {
        var nameToModelVariationSets = new HashMap<Identifier, List<ModelVariationSet>>();
        for (Object directory : ((VaryingModelRepository)(Object)this).getVariationDirectories()){
            if(directory instanceof String){
                //TODO figure out how to read the models that are being read into the game and then note those down in a list
                //TODO so their scale can be configured
                resourceManager.findResources((String) directory, (identifier)-> identifier.toString().endsWith(".json")).forEach(((identifier, resource) ->
                {
                    try {
                        var json = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
                        var modelVariationSet = VaryingRenderableResolver.Companion.getGSON().fromJson(json, ModelVariationSet.class);
                        if(nameToModelVariationSets.containsKey(modelVariationSet.getName())){
                            nameToModelVariationSets.get(modelVariationSet.getName()).add(modelVariationSet);
                        }else {
                            nameToModelVariationSets.putIfAbsent(modelVariationSet.getName(), List.of(modelVariationSet));
                        }
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }));
            }
        }

        for (Map.Entry<Identifier, List<ModelVariationSet>> entry: nameToModelVariationSets.entrySet()) {
            var variations = entry.getValue().stream().sorted(Comparator.comparingInt(ModelVariationSet::getOrder))
                    .flatMap(modelVariationSet -> Stream.of(modelVariationSet.getVariations())).toList();
            ((VaryingModelRepository)(Object)this).getVariations().put(entry.getKey(),variations);
        }

        for(Object value : ((VaryingModelRepository)(Object)this).getVariations().values()){
            if(value instanceof VaryingRenderableResolver<?,?>){
                System.out.println(((VaryingRenderableResolver<?, ?>) value).getName());
                System.out.println(((VaryingRenderableResolver<?, ?>) value).getVariations());
                ((VaryingRenderableResolver<?, ?>) value).initialize(((VaryingModelRepository)(Object)this));
            }
        }
    }*/
    /**
     * @author
     * @reason
     *//*
    @Overwrite(remap = false)
    public void registerJsonPosers(ResourceManager resourceManager) {
        for (Object directory : ((VaryingModelRepository)(Object)this).getPoserDirectories()){
            if(directory instanceof String){
                //TODO figure out how to read the models that are being read into the game and then note those down in a list
                //TODO so their scale can be configured
                resourceManager.findResources((String) directory, (identifier)-> identifier.toString().endsWith(".json")).forEach(((identifier, resource) ->
                {
                    try {
                        var json = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
                        var resolvedIdentifier = new Identifier(identifier.getNamespace(), removeExtension(new File(identifier.getPath()).getName()));
                        ((VaryingModelRepository)(Object)this).getPosers().put(resolvedIdentifier, ((VaryingModelRepository)(Object)this).loadJsonPoser(json));
                        GravelsExtendedBattlesFabric.cobblemonModelIdentifiers.add(resolvedIdentifier);
                        *//*var registeredSpecies = PokemonSpecies.INSTANCE.getSpecies();
                        System.out.println("starting species check");
                        for (Species species : registeredSpecies) {
                            System.out.println("checking for a matching species for: "+species.getName());
                            if(resolvedIdentifier.getPath().contains(species.getResourceIdentifier().getPath())&&
                                    !resolvedIdentifier.getNamespace().equalsIgnoreCase("gravelmon")){
                                System.out.println("found a match for "+species.getName());
                            }
                        }*//*
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }));
            }
        }
    }*/
    private static String removeExtension(String fname) {
        int pos = fname.lastIndexOf('.');
        if(pos > -1)
            return fname.substring(0, pos);
        else
            return fname;
    }
}
