using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Cookbook.Recipes.Repository.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public List<Ingredient> Ingredients { get; set; }
    }
}
