using System.ComponentModel.DataAnnotations;

namespace Cookbook.Recipes.Repository.Models
{
	public class Ingredient
	{
		[Key]
		public int Id { get; set; }

		public string Name { get; set; }

		public string Amount { get; set; }

		public string RecipeId { get; set; }
		public Recipe Recipe { get; set; }
	}
}
