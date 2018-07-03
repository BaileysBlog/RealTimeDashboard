using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dashboardServer.Models
{
    public class Group
    {
        public int GroupPK { get; private set; }
        public String JoinCode { get; private set; }
        public List<Client> Clients { get; private set; }


        public Group(int PK, String JoinCode, List<Client> Clients)
        {
            this.GroupPK = PK;
            this.JoinCode = JoinCode;
            this.Clients = Clients;
        }


        public Group(int PK, List<Client> Clients)
        {
            this.GroupPK = PK;
            this.Clients = Clients;
        }

    }
}
