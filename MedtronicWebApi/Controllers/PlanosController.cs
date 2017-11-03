using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MedtronicWebApi;

namespace MedtronicWebApi.Controllers
{
    public class PlanosController : ApiController
    {
        private MedtronicdbEntities db = new MedtronicdbEntities();

        // GET: api/Planos
        public IQueryable<Plano> GetPlanoes()
        {
            return db.Planoes;
        }

        // GET: api/Planos/5
        [ResponseType(typeof(Plano))]
        public IHttpActionResult GetPlano(int id)
        {
            Plano plano = db.Planoes.Find(id);
            if (plano == null)
            {
                return NotFound();
            }

            return Ok(plano);
        }

        // PUT: api/Planos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlano(int id, Plano plano)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != plano.Id)
            {
                return BadRequest();
            }

            db.Entry(plano).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Planos
        [ResponseType(typeof(Plano))]
        public IHttpActionResult PostPlano(Plano plano)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Planoes.Add(plano);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = plano.Id }, plano);
        }

        // DELETE: api/Planos/5
        [ResponseType(typeof(Plano))]
        public IHttpActionResult DeletePlano(int id)
        {
            Plano plano = db.Planoes.Find(id);
            if (plano == null)
            {
                return NotFound();
            }

            db.Planoes.Remove(plano);
            db.SaveChanges();

            return Ok(plano);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlanoExists(int id)
        {
            return db.Planoes.Count(e => e.Id == id) > 0;
        }
    }
}