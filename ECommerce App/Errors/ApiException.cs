﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce_App.Errors
{
    public class ApiException : ApiResponse
    {
        public string Details { get; set; }
        public ApiException(int statusCode, string message, string details) : base(statusCode, message)
        {
            Details = details;
        }
    }
}
