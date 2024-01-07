import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar Fatura no Gmail',
    prioridade: 'Urgente',
    status: 'Concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'Importante',
    status: 'Pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>Tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
