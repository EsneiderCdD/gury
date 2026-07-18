export const dynamic = 'force-dynamic'

const WP_API = 'https://elgury.com.co/wp-json/denuncias/v1'

export async function GET() {
  console.log('🔍 Route Handler: probando conexión con WordPress...')

  const res = await fetch(`${WP_API}/test-conexion`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await res.json()

  console.log('✅ Route Handler: respuesta de test-conexion recibida →', data.message)

  return Response.json(data, { status: res.status })
}

export async function POST(request: Request) {
  const body = await request.json()

  console.log('📦 Route Handler: datos capturados del formulario →', {
    cedula: body.cedula,
    nombre_completo: body.nombre_completo,
    relato: body.relato?.slice(0, 50) + '...',
  })

  const res = await fetch(`${WP_API}/crear`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  console.log('✅ Route Handler: respuesta de WordPress →', data.message)

  return Response.json(data, { status: res.status })
}
