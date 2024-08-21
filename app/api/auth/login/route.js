import { dbConnect } from '../../db'; // Adjust path as needed
import { compare } from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Establish database connection
    const connection = await dbConnect();

    // Check if the user exists
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'No user found with this email' }), {
        status: 404,
      });
    }

    const user = rows[0];

    // Compare the hashed password with the provided one
    const isValid = await compare(password, user.password);

    if (!isValid) {
      return new Response(JSON.stringify({ message: 'Invalid password' }), {
        status: 401,
      });
    }

    // Login successful
    return new Response(JSON.stringify({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
