type Props = {
  contacts: string[]
}

export default function ContactsList({ contacts }: Props) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
