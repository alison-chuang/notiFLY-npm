[![NPM](https://nodei.co/npm/notifly-data-wizard.png)](https://nodei.co/npm/notifly-data-wizard/)

notiFLY-data-wizard is a npm package designed to simplify the process of updating member data and orders for the [notiFLY](https://gotolive.online).

With this package, developers of our client company could easily update member information and orders without writing a lot of code.

---

### Installation

To install notiFLY-data-wizard, use the following command:

```
npm install notifly-data-wizard
```

### Usage

##### 1. API Key :

You must obtain an API key from the [notiFLY website](https://gotolive.online) to use the functions in this package.

##### 2. import functions:

```
import {
    pushMember, updateMember, deleteMember,
    pushOrder, deleteOrder
} from "notifly-data-wizard";

```

---

##### 1. pushMember

Use pushMember function to add new members to the notiFLY database.
The input parameter is an object with member data in the following format:

```
{
  client_member_id: "String",
  name: "String",
  email: "String",
  gender: "m",
  birthday_year: 1970,
  birthday_month: 12,
  birthday_date: 5,
  city: "Taipei"
}

```

The client_member_id and email fields should be unique. After calling pushMember, you will receive a response with the member_id that you can use to update or delete member data.

```
const apikey = "your_api_key_here";
const memberbody = {
  client_member_id: "String",
  name: "String",
  email: "String",
  gender: "m",
  birthday_year: 1970,
  birthday_month: 12,
  birthday_date: 5,
  city: "Taipei",
};

await pushMember(memberbody, apikey);
```

##### 2. updateMember

Use updateMember function to update member data in the notiFLY database. The input parameter is an object with the member_id and the key-value pairs for fields you attempt to update & their new value.

```
const apikey = "your_api_key_here";
const updateMemberBody = {
  id: "member_id_here",
  gender: "m",
  city: "berlin",
};

await updateMember(updateMemberBody, apikey);
```

##### 3. deleteMember

Use deleteMember function to delete a member from the notiFLY database. The input parameter is an object with the member_id.

```
const apikey = "your_api_key_here";
const deleteMemberBody = {
  id: "member_id_here",
};

await deleteMember(deleteMemberBody, apikey);
```

##### 4. pushOrder

Use pushOrder function to add new orders of certain member to the notiFLY database. The input parameter is an object with the member_id and order data in the following format:

```
{
  id: "member_id_here",
  order: {
    order_id: 3,
    date: "2022-12-12",
    amount: 100,
    product: ["pants", "dress"],
  },
}
```

Usage

```
const apikey = "your_api_key_here";
const orderBody = {
  id: "member_id_here",
  order: {
    order_id: 3,
    date: "2022-12-12",
    amount: 100,
    product: ["pants", "dress"],
  },
};

await pushOrder(orderBody, apikey);
```

##### 5. deleteOrder

Use deleteOrder function to delete an order from the notiFLY database. The input parameter is an object with the member_id and order data in the following format:

```
const apikey = "your_api_key_here";
const deleteOrderBody = {
    id: "member_id_here",
    order: {
        order_id: 3,
        date: "2022-12-12",
        amount: 100,
        product: ["pants", "dress"],
    },
};

await deleteOrder(deleteOrderBody, apikey);
```
