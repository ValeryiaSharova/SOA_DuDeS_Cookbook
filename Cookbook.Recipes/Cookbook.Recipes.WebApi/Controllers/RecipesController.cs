using AutoMapper;
using Cookbook.Recipes.Repository.Models;
using Cookbook.Recipes.Service.Interfaces;
using Cookbook.Recipes.WebApi.Helpers;
using Cookbook.Recipes.WebApi.Models.Recipes;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cookbook.Recipes.WebApi.Controllers
{
	[AuthorizeResource]
	[Route("api/[controller]")]
	public class RecipesController : Controller
	{
		private IRecipesService _recipesService;
		private IIngredientService _ingredientService;
		private IMapper _mapper;

		public RecipesController(
			IRecipesService recipesService,
			IIngredientService ingredientService,
			IMapper mapper)
		{
			_recipesService = recipesService;
			_ingredientService = ingredientService;
			_mapper = mapper;
		}

		[HttpPost("create")]
		public IActionResult CreateAsync([FromBody]RecipeModel model)
		{
			var recipe = _mapper.Map<Recipe>(model);

			try
			{
				_recipesService.Create(recipe);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(new { message = ex.Message });
			}
		}

		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var recipes = _recipesService.GetAll();
			var model = _mapper.Map<IList<RecipeModel>>(recipes);
			var accessToken = Request.Headers["Authorization"].ToString();
			foreach (var recipe in model)
			{
				var calories = 0;
				foreach (var ingredientModel in recipe.Ingredients)
				{
					var ingredient = _mapper.Map<Ingredient>(ingredientModel);
					calories += await _ingredientService.GetIngredientCaloriesByName(ingredient, accessToken);
				}
				recipe.Calories = calories;
			}
			return Ok(model);
		}

		[HttpGet("getAllIngredientsName")]
		public async Task<IActionResult> GetAllIngredientsName()
		{
			var accessToken = Request.Headers["Authorization"].ToString();
			var allIngredientsNames = await _ingredientService.GetAllIngredientsNameAsync(accessToken);
			return Ok(allIngredientsNames);
		}

		[HttpGet("{id}")]
		public IActionResult GetById(int id)
		{
			var recipe = _recipesService.GetById(id);
			var model = _mapper.Map<RecipeModel>(recipe);
			return Ok(model);
		}

		[HttpPut("{id}")]
		public IActionResult Update(int id, [FromBody]RecipeModel model)
		{
			var recipe = _mapper.Map<Recipe>(model);
			recipe.Id = id;

			try
			{
				_recipesService.Update(recipe);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(new { message = ex.Message });
			}
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			_recipesService.Delete(id);
			return Ok();
		}
	}
}
