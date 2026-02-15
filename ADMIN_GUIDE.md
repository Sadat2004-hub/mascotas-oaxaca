# 🐾 Mascotas Oaxaca - Panel de Administración

## ✅ Instalación Completada

Se ha integrado exitosamente **Sanity CMS** en el proyecto de Mascotas Oaxaca, manteniendo completamente el diseño y colores originales de la página.

---

## 🚀 Acceso al Panel de Administración

### **URL del Admin:**
```
http://localhost:3000/admin
```

### **Primera vez:**
1. Abre tu navegador en `http://localhost:3000/admin`
2. Te pedirá que inicies sesión con tu cuenta de Sanity
3. Usa las credenciales de: **Silvia Peña** (la cuenta que creaste)
4. Una vez autenticado, tendrás acceso completo al panel

---

## 📝 Cómo Agregar un Negocio

### **Paso 1: Acceder al Admin**
- Ve a `http://localhost:3000/admin`
- Click en **"Negocios"** en el menú lateral

### **Paso 2: Crear Nuevo Negocio**
- Click en el botón **"+ Create"** (arriba a la derecha)
- Verás un formulario con todos los campos

### **Paso 3: Llenar la Información**

#### **Campos Obligatorios:**
- ✅ **Nombre del Negocio**: Ej. "Veterinaria San Francisco"
- ✅ **Slug**: Click en "Generate" para auto-generar desde el nombre
- ✅ **Municipio**: Selecciona de la lista (Oaxaca de Juárez, Xoxocotlán, etc.)
- ✅ **Categoría**: Selecciona la categoría principal (Veterinarias, Estéticas, etc.)

#### **Campos Opcionales pero Recomendados:**
- 📝 **Descripción**: Texto descriptivo del negocio
- 📍 **Dirección Completa**: Dirección física
- 🗺️ **URL de Google Maps**: 
  - Ve a Google Maps
  - Busca el negocio
  - Click en "Share" → "Embed a map"
  - Copia solo la URL del `src` del iframe
- 📞 **Teléfono/WhatsApp**: Formato: 529511234567 (sin + ni espacios)
- 🖼️ **Imagen Principal**: Arrastra y suelta una imagen
- 🖼️ **Galería de Imágenes**: Puedes agregar múltiples imágenes
- 🏷️ **Etiquetas/Servicios**: Ej. urgencias-24h, cirugia, rayos-x
- ⏰ **Horarios de Apertura**: 
  - Click en "Add item"
  - Días: "Lunes a Viernes"
  - Horario: "09:00 - 18:00"
- 💰 **Rango de Precios**: $, $$, o $$$
- ⭐ **Calificación**: Número del 1 al 5 (ej. 4.5)
- 💬 **Reseñas**: Puedes agregar reseñas manualmente

#### **Campo de Ordenamiento:**
- 🔢 **Orden de aparición**: Número para ordenar (1 = primero, 2 = segundo, etc.)
  - Por defecto es 100
  - Los negocios con número menor aparecen primero

### **Paso 4: Publicar**
- Click en **"Publish"** (botón verde arriba a la derecha)
- ¡Listo! El negocio aparecerá en la página web en máximo 60 segundos

---

## 🎨 Características Implementadas

### ✅ **Lo que SÍ está funcionando:**
1. ✅ Panel de administración en `/admin`
2. ✅ Formularios visuales para agregar/editar negocios
3. ✅ Upload de imágenes drag & drop
4. ✅ Sistema de ordenamiento personalizado
5. ✅ Filtros por municipio y categoría
6. ✅ Revalidación automática cada 60 segundos
7. ✅ Diseño original de la página mantenido al 100%
8. ✅ Colores naranja, verde y rojo preservados
9. ✅ Todas las páginas dinámicas funcionando:
   - Homepage con negocios destacados
   - Páginas por municipio
   - Páginas por categoría
   - Páginas de detalle de negocio

### 📋 **Campos Disponibles:**
- Información básica (nombre, slug, descripción)
- Ubicación (municipio, dirección, mapa)
- Contacto (teléfono/WhatsApp)
- Imágenes (principal + galería)
- Categorización (categoría principal)
- Servicios (etiquetas/tags)
- Horarios (días y horas)
- Precios (rango)
- Calificación y reseñas
- Orden de aparición

---

## 🔄 Migración de Datos Existentes

Los 3 negocios que tenías en `src/data/db.ts` necesitan ser migrados manualmente:

### **Negocios a migrar:**
1. Hospital Veterinario de Oaxaca
2. Grooming Oaxaca Loft
3. Café de las Mascotas

**¿Quieres que los migre automáticamente o prefieres hacerlo manualmente desde el admin?**

---

## 🌐 URLs Importantes

| Página | URL |
|--------|-----|
| Homepage | http://localhost:3000 |
| Admin Panel | http://localhost:3000/admin |
| Ejemplo Municipio | http://localhost:3000/oaxaca-centro |
| Ejemplo Categoría | http://localhost:3000/oaxaca-centro/veterinarias |

---

## 💡 Tips y Recomendaciones

### **Para Imágenes:**
- Tamaño recomendado: 1200x800px
- Formato: JPG o PNG
- Peso máximo: 2MB por imagen
- Sanity las optimiza automáticamente

### **Para el Slug:**
- Siempre usa el botón "Generate"
- Debe ser único para cada negocio
- Formato: todo en minúsculas, sin espacios, con guiones

### **Para WhatsApp:**
- Formato correcto: `529511234567`
- Sin el símbolo `+`
- Sin espacios ni guiones
- Código de país (52) + código de área (951) + número

### **Para Google Maps:**
1. Ve a Google Maps
2. Busca el negocio
3. Click en "Share"
4. Click en "Embed a map"
5. Copia SOLO la URL del `src`:
   ```
   https://www.google.com/maps/embed?pb=...
   ```

---

## 🔧 Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm start
```

---

## 📊 Información del Proyecto Sanity

- **Proyecto ID**: 74h088u5
- **Dataset**: production
- **Plan**: Growth Trial
- **Status**: Active
- **Propietaria**: Silvia Peña

---

## ❓ Preguntas Frecuentes

### **¿Los cambios se ven inmediatamente?**
Los cambios se reflejan en máximo 60 segundos gracias al sistema de revalidación.

### **¿Puedo editar un negocio después de publicarlo?**
Sí, solo búscalo en el admin, edítalo y vuelve a publicar.

### **¿Puedo eliminar un negocio?**
Sí, desde el admin puedes eliminar cualquier negocio.

### **¿Cuántos negocios puedo agregar?**
El plan gratuito de Sanity permite contenido ilimitado.

### **¿Necesito programar para agregar negocios?**
No, todo se hace desde el panel visual del admin.

---

## 🎉 ¡Listo para Usar!

El sistema está completamente funcional. Puedes empezar a agregar negocios desde el admin en:

**http://localhost:3000/admin**

¿Necesitas ayuda con algo específico? ¡Avísame! 🚀
