/* The template file show how to get started with notiFLY-data-wizard after downloading it.
 */

import { pushMember, updateMember, deleteMember, pushOrder, deleteOrder } from "../index.js";

/* memebr data format should be as below, some constraints:
 1. client_member_id & email should be unique
 2. gender : "m", "f", or "n"
*/
const memberbody = {
    client_member_id: "String",
    name: "Stirng",
    email: "String",
    gender: "m",
    birthday_year: 1970,
    birthday_month: 12,
    birthday_date: 5,
    city: "Taipei",
};

/* id: 
The member_id in notiFLY database.
It's the response you receive after calling pushMember function to create new member.
*/
const updateMemberBody = {
    id: "member_id_here",
    /* key-value pairs for fields you attempt to update  & their new value.
       Example as below:
    */
    gender: "m",
    city: "berlin",
};

const deleteMemberBody = {
    id: "member_id_here",
};

/*
0. Your member might generate new order at every seconds, 
   so include below function after checkout session in your website to update order data.
1. order data format should be as below.
*/
const orderBody = {
    id: "member_id_here",
    order: {
        order_id: 3,
        date: "2022-12-12",
        amount: 100,
        product: ["pants", "dress"],
    },
};

const deleteOrderBody = {
    id: "member_id_here",
    order: {
        order_id: 3,
        date: "2022-12-12",
        amount: 100,
        product: ["pants", "dress"],
    },
};

/* Call function in package 
Notice: Company's admin is authorized to generate API key on our website.
*/
await pushMember(memberbody, apikey);
await updateMember(updateMemberBody, apikey);
await deleteMember(deleteMemberBody, apikeyapikey);
await pushOrder(orderBody, apikey);
await deleteOrder(deleteOrderBody, apikey);
