import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import firebase from '../config';

export default class ColecaoCliente implements ClienteRepositorio{

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
            }
        }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            this.colecao().doc(cliente.id).set(cliente)
        }
        return null
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }

    private colecao() {
        return firebase
        .firestore()
        .collection('clientes')
        .withConverter(this.#conversor)
    }
}



}