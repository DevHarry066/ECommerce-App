using Core.Data;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repo;
        public ProductsController(IProductRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            List<Product> products = (List<Product>)await _repo.GetProductsAsync();
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
            Product product = await _repo.GetProductByIdAsync(id);
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
           var result = await _repo.PostProduct(product);
            if(result == "Added Successfully")
            {
                return new JsonResult(result);
            }
            else
            {
                return new JsonResult("Error");
            }
        }

        [HttpPut]
        public async Task<ActionResult<Product>> UpdateProduct(Product product)
        {
            var p = await _repo.UpdateProduct(product);
            if (p == "Updated Successfully")
            {
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
            var c = _repo.DeleteProduct(id);
            if (!c) return NotFound("Id not found in database");
            else
            {
            return new JsonResult("Deleted Successfully");
            }
        }
    }
}
