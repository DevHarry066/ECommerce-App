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
        [Route("GetProducts")]
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


        [HttpGet]
        [Route("GetProductById/{id}")]
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


        [HttpGet]
        [Route("GetProductBrands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            List<ProductBrand> productsBrand = (List<ProductBrand>)await _repo.GetProductBrandsAsync();
            if (productsBrand != null)
            {
                return Ok(productsBrand);
            }

            else
            {
                return NoContent();
            }
        }


        [HttpGet]
        [Route("GetProductBrandById/{id}")]
        public async Task<ActionResult<ProductBrand>> GetProductBrandById(int id)
        {
            ProductBrand productBrand = await _repo.GetProductBrandByIdAsync(id);
            if (productBrand != null)
            {
                return productBrand;
            }
            else
            {
                return NoContent();
            }
        }


        [HttpGet]
        [Route("GetProductTypes")]
        public async Task<ActionResult<List<ProductType>>> GetProductTypes()
        {
            List<ProductType> productTypes = (List<ProductType>)await _repo.GetProductTypesAsync();
            if (productTypes != null)
            {
                return Ok(productTypes);
            }

            else
            {
                return NoContent();
            }
        }


        [HttpGet]
        [Route("GetProductTypeById/{id}")]
        public async Task<ActionResult<ProductType>> GetProductTypeById(int id)
        {
            ProductType productType = await _repo.GetProductTypeByIdAsync(id);
            if (productType != null)
            {
                return productType;
            }
            else
            {
                return NoContent();
            }
        }

        [HttpPost]
        [Route("PostProduct")]
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


        [HttpPost]

        [Route("productBrand")]
        public async Task<ActionResult<ProductBrand>> PostProductBrand(ProductBrand productBrand)
        {
            var result = await _repo.PostProductBrand(productBrand);
            if (result == "Added Successfully")
            {
                return new JsonResult(result);
            }
            else
            {
                return new JsonResult("Error");
            }
        }

        [HttpPost]
        [Route("productType")]
        public async Task<ActionResult<ProductType>> PostProductType(ProductType productType)
        {
            var result = await _repo.PostProductType(productType);
            if (result == "Added Successfully")
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
