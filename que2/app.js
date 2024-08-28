const axios = require('axios');

const dataset = [
  {}, // empty body
  {
    firstName: 'Mitali',
    lastName: 'Gupta',
    phoneNumber: 9284880847,
    emailId: 'Mitali@test.com',
  },
  {
    firstName: 'Tushar',
    lastName: 'Gupta',
    phoneNumber: 9284880847,
    emailId: 'Tushar@test.com',
  },
  {
    firstName: 'Mitali',
    lastName: 'Gupta',
    phoneNumber: 9284880847,
    emailId: 'Mitali@test.com',
  },
  {
    firstName: '',
    lastName: 'Doe',
    phoneNumber: 9876543210,
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'John',
    lastName: '',
    phoneNumber: 9876543210,
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: 'invalidPhoneNumber',
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: 9876543210,
    emailId: 'invalidEmail',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: 9876543210,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: 9876543210,
    emailId: 'jane.doe@test.com',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    phoneNumber: 8765432109,
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'JohnJohnJohnJohnJohnJohnJohnJohnJohnJohn',
    lastName: 'Doe',
    phoneNumber: 9876543210,
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'John',
    lastName: 'DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe',
    phoneNumber: 9876543210,
    emailId: 'john.doe@test.com',
  },
  {
    firstName: 'Niket',
    lastName: 'Tongare',
    phoneNumber: 80844064498213123,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 'Niket',
    lastName: 'Tongare',
    phoneNumber: 80844064498,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 'Niket',
    lastName: 'Tongare',
    phoneNumber: 80844064498,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 'Niket',
    lastName: 'Tongare',
    phoneNumber: 80844064498,
    emailId: '123Niket123@test.com@Niket.c',
  },
  {
    firstName: 'Niket',
    lastName: 12,
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 'Niket',
    lastName: 'Niket',
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 123,
    lastName: 'Niket',
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: '123',
    lastName: 'Niket',
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: '123',
    lastName: '123',
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
  },
  {
    firstName: 'Mitali',
    lastName: 'Gupta',
    phoneNumber: 8084444983,
    emailId: '123Niket123@test.com',
    extra_field: 123,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: 987654321212312242134123123213,
    emailId: 'jane.doe@test.com',
  },
];

console.log("dataset", dataset.length);


(async () => {
  for (const body of dataset) {
    try {
      const res = await axios.post(
        'https://bfhldevapigw.healthrx.co.in/automation-campus/create/user',
        body,
        {
          headers: {
            'roll-number': '240340120102',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(res.response.data);
    } catch (error) {
      console.log(error.response.status, error.response.statusText);
    }
  }
})();
