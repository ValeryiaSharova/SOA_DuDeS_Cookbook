using AutoMapper;
using Cookbook.Recipes.Repository.Models;
using Cookbook.Recipes.WebApi.Models.Recipes;

namespace Cookbook.Recipes.WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Recipe, RecipeModel>();
            CreateMap<RecipeModel, Recipe>();
            CreateMap<Ingredient, IngredientModel>();
            CreateMap<IngredientModel, Ingredient>();
        }
    }
}
