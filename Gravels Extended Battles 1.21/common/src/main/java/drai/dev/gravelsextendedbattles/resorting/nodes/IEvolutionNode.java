package drai.dev.gravelsextendedbattles.resorting.nodes;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;

import java.util.*;

public abstract class IEvolutionNode implements Comparable<IEvolutionNode> {
    int sortingNumber;
    public abstract List<IEvolutionNode> getEvolutions();
    public abstract void addEvolution(IEvolutionNode formEvolutionNode);
    public abstract void addPreEvolution(IEvolutionNode formEvolutionNode);
    public abstract String getForm();
    public abstract Species getSpecies();
    public abstract List<IEvolutionNode> getPreEvolutions();
    public abstract Set<Evolution> getPokemonEvolutions();
    public abstract int getPokedexNumber();

    public int getSortingNumber(){
        return sortingNumber;
    }
    public void setSortingNumber(int sortingNumber){
        this.sortingNumber = sortingNumber;
    }

    public int compareTo(IEvolutionNode o){
        return Integer.compare(this.getSortingNumber(), o.getSortingNumber());
    }

    public abstract void setPokedexNumber(int i);

    public abstract Species getPokemon();

    public int findLowestPokedexNumber() {
        IEvolutionNode minNode = this;
        Queue<IEvolutionNode> queue = new LinkedList<>();
        Set<IEvolutionNode> visited = new HashSet<>(); // To track visited nodes

        queue.add(this);
        visited.add(this);

        while (!queue.isEmpty()) {
            IEvolutionNode current = queue.poll();

            if (current.getPokedexNumber() < minNode.getPokedexNumber()) {
                minNode = current;
            }

            for (IEvolutionNode next : current.getEvolutions()) {
                if (visited.add(next)) { // Add only if not already visited
                    queue.add(next);
                }
            }

            for (IEvolutionNode prev : current.getPreEvolutions()) {
                if (visited.add(prev)) { // Add only if not already visited
                    queue.add(prev);
                }
            }
        }

        return minNode.getPokedexNumber();
    }
}
