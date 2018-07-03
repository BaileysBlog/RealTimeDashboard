using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dashboardServer.Models;
using dashboardServer.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dashboardServer.Controllers
{
    [Produces("application/json")]
    [Route("api/Client")]
    public class ClientController : Controller
    {
        // GET: api/Client
        [HttpGet]
        public async Task<List<Client>> Get()
        {
            return await ClientDatabase.GetAllUsers();
        }

        // GET: api/Client/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        
    }
}
