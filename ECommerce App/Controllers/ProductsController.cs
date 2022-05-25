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

        [HttpPost]

        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
           await _context.Products.AddAsync(product);
           await _context.SaveChangesAsync();
           return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public async Task<ActionResult<Product>> UpdateProduct(Product product)
        {
            var p = await _context.Products.FindAsync(product.Id);
            if (p != null)
            {
                p.Id = product.Id;
                p.Name = product.Name;
                await _context.SaveChangesAsync();
                return new JsonResult("Updated successfully");
            }
            else
            {
                return new JsonResult("Id not found");
            }
        }

        [HttpDelete]
        public ActionResult<Product> DeleteProduct(int id)
        {
            var c = _context.Products.Find(id);
            if (c == null) return NotFound("Id not found in database");
            _context.Products.Remove(c);
            _context.SaveChanges();
            return new JsonResult("Deleted Successfully");
        }
    }
}
