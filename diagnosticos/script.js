const iniciarAvaliacao = () => {
    // Ocultar a seção de introdução
    document.getElementById("intro").style.display = "none";

    // Mostrar a seção de avaliação
    document.getElementById("avaliacao").style.display = "block";

    // Gerar perguntas da avaliação
    const perguntas = gerarPerguntas();

    // Exibir perguntas na interface
    for (const pergunta of perguntas) {
        const elementoPergunta = document.createElement("div");
        elementoPergunta.classList.add("pergunta");

        const textoPergunta = document.createElement("p");
        textoPergunta.textContent = pergunta.texto;

        elementoPergunta.appendChild(textoPergunta);

        // Adicionar opções de resposta
        for (const opcao of pergunta.opcoes) {
            const elementoOpcao = document.createElement("input");
            elementoOpcao.setAttribute("type", "radio");
            elementoOpcao.setAttribute("name", pergunta.id);
            elementoOpcao.setAttribute("value", opcao.valor);

            const labelOpcao = document.createElement("label");
            labelOpcao.textContent = opcao.texto;

            elementoPergunta.appendChild(elementoOpcao);
            elementoPergunta.appendChild(labelOpcao);
        }

        document.getElementById("avaliacao").appendChild(elementoPergunta);
    }

    // Adicionar botão
    const iniciarAvaliacao = () => {
        // Ocultar a seção de introdução
        document.getElementById("intro").style.display = "none";
    
        // Mostrar a seção de avaliação
        document.getElementById("avaliacao").style.display = "block";
    
        // Gerar perguntas da avaliação
        const perguntas = gerarPerguntas();
    
        // Exibir perguntas na interface
        for (const pergunta of perguntas) {
            const elementoPergunta = document.createElement("div");
            elementoPergunta.classList.add("pergunta");
    
            const textoPergunta = document.createElement("p");
            textoPergunta.textContent = pergunta.texto;
    
            elementoPergunta.appendChild(textoPergunta);
    
            // Adicionar opções de resposta
            for (const opcao of pergunta.opcoes) {
                const elementoOpcao = document.createElement("input");
                elementoOpcao.setAttribute("type", "radio");
                elementoOpcao.setAttribute("name", pergunta.id);
                elementoOpcao.setAttribute("value", opcao.valor);
    
                const labelOpcao = document.createElement("label");
                labelOpcao.textContent = opcao.texto;
    
                elementoPergunta.appendChild(elementoOpcao);
                elementoPergunta.appendChild(labelOpcao);
            }
    
            document.getElementById("avaliacao").appendChild(elementoPergunta);
        }
    
        // Adicionar botão para enviar respostas
        const botaoEnviar = document.createElement("button");
        botaoEnviar.textContent = "Enviar Respostas";
        botaoEnviar.onclick = enviarRespostas;
    
        document.getElementById("avaliacao").appendChild(botaoEnviar);
    };
    
    const enviarRespostas = () => {
        // Obter respostas do usuário
        const respostas = Array.from(
            document.querySelectorAll("#avaliacao input:checked")
        ).map((resposta) => resposta.value);
    
        // Gerar resultados da avaliação
        const resultados = gerarResultados(respostas);
    
        // Ocultar a seção de avaliação
        document.getElementById("avaliacao").style.display = "none";
    
        // Mostrar a seção de resultados
        document.getElementById("resultados").style.display = "block";
    
        // Exibir resultados na interface
        for (const diagnostico of resultados.diagnosticos) {
            const elementoDiagnostico = document.createElement("div");
            elementoDiagnostico.classList.add("diagnostico");
    
            const tituloDiagnostico = document.createElement("h3");
            tituloDiagnostico.textContent = diagnostico.titulo;
    
            elementoDiagnostico.appendChild(tituloDiagnostico);
    
            const probabilidade = document.createElement("p");
            probabilidade.textContent = `Probabilidade: ${diagnostico.probabilidade}%`;
    
            elementoDiagnostico.appendChild(probabilidade);
    
            const listaSintomas = document.createElement("ul");
            for (const sintoma of diagnostico.sintomas) {
                const elementoSintoma = document.createElement("li");
                elementoSintoma.textContent = sintoma;
    
                listaSintomas.appendChild(elementoSintoma);
            }
    
            elementoDiagnostico.appendChild(listaSintomas);
    
            const sugestaoTratamento = document.createElement("p");
            sugestaoTratamento.textContent = `Sugestão de tratamento: ${diagnostico.tratamento}`;
    
            elementoDiagnostico.appendChild(sugestaoTratamento);
    
            document.getElementById("resultados").appendChild(elementoDiagnostico);
        }
    
        // Adicionar botão para voltar à avaliação
        const botaoVoltar = document.createElement("button");
        botaoVoltar.textContent = "Voltar à Avaliação";
        botaoVoltar.onclick = iniciarAvaliacao;
    
        document.getElementById("resultados").appendChild(botaoVoltar);
    };
    
    // Funções para gerar perguntas e resultados (a serem implementadas)
    
    function gerarPerguntas() {
        const perguntas = [
            {
                id: "1",
                texto: "Qual a sua idade?",
                opcoes: [
                    { valor: "18-24", texto: "18-24 anos" },
                    { valor: "25-34", texto: "25-34 anos" },
                    { valor: "35-44", texto: "35-44 anos" },
                    { valor: "45-54", texto: "45-54 anos" },
                    { valor: "55+", texto: "55 anos ou mais" },
                ],
            },
            {
                id: "2",
                texto: "Qual o seu sexo?",
                opcoes: [
                    { valor: "masculino", texto: "Masculino" },
                    { valor: "feminino", texto: "Feminino" },
                    { valor: "outro", texto: "Outro" },
                ],
            },
            // ... (adicionar mais perguntas)
        ];
    
        return perguntas;
    }
    
    
    function gerarResultados(respostas) {
        const resultados = {
            diagnosticos: [
                {
                    titulo: "Doença X",
                    probabilidade: 70,
                    sintomas: ["Sintoma 1", "Sintoma 2", "Sintoma 3"],
                    tratamento: "Tratamento X",
                },
                {
                    titulo: "Doença Y",
                    probabilidade: 30,
                    sintomas: ["Sintoma 4", "Sintoma 5"],
                    tratamento: "Tratamento Y",
                },
                // ... (adicionar mais diagnósticos)
            ],
        };
    
        return resultados;
    }
}