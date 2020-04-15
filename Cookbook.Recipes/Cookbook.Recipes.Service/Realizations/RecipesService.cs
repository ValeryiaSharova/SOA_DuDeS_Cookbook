using Cookbook.Recipes.Repository;
using Cookbook.Recipes.Repository.Models;
using Cookbook.Recipes.Service.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Cookbook.Recipes.Service.Realizations
{
	public class RecipesService : IRecipesService
	{
		private ApplicationDbContext _context;

		public RecipesService(ApplicationDbContext context)
		{
			_context = context;
		}

		public IEnumerable<Recipe> GetAll()
		{
			return _context.Recipes
				.Include(recipe => recipe.Ingredients).ToList();
		}

		public Recipe GetById(int id)
		{
			var recipe = _context.Recipes
				.Include(recipe => recipe.Ingredients)
				.FirstOrDefault(recipe => recipe.Id == id);

			return recipe;
		}

		public Recipe Create(Recipe recipe)
		{
			_context.Recipes.Add(recipe);
			_context.SaveChanges();

			return recipe;
		}

		public void Update(Recipe recipe)
		{
			var dbRecipe = _context.Recipes.Include(recipe => recipe.Ingredients).FirstOrDefault(r => recipe.Id == r.Id);

			if (dbRecipe == null)
				throw new Exception("Recipe not found");

			if (!string.IsNullOrWhiteSpace(recipe.Name))
			{
				dbRecipe.Name = recipe.Name;
			}

			if (!string.IsNullOrWhiteSpace(recipe.Description))
			{
				dbRecipe.Description = recipe.Description;
			}
			var forRemove = dbRecipe.Ingredients.Except(recipe.Ingredients);
			dbRecipe.Ingredients.RemoveAll(ingredientId => forRemove.Any(id => id == ingredientId));
			dbRecipe.Ingredients = recipe.Ingredients;

			_context.Recipes.Update(dbRecipe);
			_context.SaveChanges();
		}

		public void Delete(int id)
		{
			var recipe = _context.Recipes.Find(id);
			if (recipe != null)
			{
				_context.Recipes.Remove(recipe);
				_context.SaveChanges();
			}
		}
	}
}
