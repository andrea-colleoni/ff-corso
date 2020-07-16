namespace CorsoSIWeb
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class CorsoDb : DbContext
    {
        public CorsoDb()
            : base("name=CorsoDb")
        {
        }

        public virtual DbSet<Persone> Persone { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Persone>()
                .Property(e => e.Nome)
                .IsUnicode(false);

            modelBuilder.Entity<Persone>()
                .Property(e => e.Cognome)
                .IsUnicode(false);

            modelBuilder.Entity<Persone>()
                .Property(e => e.Email)
                .IsUnicode(false);
        }
    }
}
