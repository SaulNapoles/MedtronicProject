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
    public class PatchPanelsController : ApiController
    {
        private MedtronicdbEntities db = new MedtronicdbEntities();

        // GET: api/PatchPanels
        public IQueryable<PatchPanel> GetPatchPanels()
        {
            return db.PatchPanels;
        }

        // GET: api/PatchPanels/5
        [ResponseType(typeof(PatchPanel))]
        public IHttpActionResult GetPatchPanel(int id)
        {
            PatchPanel patchPanel = db.PatchPanels.Find(id);
            if (patchPanel == null)
            {
                return NotFound();
            }

            return Ok(patchPanel);
        }

        // PUT: api/PatchPanels/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPatchPanel(int id, PatchPanel patchPanel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != patchPanel.Id)
            {
                return BadRequest();
            }

            db.Entry(patchPanel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatchPanelExists(id))
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

        // POST: api/PatchPanels
        [ResponseType(typeof(PatchPanel))]
        public IHttpActionResult PostPatchPanel(PatchPanel patchPanel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PatchPanels.Add(patchPanel);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = patchPanel.Id }, patchPanel);
        }

        // DELETE: api/PatchPanels/5
        [ResponseType(typeof(PatchPanel))]
        public IHttpActionResult DeletePatchPanel(int id)
        {
            PatchPanel patchPanel = db.PatchPanels.Find(id);
            if (patchPanel == null)
            {
                return NotFound();
            }

            db.PatchPanels.Remove(patchPanel);
            db.SaveChanges();

            return Ok(patchPanel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PatchPanelExists(int id)
        {
            return db.PatchPanels.Count(e => e.Id == id) > 0;
        }
    }
}