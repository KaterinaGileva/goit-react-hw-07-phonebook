import Filter from '../../components/StatusFilter/StatusFilter';
import ContactList from '../../components/ContactList/ContactList';

export default function Home() {
  return (
    <main>
      <Filter />
      <h1>Contacts</h1>
      <ContactList />
    </main>
  );
}