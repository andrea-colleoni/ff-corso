namespace CorsoSIWeb
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Persone")]
    public partial class Persone
    {
        [Key]
        public int Id { get; set; }

        [StringLength(30)]
        public string Nome { get; set; }

        [StringLength(30)]
        public string Cognome { get; set; }

        [StringLength(50)]
        public string Email { get; set; }
    }
}
