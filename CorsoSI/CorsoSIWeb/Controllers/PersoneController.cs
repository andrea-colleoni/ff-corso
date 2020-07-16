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
using CorsoSIWeb;

namespace CorsoSIWeb.Controllers
{
    [Route("persone")]
    public class PersoneController : ApiController
    {
        private CorsoDb db = new CorsoDb();

        [HttpGet]
        public IQueryable<Persone> GetPersone()
        {
            return db.Persone;
        }

        [HttpGet]
        [Route("persone/{idPersona}")]
        [ResponseType(typeof(Persone))]
        public IHttpActionResult GetPersone(int idPersona)
        {
            Persone persone = db.Persone.Find(idPersona);
            if (persone == null)
            {
                return NotFound();
            }

            return Ok(persone);
        }

        [Route("persone/{idPersona}")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPersone(int idPersona, Persone persone)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (idPersona != persone.Id)
            {
                return BadRequest();
            }

            db.Entry(persone).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersoneExists(idPersona))
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

        [HttpPost]
        [ResponseType(typeof(Persone))]
        public IHttpActionResult PostPersone(Persone persone)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Persone.Add(persone);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = persone.Id }, persone);
        }

        [Route("persone/{id}")]
        [HttpDelete]
        [ResponseType(typeof(Persone))]
        public IHttpActionResult DeletePersone(int id)
        {
            Persone persone = db.Persone.Find(id);
            if (persone == null)
            {
                return NotFound();
            }

            db.Persone.Remove(persone);
            db.SaveChanges();

            return Ok(persone);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersoneExists(int id)
        {
            return db.Persone.Count(e => e.Id == id) > 0;
        }
    }
}