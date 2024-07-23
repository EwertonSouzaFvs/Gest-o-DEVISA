document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const ano = document.getElementById('ano').value;
    const quadrimestre = document.getElementById('quadrimestre').value;
    const servidor = document.getElementById('servidor').value;
    const resumo_produtos = document.getElementById('resumo_produtos').value;
    const cargo_endemias = document.getElementById('cargo_endemias').value;
    const horaria_semanal = document.getElementById('horaria_semanal').value;
    const valor_incentivo = document.getElementById('valor_incentivo').value;
    const indicacao_incentivo = document.querySelector('input[name="indicacao_incentivo"]:checked').value;
    const devolutiva_quadrimestre_anterior = document.getElementById('devolutiva_quadrimestre_anterior').value;
    const responsabilidades_rotina = document.getElementById('responsabilidades_rotina').value;
    const produto1 = document.getElementById('produto1').value;
    const resultados_esperados1 = document.getElementById('resultados_esperados1').value;
    const produto2 = document.getElementById('produto2').value;
    const resultados_esperados2 = document.getElementById('resultados_esperados2').value;
    const produto3 = document.getElementById('produto3').value;
    const resultados_esperados3 = document.getElementById('resultados_esperados3').value;

    const resultado = `
        Ano: ${ano}<br>
        Quadrimestre: ${quadrimestre}<br>
        Servidor Avaliado: ${servidor}<br>
        Resumo do(s) produto(s): ${resumo_produtos}<br>
        Cargo Ag Endemias: ${cargo_endemias}<br>
        Horária Semanal: ${horaria_semanal}<br>
        Valor atual do incentivo: ${valor_incentivo}<br>
        Indicação para recebimento do incentivo: ${indicacao_incentivo}<br>
        Devolutiva do Quadrimestre Anterior: ${devolutiva_quadrimestre_anterior}<br>
        Responsabilidades de Rotina do Trabalho: ${responsabilidades_rotina}<br>
        Produto 1: ${produto1}<br>
        RESULTADOS ESPERADOS 1: ${resultados_esperados1}<br>
        Produto 2: ${produto2}<br>
        RESULTADOS ESPERADOS 2: ${resultados_esperados2}<br>
        Produto 3: ${produto3}<br>
        RESULTADOS ESPERADOS 3: ${resultados_esperados3}
    `;

    document.getElementById('resultado').innerHTML = resultado;
});
