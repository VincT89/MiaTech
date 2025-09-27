export default function About() {
  return (
    <div className="p-6 space-y-6 text-center m-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p>Descrizione delle funzionalita' dell'applicazione.</p>
      <p>Creazione di diversi componenti, tra cui:</p>
      <ul className="text-left list-disc list-inside">
        <li className="text-lg font-semibold">HelloWorld</li>
        <p className="m-2">Un componente che visualizza un messaggio di benvenuto.</p>
        <li className="text-lg font-semibold">Counter</li>
        <p className="m-2">Un componente che tiene traccia di un contatore.</p>
        <li className="text-lg font-semibold">TextInput</li>
        <p className="m-2">Un componente per l'input di testo.</p>
        <li className="text-lg font-semibold">LoginForm</li>
        <p className="m-2">Un componente per il login degli utenti.</p>
        <li className="text-lg font-semibold">UncontrolledInput</li>
        <p className="m-2">Un componente per l'input non controllato.</p>
        <li className="text-lg font-semibold">List</li>
        <p className="m-2">Un componente per la visualizzazione di una lista di elementi.</p>
        <li className="text-lg font-semibold">ContainerCard</li>
        <p className="m-2">Un componente per la visualizzazione di un contenitore con intestazione.</p>
        <li className="text-lg font-semibold">TodoList</li>
        <p className="m-2">Un componente per la gestione di una lista di attività da svolgere ricavata da un'API.</p>
      </ul>
    </div>
  )
}