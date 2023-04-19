$(document).ready(function() {

    $(".formulario").on("submit", function(e) {
        e.preventDefault();

        const listaTarefas = $(".formulario-tarefa").val();
        const novaTarefa = $('.lista-tarefas');
        $(`<div class="exemplo"> ${listaTarefas} </div> `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('.lista');
        

        $('.formulario-tarefa').val('');

        $('.exemplo').click(function() {
            $(this).css("text-decoration", "line-through");
        })  
    })     
})
