using Cookbook.Recipes.Service.Helpers;
using Cookbook.Recipes.Service.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Cookbook.Recipes.Service.Realizations
{
	public class AuthorizationService : IAuthorizationService
	{
		private readonly AppSettings _appSettings;

		public AuthorizationService(IOptions<AppSettings> appSettings)
		{
			_appSettings = appSettings.Value;
		}

		public async Task<bool> ValidateTokenAsync(string token)
		{
			using (var httpClient = new HttpClient())
			{
				var content = new StringContent(JsonConvert.SerializeObject(new { token = token }), Encoding.UTF8, "application/json");
				using (var response = await httpClient.PostAsync($"{_appSettings.AuthorizationApiUrl}/validateToken", content))
				{
					return response.IsSuccessStatusCode;
				}
			}
		}
	}
}
