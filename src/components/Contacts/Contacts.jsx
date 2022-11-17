// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/actions';
import { ContactItem, ContactDeleteButton } from './Contacts.styled';

const getFilteredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const visibleContacts = getFilteredContacts(contacts, filterValue);

  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ContactDeleteButton
            style={{ marginLeft: '8px' }}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactDeleteButton>
        </ContactItem>
      ))}
    </ul>
  );
};

// ContactList.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };