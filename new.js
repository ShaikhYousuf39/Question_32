"use strict";
let current_users = ["admin", "zia", "danish", "yousuf", "hamza"];
let new_users = ["admin", "zia", "saad", "ahmed", "zuhaib"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry the ${new_user} is not available. `);
    }
    else {
        console.log(`Yes ${new_user} is available`);
    }
}
