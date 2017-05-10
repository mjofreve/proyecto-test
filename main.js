$(function(){
    //Definir aplicación
    var app = {
        init: function(){
            $('#new-article-form').on('submit', this.addArticle.bind(this))//On asignar una función a un evento que está ocurriendo
            $('.delete-article').on('click', this.deleteArticle)
        },
        addArticle: function(e){
            e.preventDefault()
            var content = $('#new-article-content').val()
            var title = $('#new-article-title').val()
            console.log(content, title)
            if (!this.isArticleValid(title, content)) return

            var article = new Article({title: title, content: content})
            console.log(article)
            Store.agregar(article)
            this.renderArticles()
        },
        isArticleValid: function(title, content){
            if(title == undefined || title == '' ||
                content == undefined || content == ''){
                    $('#messages').html('Debe completar todos los datos')
                    return false
                }
                $('#messages').html('')
                return true
        },
        deleteArticle: function(){
            var id = $(this).attr('article-id')
            console.log(id)
        },
        renderArticles: function(){
            var articles = Store.listar()
            var template = articles.reduce(function(acc, el){
                acc += '<li><h1>' + el.title + '</h1><p>'+ el.content + '</p><button class="delete-article" article-id="'+ el.id +'">Eliminar</button></li>'
                return acc
            },'<ul>') + '</ul>'

            $('#articles').html(template)
        }
    }
    app.init()
})