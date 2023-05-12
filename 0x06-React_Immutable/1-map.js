import getImmutableObject from './0-fromjs'

const myObj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
};

// Convert the object to an immutable Map
const immutableMap = getImmutableObject;
