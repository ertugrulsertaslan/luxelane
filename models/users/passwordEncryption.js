import bcrypt from "bcrypt";

export default async function(password) {
 
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';

    return bcrypt.hashSync(`${myPlaintextPassword}${password}`,saltRounds);
    
}