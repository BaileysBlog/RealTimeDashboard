# Real Time Dashboard
I want to do something that involves WebSockets, .Net, Angular and has something of value.
So I have decided that I'd create a dashboard that shows simple graphs and numbers in real-time from a .Net SignalR server.
Dashboard Screen:
- Server CPU usage on graph
- Server Memory usage on graph
- Number of connected WebSockets
    - Number of other people also watching the statistics
- Size of the database being used to store this information
- Potentially other information from the database

## Running Locally
- Terminal A
    1) cd Client
    2) npm install & ng serve
- Terminal B
    1) cd Server\dashboardServer\dashboardServer
    2) dotnet restore & dotnet run

## Current To-Do (General)
- [x] Angular Dashboard Page
- [ ] Angular Service for retrieving SignalR messages
- [ ] SignalR Server 
### To-Do (Client Side)
- [ ] Cpu Usage
- [ ] Memory Usage
- [ ] Number of connected clients
- [ ] Database Information
### To-Do (Server Side)
- [ ] Retrieve Cpu Usage
- [ ] Retrieve Memory Usage
    - [ ] Max Allowed Ram 
    - [ ] Current Ram usage
- [ ] Database connection to store connected clients
    - [ ] Methods of retrieving current client count
- [ ] Retrieve information regarding database 
    - [ ] Queries for returning information about database
