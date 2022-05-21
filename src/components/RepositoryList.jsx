import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform2',
  description: 'Forms in React',
  link: 'https://youtube.com'
}

export function RepositoryList() {
  return (
    <section className="repository-lis">
      <h1>Lista de repositórios</h1>

      <ul>        
        <RepositoryItem repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
