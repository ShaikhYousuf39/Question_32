let current_users: string[] = ["admin","zia","danish","yousuf","hamza"]

let new_users: string[] = ["admin","zia","saad","ahmed","zuhaib"]

let current_users_lower : string[] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase()) ){
        console.log(`Sorry the ${new_user} is not available. `)
}else{
    console.log(`Yes ${new_user} is available`)

}
}