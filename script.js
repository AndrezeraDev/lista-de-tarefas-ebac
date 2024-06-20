$(document).ready(function() {
    // Função que adiciona tarefa
    $("#btn").click(function() {
        var tarefa = $("#inserir-tarefa").val();
        if (tarefa) {
            var novaTarefa = `<li>${tarefa}</li>`;
            $("#tarefas ul").append(novaTarefa);
            $("#inserir-tarefa").val("");
        }
    });

    // Riscar tarefa ao clicar nela
    $("#tarefas").on("click", "li", function() {
        $(this).css("text-decoration", "line-through");
    });

    // Limpar todas as tarefas
    $("#btn-clear").click(function() {
        $("#tarefas ul").empty();
    });
});