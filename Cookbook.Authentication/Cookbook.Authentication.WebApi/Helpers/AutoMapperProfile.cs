using AutoMapper;
using Cookbook.Authentication.Repository.Models;
using Cookbook.Authentication.WebApi.Models.Authentication;

namespace Cookbook.Authentication.WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<UpdateModel, User>();
        }
    }
}
