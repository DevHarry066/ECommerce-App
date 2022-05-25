using ECommerce_App.Data;
using ECommerce_App.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            List<Product> products = await _context.Products.ToListAsync();
            if(products != null)
            {
            return Ok(products);
            }

            else
            {
                return NoContent();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            Product product = await _context.Products.FindAsync(id);
            if(product !=null)
            {
                return product;
            }
            else
            {
                return NoContent();
            }
        }
    }
}
