import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servico/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public direito = "Direitos autorais para Mo Linda";
  public enderecoImagem = "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/67740804_181988219490062_2585105947045385111_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&oh=a9e7d7a631b52f7ce71e3e6350c3935f&oe=5DD9FD3C&ig_cache_key=MjExNzA2Njg3ODQ5NzUyNDI1Mw%3D%3D.2";
  public titulo = "titulo da imagem";
  public mensagem: string;

  public usuario;
  public usuarioAutenticado: boolean;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data => {
          var usuarioRetorno: Usuario;
          usuarioRetorno = data;
          sessionStorage.setItem("usuario-autenticado", "1");
          sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate([this.returnUrl]);
          }
          
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
        }
      );
  }

  on_keypress() {
    alert('digitando o email');
  }
}
