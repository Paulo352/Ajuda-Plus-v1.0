// Inicializar animações
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
      el.style.opacity = 1;
          el.style.transform = "translateY(0)";
            });
            });

            function abrirModulo(nome) {
              const modulo = document.getElementById('moduloAtivo');

                let conteudo = "";

                  switch(nome) {
                      case 'agricultura':
                            conteudo = "<h2>Assistência na Agricultura</h2><p>Receba orientações, monitore sensores e automatize tarefas no campo.</p>";
                                  break;
                                      case 'reforco':
                                            conteudo = "<h2>Reforço Escolar</h2><p>Plataforma com dicas, vídeos e suporte educacional para alunos rurais.</p>";
                                                  break;
                                                      case 'lembretes':
                                                            conteudo = "<h2>Lembretes para Idosos</h2><p>Configure alertas de medicamentos e compromissos com voz e notificações.</p>";
                                                                  break;
                                                                      case 'emocional':
                                                                            conteudo = "<h2>Apoio Emocional</h2><p>Converse com nosso assistente emocional e tenha suporte psicológico leve.</p>";
                                                                                  break;
                                                                                      case 'acessibilidade':
                                                                                            conteudo = "<h2>Acessibilidade</h2><p>Ferramentas de leitura em voz alta, contraste e comandos de voz para navegação.</p>";
                                                                                                  break;
                                                                                                      default:
                                                                                                            conteudo = "<h2>Bem-vindo ao Ajuda+</h2><p>Escolha um módulo para começar.</p>";
                                                                                                              }

                                                                                                                modulo.innerHTML = conteudo;
                                                                                                                }

                                                                                                                // ENVIO DE FORMULÁRIO
                                                                                                                document.getElementById('formContato').addEventListener('submit', function(e) {
                                                                                                                  e.preventDefault();

                                                                                                                    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this, 'SUA_PUBLIC_KEY')
                                                                                                                        .then(() => {
                                                                                                                              document.getElementById('respostaForm').innerText = 'Mensagem enviada com sucesso!';
                                                                                                                                    this.reset();
                                                                                                                                        }, (error) => {
                                                                                                                                              document.getElementById('respostaForm').innerText = 'Erro ao enviar. Tente novamente.';
                                                                                                                                                    console.error('Erro:', error);
                                                                                                                                                        });
                                                                                                                                                        });