import nookies from "nookies";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Aquí iría tu lógica de autenticación.
    // Por simplicidad, asumimos que la autenticación fue exitosa.

    nookies.set(null, "username", username, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, // 30 días.
      path: "/",
      secure: true,
    });
    nookies.set(null, "token", "mi-token-seguro", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60, // 30 días.
      path: "/",
    });

    return new Response(
      JSON.stringify({ message: "Inicio de sesión exitoso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en el servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  // Manejo de solicitud GET, si es necesario
  return new Response(null, { status: 405 }); // Método no permitido para GET
}
