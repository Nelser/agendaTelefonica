using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class Contato
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        [StringLength(15)]
        public string Numero { get; set; }
        [RegularExpression(".+\\@.+\\..+",ErrorMessage = "Informe um email válido...")]
        public string Email { get; set; }

        public Contato(int id)
        {
            Id = id;
        }

        public Contato(string nome, string numero, string email)
        {
            Nome = nome;
            Numero = numero;
            Email = email;
        }

        public Contato(int id, string nome, string numero, string email)
        {
            Id = id;
            Nome = nome;
            Numero = numero;
            Email = email;
        }
    }
}