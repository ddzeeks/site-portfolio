# Site Portfólio

Site de portfólio pessoal de **Daniel Campos**, estudante de Ciências da Computação. Este é o meu primeiro projeto no GitHub: uma página única, responsiva e estática, que apresenta quem eu sou, minhas habilidades, meus projetos e como entrar em contato.

## Funcionalidades

- **Página única com navegação por seções:** Início, Sobre mim, Habilidades, Projetos e Contato, com rolagem suave.
- **Modo claro e escuro:** respeita o tema do sistema na primeira visita e guarda a escolha do visitante no navegador.
- **Botão para baixar o currículo** em PDF.
- **Layout responsivo:** a navbar vira menu "hambúrguer" em telas pequenas.
- **Acessibilidade:** textos alternativos nas imagens, `aria-label` nos botões de ícone e rolagem suave desativada para quem prefere menos animações.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura e conteúdo da página |
| CSS3 | Ajustes de estilo (foto de perfil, rolagem) |
| JavaScript | Alternância entre tema claro e escuro |
| [Bootstrap 5.3.8](https://getbootstrap.com/) | Layout, grid, navbar, cards e temas (via CDN) |
| [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) | Ícones de contato e botões (via CDN) |

O projeto também foi aprimorado com ajuda de ferramentas de IA (Claude Code e Copilot).

## Estrutura do projeto

```
site-portfolio/
├── index.html        # Página principal
├── style.css        # Estilos personalizados
├── app.js           # Lógica do modo escuro
├── img/
│   └── perfil.png   # Foto de perfil
├── curriculo/
│   └── Daniel_Campos_Curriculo.pdf
└── backup/
    └── main.html    # Versão anterior da página
```

## Como executar

O projeto não precisa de instalação nem de build.

1. Clone o repositório:
   ```bash
   git clone https://github.com/ddzeeks/site-portfolio.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd site-portfolio
   ```
3. Abra o arquivo `index.html` no navegador (clique duas vezes nele ou use a extensão Live Server no VS Code).

É necessária conexão com a internet, porque o Bootstrap e os ícones são carregados por CDN.

## Como personalizar

- **Textos e seções:** edite o `index.html`.
- **Novo projeto:** copie o bloco de card dentro da seção `#projetos`.
- **Foto de perfil:** substitua `img/perfil.png`.
- **Currículo:** substitua o PDF em `curriculo/`, mantendo o mesmo nome ou ajustando o `href` do botão.

## Pontos de aprendizado

- Estruturação de uma página com HTML semântico (`header`, `main`, `section`, `footer`).
- Uso do grid e dos componentes do Bootstrap.
- Tema claro/escuro com o atributo `data-bs-theme` e `localStorage`.
- Organização de um projeto com Git e GitHub, usando as branches `main` e `dev`.

## Próximos passos

- Publicar o site com GitHub Pages.
- Adicionar capturas de tela aos cards de projetos.
- Incluir novos projetos conforme forem concluídos.

## Contato

- GitHub: [@ddzeeks](https://github.com/ddzeeks)
- LinkedIn: [Daniel Campos](https://www.linkedin.com/in/daniel-campos-65b890349/)

---

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
