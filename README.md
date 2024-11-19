# 📱 **App Corporativa: Comunicación y Monitoreo Laboral**

## 🚀 **Descripción**
Esta aplicación móvil está diseñada para optimizar la comunicación y la colaboración interna en una organización empresarial. Además, integra el monitoreo del ambiente laboral mediante sensores de temperatura, humedad y luminosidad. La aplicación también permite programar reuniones y se integra con el correo corporativo para facilitar una experiencia de comunicación fluida.

---

## 🛠️ **Tecnologías Utilizadas**

### Frontend
- **HTML5**: Estructura de la interfaz de usuario.
- **CSS3**: Estilización básica.
- **Bootstrap 4**: Framework para diseño responsivo y estilos avanzados.
- **JavaScript (ES6)**: Lógica de la aplicación y gestión de eventos.

### Plugins de Cordova
- **`cordova-plugin-sensors`**: Para acceder a los sensores del dispositivo.
- **`cordova-plugin-email-composer`**: Para enviar correos electrónicos a través de la aplicación nativa del dispositivo.

### Plataforma
- **Cordova**: Framework para construir aplicaciones móviles multiplataforma utilizando tecnologías web.

### Entorno
- **Android**: Plataforma de destino para la aplicación.

---

## 🏗️ **Arquitectura de la Aplicación**

La aplicación sigue una arquitectura modular dividida en las siguientes partes:

1. **Estructura HTML**:
   - Diseñada con un contenedor principal dividido en un *sidebar* para navegación y un panel principal para mostrar las funcionalidades.
   
2. **JavaScript Modular**:
   - Gestión de eventos de usuario.
   - Comunicación con sensores mediante plugins Cordova.
   - Lógica para mensajería, programación de reuniones y correo.

3. **Plugins de Cordova**:
   - Interacción directa con APIs nativas del dispositivo para obtener datos de sensores y utilizar el correo corporativo.

4. **Diseño Responsivo**:
   - Construido con Bootstrap 4 para garantizar una experiencia óptima en dispositivos móviles.

---

## 📋 **Funcionalidades Principales**

### 🔗 **Comunicación Interna**
- **Mensajería Instantánea**:
  - Permite enviar mensajes rápidos entre empleados.
  - Interfaz simple con un campo de texto y un visor de mensajes.

### 🗓️ **Colaboración y Programación de Reuniones**
- Formulario intuitivo para agendar reuniones.
- Selección de fecha y hora de forma sencilla.

### 🌡️ **Monitoreo Ambiental**
- **Sensores integrados**:
  - **Temperatura**: Monitorea la temperatura ambiente.
  - **Humedad**: Muestra el porcentaje de humedad.
  - **Luminosidad**: Indica la intensidad lumínica en lux.
- Botón para actualizar los datos en tiempo real.

### 📧 **Integración con Correo Corporativo**
- Acceso directo al correo corporativo desde la aplicación.
- Utiliza el cliente de correo nativo del dispositivo para enviar correos.

---

## 📦 **Cómo Instalar y Ejecutar**

### Requisitos Previos
1. Node.js y npm instalados.
2. Cordova instalado globalmente:
   ```bash
   npm install -g cordova
   ```
3. Android Studio configurado para compilar y probar la aplicación.

### Pasos de Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DevSirclain/ipchile_PAM_I_M3_EPE3.git
   cd app-corporativa
   ```

2. Instalar dependencias y plataformas:
   ```bash
   cordova platform add android
   cordova plugin add cordova-plugin-sensors
   cordova plugin add cordova-plugin-email-composer
   ```

3. Construir la aplicación:
   ```bash
   cordova build android
   ```

4. Ejecutar en un dispositivo o emulador:
   ```bash
   cordova run android
   ```

---

## 🧩 **Estructura del Proyecto**
```
/project-folder
  ├── index.html           # Página principal
  ├── css/
  │   └── index.css       # Estilos personalizados
  ├── js/
  │   └── app.js           # Lógica de la aplicación
  ├── plugins/             # Plugins Cordova instalados
  ├── config.xml           # Configuración de Cordova
  ├── platforms/           # Código específico de cada plataforma
  └── README.md            # Este archivo
```

---

## 🛠️ **Futuras Mejoras**
1. **Notificaciones Push**:
   - Integración de notificaciones para mensajes y alertas de reuniones.
2. **Soporte Multiplataforma**:
   - Extensión a iOS.
3. **Analíticas Avanzadas**:
   - Recolección de datos sobre el uso de la aplicación y métricas ambientales para análisis.

---

## 📧 **Contacto**
Si tienes preguntas o sugerencias, no dudes en contactarnos:
- **Equipo de Desarrollo**: [desarrollo@empresa.com](mailto:desarrollo@empresa.com)
- **Sitio Web**: [www.empresa.com](http://www.empresa.com)

---

¡Gracias por usar nuestra aplicación! 🎉

---
