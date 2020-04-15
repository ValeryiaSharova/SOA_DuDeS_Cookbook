using System.Threading.Tasks;

namespace Cookbook.Recipes.Service.Interfaces
{
	public interface IAuthorizationService
	{
		Task<bool> ValidateTokenAsync(string token);
	}
}
