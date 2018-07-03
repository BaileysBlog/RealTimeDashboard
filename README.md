# Chat Group Dashboard
I want to do something that involves WebSockets, .Net, Angular and has something of value.

My final idea is to create something that allows a connected user to see all other connected users, their device types, and create groups. Once in a group users can send messages that will expire as the group does.


## Running Locally
- Terminal A
    1) cd Client
    2) npm install & ng serve
- Terminal B
    1) cd Server\dashboardServer\dashboardServer
    2) dotnet restore & dotnet run

## Current To-Do (General)
- [x] Angular Dashboard Page
- [x] Angular Service for retrieving SignalR messages
- [x] SignalR Server 
### To-Do (Client Side)
- [x] Number of connected clients
- [ ] Ability to show all connected users in more detail
- [ ] Ability to select users and invite to group chat
- [ ] Notification / Joining of groups
- [ ] Sending messages
### To-Do (Server Side)
- [x] Number of connected clients
- [ ] Api for getting detailed list of connected users
- [ ] Api for creating groups
- [ ] Api for sending group invitations
- [ ] Api for joining groups
- [ ] Api for sending messages inside groups
- [ ] Process of expiring messages on group death
    - [ ] Group death = Zero people in the group
