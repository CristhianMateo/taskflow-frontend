import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Paso 2 (Sesión 7): GitHub Pages sirve el proyecto en
  // https://<usuario>.github.io/<nombre-de-tu-repo>/, no en la raíz del
  // dominio. Con base relativa (./) los assets se resuelven bien sin
  // importar cómo se llame tu repositorio ni si usas dominio propio —
  // no hace falta escribir el nombre exacto ni cambiarlo después.
  base: './',
})
