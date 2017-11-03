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
    public class SwitchesController : ApiController
    {
        private MedtronicdbEntities db = new MedtronicdbEntities();

        // GET: api/Switches
        public IQueryable<Switch> GetSwitches()
        {
            return db.Switches;
        }

        // GET: api/Switches/5
        [ResponseType(typeof(Switch))]
        public IHttpActionResult GetSwitch(int id)
        {
            Switch @switch = db.Switches.Find(id);
            if (@switch == null)
            {
                return NotFound();
            }

            return Ok(@switch);
        }

        // PUT: api/Switches/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSwitch(int id, Switch @switch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != @switch.Id)
            {
                return BadRequest();
            }

            db.Entry(@switch).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SwitchExists(id))
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

        // POST: api/Switches
        [ResponseType(typeof(Switch))]
        public IHttpActionResult PostSwitch(Switch @switch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Switches.Add(@switch);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = @switch.Id }, @switch);
        }

        // DELETE: api/Switches/5
        [ResponseType(typeof(Switch))]
        public IHttpActionResult DeleteSwitch(int id)
        {
            Switch @switch = db.Switches.Find(id);
            if (@switch == null)
            {
                return NotFound();
            }

            db.Switches.Remove(@switch);
            db.SaveChanges();

            return Ok(@switch);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SwitchExists(int id)
        {
            return db.Switches.Count(e => e.Id == id) > 0;
        }
    }
}