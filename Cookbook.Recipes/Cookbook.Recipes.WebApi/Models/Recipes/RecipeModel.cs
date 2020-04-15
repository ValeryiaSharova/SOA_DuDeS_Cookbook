using System.Collections.Generic;

namespace Cookbook.Recipes.WebApi.Models.Recipes
{
	public class RecipeModel
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public int Calories { get; set; }

		public IEnumerable<IngredientModel> Ingredients { get; set; }

		public RecipeModel()
		{
			Ingredients = new List<IngredientModel>();
		}
	}
}
