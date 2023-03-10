import PropTypes from 'prop-types';
import { selectFilterStatus, selectFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { ContactUl, ContactItem } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsSliceApi';

export default function ContactList() {
  const filterValue = useSelector(selectFilterValue);
  const filterStatus = useSelector(selectFilterStatus);
  
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  
  let getVisibleContacts = (contacts, filter, status) => {
    if (contacts)
      switch (status) {
        case 'personal':
          return contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .filter(contact => contact.personal === true);

        case 'others':
          return contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .filter(contact => contact.personal === false);

        default:
          return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );
      }
  };

  const visibleContacts = getVisibleContacts(
    contacts,
    filterValue,
    filterStatus
  );

  return (
    <>
      {error && <p>Error loading, please try again </p>}

      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ContactUl>
          {visibleContacts.map(({ name, phone, id, personal }) => (
            <ContactItem
              key={id}
              style={
                personal === false
                  ? { backgroundColor: `green` }
                  : { backgroundColor: `yellow` }
              }
            >
              <Contact name={name} phone={phone} id={id} personal={personal} />
            </ContactItem>
          ))}
        </ContactUl>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};