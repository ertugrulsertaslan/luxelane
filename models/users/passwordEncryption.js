import bcrypt from "bcrypt";

export default async function(password) {
 
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(myPlaintextPassword, salt);
    
    return password;
    
}