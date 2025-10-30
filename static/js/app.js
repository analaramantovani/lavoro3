
window.document.addEventListener("DOMContentLoaded", function () {


    const botaoTresbarras = document.getElementById('tresRiscos');
    if (botaoTresbarras) {
        botaoTresbarras.addEventListener('click', function() {

            console.log('vsjvbxjh')
            const fundoBarra3 = document.querySelector('.fundobarra2');
            if (fundoBarra3) {
                fundoBarra3.classList.remove('fundobarra2');
                fundoBarra3.classList.add('fundobarra3');

            } else {
                console.error("Elemento com a classe 'fundobarra2' não encontrado!");
            }
        });

    } else {
        console.warn("Botão com ID 'tresRiscos' não encontrado no DOM!");
    }

    const fechar = document.getElementById('Fechar');
    if (fechar) {
        fechar.addEventListener('click', function() {
            const fundoBarra2 = document.querySelector('.fundobarra3');
            if (fundoBarra2) {
                fundoBarra2.classList.remove('fundobarra3');
                fundoBarra2.classList.add('fundobarra2');

            } else {
                console.error("Elemento com a classe 'fundobarra3' não encontrado!");
            }
        });

    } else {
        console.warn("Botão com ID 'Fechar' não encontrado no DOM!");
    }

    /*Estrela Js*/

    const stars = document.querySelectorAll("#stars span");
    const result = document.querySelector(".result");
    let selected = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            selected = star.dataset.value; // pega o valor da estrela clicada

            // pinta até a estrela selecionada
            stars.forEach(s => {
                s.classList.toggle("active", s.dataset.value <= selected);
            });


            // atualiza o texto
            if (result){
            result.textContent = `${selected} estrela${selected > 1 ? "s" : ""}`;
            }
        });

    });

    //Maskara
   (function () {
      const input = document.getElementById('telefone');

      if (input){
        input.addEventListener('input', function (e) {
        const raw = this.value;
        // posição do cursor antes da formatação
        const cursorPos = this.selectionStart;

        // quantos dígitos existiam antes do cursor
        const digitsBeforeCursor = raw.slice(0, cursorPos).replace(/\D/g, '').length;

        // pega só dígitos e limita a 11
        let digits = raw.replace(/\D/g, '').slice(0, 11);

        // formata
        const formatted = formatarTelefone(digits);
        console.log(formatted)

        // escreve no campo
        this.value = formatted;

        // calcula nova posição do cursor: acha a posição do N-ésimo dígito na string formatada
        let newPos = 0;
        if (digitsBeforeCursor === 0) {
          newPos = 0;
        } else {
          let count = 0;
          for (let i = 0; i < formatted.length; i++) {
            if (/\d/.test(formatted[i])) count++;
            if (count === digitsBeforeCursor) {
              // cursor logo após esse dígito
              newPos = i + 1;
              break;
            }
          }
          // se o usuário estava no final (p. ex. digitsBeforeCursor == total digits), ajustar pro fim
          if (count < digitsBeforeCursor) {
            newPos = formatted.length;
          }
        }

        // garante que newPos esteja dentro do intervalo
        newPos = Math.max(0, Math.min(newPos, formatted.length));
        this.setSelectionRange(newPos, newPos);
      });
      }
      // opcional: prevenir caracteres não-numéricos no keypress
      input.addEventListener('keydown', function(e){
        // permite backspace, delete, setas, tab, ctrl/cmd combos etc.
        const allowedKeys = ['Backspace','Delete','ArrowLeft','ArrowRight','Tab','Home','End'];
        if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
        // bloqueia letras
        if (!/[0-9]/.test(e.key)) e.preventDefault();
      });
    })();


});

// Check caixa no selecionar


function formatarTelefone(digitos) {
        // digitos: só números, já limitado a 11
        console.log(digitos)
        if (digitos.length === 0) return '';
        if (digitos.length <= 2) return '(' + digitos;

        const ddd = digitos.slice(0,2);
        const local = digitos.slice(2); // parte após DDD
        let resultado = '(' + ddd + ') ';

        if (local.length <= 4) {
          resultado += local;
        } else if (local.length <= 8) {
          // número fixo com 8 dígitos (ou local com até 8 dígitos)
          resultado += local.slice(0,4) + (local.length > 4 ? '-' + local.slice(4) : '');
        } else {
          // celular com 9 dígitos locais (total 11)
          resultado += local.slice(0,5) + '-' + local.slice(5);
        }

        return resultado;
      }
document.addEventListener("DOMContentLoaded", function() {
    const bloco = document.getElementById("insumos-bloco");
    const btnAdicionar = document.getElementById("adicionar-insumo");
    const opcoesInsumo = document.getElementById("opcoes-insumo");

    btnAdicionar.addEventListener("click", function() {
        const div = document.createElement("div");
        div.style.marginBottom = "8px";
        div.className = "bloco-insumo";

        // Cria o select e clona as opções
        const select = opcoesInsumo.cloneNode(true);
        select.removeAttribute('id');
        select.setAttribute('name', 'insumo_id[]');
        select.style.display = "inline";

        // Cria campo quantidade
        const inputQtd = document.createElement("input");
        inputQtd.type = "number";
        inputQtd.name = "quantidade[]";
        inputQtd.step = "0.01";
        inputQtd.min = "0";
        inputQtd.required = true;
        inputQtd.placeholder = "Quantidade";
        inputQtd.style.marginLeft = "8px";

        // Botão remover insumo
        const btnRemover = document.createElement("button");
        btnRemover.type = "button";
        btnRemover.textContent = "Remover";
        btnRemover.style.marginLeft = "8px";
        btnRemover.onclick = function() {
            bloco.removeChild(div);
        };

        div.appendChild(select);
        div.appendChild(inputQtd);
        div.appendChild(btnRemover);
        bloco.appendChild(div);
    });
});
