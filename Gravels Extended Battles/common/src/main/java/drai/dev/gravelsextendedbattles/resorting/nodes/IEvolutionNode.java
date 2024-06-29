package drai.dev.gravelsextendedbattles.resorting.nodes;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;

import java.util.*;

public interface IEvolutionNode extends Comparable<IEvolutionNode> {

    List<IEvolutionNode> getEvolutions();

    void addEvolution(IEvolutionNode formEvolutionNode);

    void addPreEvolution(IEvolutionNode formEvolutionNode);

    String getForm();

    String getSpecies();

    List<IEvolutionNode> getPreEvolutions();

    Set<Evolution> getPokemonEvolutions();

    int getPokedexNumber();

    default int compareTo(IEvolutionNode o){
        var thisIsFormNode = this instanceof FormEvolutionNode;
        var thatIsFormNode = o instanceof FormEvolutionNode;
        if(thisIsFormNode == thatIsFormNode){
            return Integer.compare(this.getPokedexNumber(), o.getPokedexNumber());
        } else if(thisIsFormNode){
            return 1;
        } else {
            return -1;
        }
    }
}
