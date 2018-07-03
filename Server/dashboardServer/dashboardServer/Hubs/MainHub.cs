using dashboardServer.Utils;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dashboardServer.Hubs
{
    public class MainHub : Hub
    {


        public async Task GetClients()
        {
            await Clients.Clients(GetConnectionId()).SendAsync("ClientUpdate", await GetClientCount());
        }



        public override async Task OnConnectedAsync()
        {
            //Update the Database
            await ClientDatabase.AddUser(GetConnectionId(), GetUserAgent());
            //Update Clients
            await Clients.AllExcept(GetConnectionId()).SendAsync("ClientUpdate", await GetClientCount());
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            //Update the Database
            await ClientDatabase.RemoveUser(GetConnectionId());
            //Update Clients
            await Clients.AllExcept(GetConnectionId()).SendAsync("ClientUpdate", await GetClientCount());
            await base.OnDisconnectedAsync(exception);
        }

        private async Task<int> GetClientCount()
        {
            return await ClientDatabase.GetClientCount();
        }


        private String GetUserAgent()
        {
            return Context.GetHttpContext().Request.Headers["User-Agent"];
        }

        private String GetConnectionId()
        {
            return Context.ConnectionId;
        }
    }
}
