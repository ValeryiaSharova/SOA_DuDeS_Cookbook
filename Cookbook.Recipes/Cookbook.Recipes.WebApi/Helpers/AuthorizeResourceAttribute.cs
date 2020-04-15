using Cookbook.Recipes.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Threading.Tasks;

namespace Cookbook.Recipes.WebApi.Helpers
{
	public class AuthorizeResourceAttribute : TypeFilterAttribute
	{
		public AuthorizeResourceAttribute()
			: base(typeof(AuthorizeResourceFilter))
		{
		}

		private class AuthorizeResourceFilter : IAsyncActionFilter
		{
			private readonly IAuthorizationService _authorizationService;

			public AuthorizeResourceFilter(IAuthorizationService authorizationService)
			{
				_authorizationService = authorizationService;
			}

			public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
			{
				var accessToken = context.HttpContext.Request.Headers["Authorization"].ToString().Split(" ")[1];

				var validationResult = await _authorizationService.ValidateTokenAsync(accessToken);

				if (!validationResult)
				{
					context.Result = new UnauthorizedResult();
					return;
				}

				await next();
			}
		}
	}
}
