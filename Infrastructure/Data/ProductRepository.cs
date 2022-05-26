using Core.Data;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        public ProductRepository(StoreContext context)
        {
            _context = context;
        }
        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);
        }
        public async Task<string> PostProduct(Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return "Added Successfully";
        }

        public async Task<string> UpdateProduct(Product product)
        {
            Product p = await _context.Products.FindAsync(product.Id);

            if(p != null)
            {
                p.Id = product.Id;
                p.Name = product.Name;
            return "Updated Successfully";
            }
            else
            {
                return "Invalid Data";
            }
        }

        public Boolean DeleteProduct(int id)
        {
            var c = _context.Products.Find(id);
            if (c == null)
            {
                return false;
            }

            _context.Products.Remove(c);
            _context.SaveChanges();
            return true;
        }
    }
}
