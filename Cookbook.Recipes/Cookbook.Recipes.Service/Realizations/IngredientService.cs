using Cookbook.Recipes.Repository.Models;
using Cookbook.Recipes.Service.Helpers;
using Cookbook.Recipes.Service.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Cookbook.Recipes.Service.Realizations
{
	public class IngredientService : IIngredientService
	{
		private readonly AppSettings _appSettings;

		public IngredientService(IOptions<AppSettings> appSettings)
		{
			_appSettings = appSettings.Value;
		}

		public async Task<IEnumerable<string>> GetAllIngredientsNameAsync(string accessToken)
		{
			using (var httpClient = new HttpClient())
			{
				httpClient.DefaultRequestHeaders.Add("Authorization", accessToken);

				using (var response = await httpClient.GetAsync($"{_appSettings.IngredientsApiUrl}/getAllIngredientsNames"))
				{
					var apiResponse = await response.Content.ReadAsStringAsync();
					var allIngredientsNames = JsonConvert.DeserializeObject<IEnumerable<string>>(apiResponse);
					return allIngredientsNames;
				}
			}
		}

		public async Task<int> GetIngredientCaloriesByName(Ingredient ingredient, string accessToken)
		{
			using (var httpClient = new HttpClient())
			{
				httpClient.DefaultRequestHeaders.Add("Authorization", accessToken);

				using (var response = await httpClient.GetAsync($"{_appSettings.IngredientsApiUrl}/getIngredientCalories/{ingredient.Name}"))
				{
					var apiResponse = await response.Content.ReadAsStringAsync();
					var caloriesAmount = JsonConvert.DeserializeObject<int>(apiResponse);
					var result = caloriesAmount * int.Parse(ingredient.Amount) / 100;
					return result;
				}
			}
		}
	}
}
