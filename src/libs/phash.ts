// Password hashing -> bcrypt;
import bcrypt from 'bcrypt';

/**
 * @param n input password
 */

export default async (n: string) => {
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashpassword = await bcrypt.hash(n, genSalt);
    return hashpassword;
};