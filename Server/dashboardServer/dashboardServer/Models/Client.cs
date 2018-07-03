using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UAParser;

namespace dashboardServer.Models
{
    public class Client
    {
        public String ConnectionId { get; private set; }
        public String OsFamily
        {
            get
            {
                return this.UserAgent.OS.Family;
            }
        }
        public String DeviceFamily
        {
            get
            {
                return this.UserAgent.Device.Family;
            }
        }
        public Group Group { get; private set; }

        private ClientInfo UserAgent {  get; set; }


        public Client(String ConnectionId, String UserAgent, Group Group)
        {
            this.ConnectionId = ConnectionId;
            this.UserAgent = Parser.GetDefault().Parse(UserAgent);
            this.Group = Group;
            
        }
    }
}
