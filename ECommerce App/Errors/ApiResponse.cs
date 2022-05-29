using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce_App.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message=null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode); 
        }

        public int StatusCode { get; private set; }
        public string Message { get; private set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return StatusCode switch
            {
                400 => "A bad request you have made",
                401 => "Unauthroized request",
                404 => "Resource Not Found",
                500 => "Internal Server Error",
                _ => null
            };
        }
    }
}
