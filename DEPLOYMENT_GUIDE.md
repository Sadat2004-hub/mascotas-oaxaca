# 🚀 Desplegar Admin de Sanity a Producción

## ✅ Paso 1: Código ya subido a GitHub ✓

El código con Sanity CMS ya está en tu repositorio:
https://github.com/Sadat2004-hub/mascotas-oaxaca

---

## 🔧 Paso 2: Configurar Variables de Entorno en Vercel

### **Opción A: Desde la interfaz de Vercel (Recomendado)**

1. **Ve a Vercel**: https://vercel.com/dashboard

2. **Selecciona tu proyecto**: `mascotas-oaxaca`

3. **Ve a Settings**:
   - Click en "Settings" en el menú superior
   - Click en "Environment Variables" en el menú lateral

4. **Agrega estas 3 variables** (una por una):

   **Variable 1:**
   ```
   Name: NEXT_PUBLIC_SANITY_PROJECT_ID
   Value: 74h088u5
   Environment: Production, Preview, Development (selecciona todas)
   ```

   **Variable 2:**
   ```
   Name: NEXT_PUBLIC_SANITY_DATASET
   Value: production
   Environment: Production, Preview, Development (selecciona todas)
   ```

   **Variable 3:**
   ```
   Name: NEXT_PUBLIC_SANITY_API_VERSION
   Value: 2024-02-15
   Environment: Production, Preview, Development (selecciona todas)
   ```

5. **Guarda cada variable** haciendo click en "Save"

---

## 🔄 Paso 3: Redeploy

### **Opción A: Desde Vercel (Más rápido)**
1. Ve a "Deployments" en tu proyecto
2. Click en los 3 puntos (...) del deployment más reciente
3. Click en "Redeploy"
4. Espera 1-2 minutos

### **Opción B: Desde Git (Automático)**
Vercel detectará el push que acabamos de hacer y desplegará automáticamente.
Solo espera 2-3 minutos.

---

## ✅ Paso 4: Verificar

Una vez que termine el deployment:

1. **Ve a**: https://www.mascotasoaxaca.com/admin
2. **Deberías ver** el panel de Sanity
3. **Inicia sesión** con tu cuenta de Sanity
4. **¡Listo!** Ya puedes agregar negocios desde producción

---

## 🔍 Troubleshooting

### **Si el admin no carga:**

1. **Verifica las variables de entorno**:
   - Ve a Settings → Environment Variables
   - Confirma que las 3 variables estén ahí
   - Confirma que estén en "Production"

2. **Revisa los logs del deployment**:
   - Ve a Deployments
   - Click en el deployment más reciente
   - Revisa si hay errores

3. **Fuerza un nuevo deployment**:
   - Settings → General → "Redeploy"

### **Si ves errores de Sanity:**

1. **Verifica el Project ID**:
   - Ve a https://sanity.io/manage
   - Confirma que el ID sea `74h088u5`

2. **Agrega el dominio a Sanity**:
   - Ve a https://sanity.io/manage/project/74h088u5/settings/api
   - En "CORS Origins" agrega:
     - `https://www.mascotasoaxaca.com`
     - `https://mascotasoaxaca.com`
   - Marca "Allow credentials"

---

## 📱 Acceso Móvil

Una vez configurado, podrás acceder al admin desde:
- 💻 Computadora: https://www.mascotasoaxaca.com/admin
- 📱 Celular: https://www.mascotasoaxaca.com/admin
- 🌐 Cualquier dispositivo con internet

---

## 🎯 Resumen Rápido

1. ✅ Código subido a GitHub
2. ⏳ Agregar variables de entorno en Vercel
3. ⏳ Redeploy
4. ⏳ Acceder a mascotasoaxaca.com/admin

**Tiempo estimado**: 5-10 minutos

---

## 💡 Nota Importante

El archivo `.env.local` NO se sube a GitHub (está en .gitignore).
Por eso necesitas configurar las variables de entorno directamente en Vercel.

---

¿Necesitas ayuda con algún paso? ¡Avísame! 🚀
