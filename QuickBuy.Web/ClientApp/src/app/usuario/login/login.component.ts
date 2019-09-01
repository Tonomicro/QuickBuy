import { Component } from "@angular/core"
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  public direito = "Direitos autorais para Mo Linda";
  public enderecoImagem = "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/67740804_181988219490062_2585105947045385111_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&oh=a9e7d7a631b52f7ce71e3e6350c3935f&oe=5DD9FD3C&ig_cache_key=MjExNzA2Njg3ODQ5NzUyNDI1Mw%3D%3D.2";
  public titulo = "titulo da imagem";

  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    
    if (this.usuario.email == 'amor' && this.usuario.senha == '123') {
      this.usuarioAutenticado = true;
    }
  }

  on_keypress() {
    alert('digitando o email');
  }
}
