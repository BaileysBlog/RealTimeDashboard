﻿using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace dashboardServer.Utils
{
    public class ClientDatabase
    {
        private static SqlConnection GetConnection()
        {
            return new SqlConnection(Startup.Configuration.GetConnectionString("clients"));
        }


        public static async Task AddUser(String ConnectionId, String UserAgent)
        {
            using (var connection = GetConnection())
            {
                await connection.OpenAsync();
                var query = $@"insert into Clients (ConnectionId, UserAgent) values (@id, @agent)";
                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@id", ConnectionId);
                    command.Parameters.AddWithValue("@agent", UserAgent);
                    try
                    {
                        await command.ExecuteNonQueryAsync();
                    }
                    catch (Exception ex)
                    {
                        
                    }
                }
            }
        }

        public static async Task RemoveUser(String ConnectionId)
        {
            using (var connection = GetConnection())
            {
                await connection.OpenAsync();
                var query = $@"delete from Clients where ConnectionId=@id";
                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@id", ConnectionId);
                    try
                    {
                        await command.ExecuteNonQueryAsync();
                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
        }

        public static async Task<int> GetClientCount()
        {
            using (var connection = GetConnection())
            {
                await connection.OpenAsync();
                var query = @"select count(*) from Clients";
                using (var command = new SqlCommand(query, connection))
                {
                    var clientCount = (await command.ExecuteScalarAsync()).ToString();
                    int.TryParse(clientCount, out int _clientCount);
                    return _clientCount;
                }
            }
        }

    }
}
