using Cookbook.Authentication.Repository.Models;
using System.Collections.Generic;

namespace Cookbook.Authentication.Service.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Create(User user, string password);
        void Update(User user, string password = null);
        void Delete(int id);
        string GenerateToken(User user, string secret);
        bool ValidateToken(string token, string secret);
    }
}
