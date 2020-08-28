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
        public int Numero { get; set; }
        [RegularExpression(".+\\@.+\\..+",ErrorMessage = "Informe um email válido...")]
        public string Email { get; set; }

        public Contato(int id)
        {
            Id = id;
        }

        public Contato(string nome, int numero, string email)
        {
            Nome = nome;
            Numero = numero;
            Email = email;
        }

        public Contato(int id, string nome, int numero, string email)
        {
            Id = id;
            Nome = nome;
            Numero = numero;
            Email = email;
        }
    }
}