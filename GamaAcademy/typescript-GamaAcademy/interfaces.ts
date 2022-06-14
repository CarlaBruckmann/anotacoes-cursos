//typar alguns dados -> melhor usar interfaces que types - Utilizar PRINCIPALMENTE com classes (types não conseguem)
interface Usuario{
    nome: string,
    email: string,
    endereço?: string
}
function getUser(): Usuario{
    return{
        nome: 'Carla',
        email: 'carlaabruckmann@gmail.com'
    }
}