using Cookbook.Recipes.Repository.Models;
using System.Collections.Generic;

namespace Cookbook.Recipes.Service.Interfaces
{
	public interface IRecipesService
	{
		IEnumerable<Recipe> GetAll();
		Recipe GetById(int id);
		Recipe Create(Recipe recipe);
		void Update(Recipe recipe);
		void Delete(int id);
	}
}
