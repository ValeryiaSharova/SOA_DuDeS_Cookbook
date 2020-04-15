using Cookbook.Recipes.Repository.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cookbook.Recipes.Service.Interfaces
{
	public interface IIngredientService
	{
		Task<IEnumerable<string>> GetAllIngredientsNameAsync(string accessToken);
		Task<int> GetIngredientCaloriesByName(Ingredient ingredient, string accessToken);
	}
}
