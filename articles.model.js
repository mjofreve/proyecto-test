//Clase que define su estructura
function Article (article){
    this.id = Math.random().toString(36).substring(2)
    this.title = article.title
    this.content = article.content
}

    //Patrón Module
    var Store = (function(){
        var data = []

        return {
            agregar: function(article){
                data.push(article)
            },
            eliminar: function(id){
                data.filter(function(el){
                    return el.id !== id
                })
            },
            listar: function(){
                return data
            }
        }
    })()