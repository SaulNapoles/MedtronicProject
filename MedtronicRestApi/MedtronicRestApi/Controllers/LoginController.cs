using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Web;
using System.Data.SqlClient;
using System.Configuration;

namespace MedtronicRestApi.Controllers
{
    public class LoginController : ApiController
    {
        public static bool Autenticar(string usuario, string password)
        {
            //consulta a la base de datos
            string sql = @"SELECT COUNT(*)
                          FROM Usuarios
                          WHERE correo = @user AND clave = @pass";
            //cadena conexion
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["default"].ToString()))
            {
                conn.Open();//abrimos conexion

                SqlCommand cmd = new SqlCommand(sql, conn); //ejecutamos la instruccion
                cmd.Parameters.AddWithValue("@user", usuario); //enviamos los parametros
                cmd.Parameters.AddWithValue("@pass", password);

                int count = Convert.ToInt32(cmd.ExecuteScalar()); //devuelve la fila afectada

                if (count == 0)
                    return false;
                else
                    return true;

            }
        }
    }
}
