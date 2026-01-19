# 🍔TodoFood Frontend

TodoFood es una aplicación web desarrollada en Vite + React + TypeScript que funciona como frontend para el sistema de gestión de hamburguesas TodoFood. Permite manejar productos, ingredientes, promociones, pedidos, entre otros.

Esta conectada a un backend realizado con Springboot + PostgresSQL
🔗 [Repositorio del backend (Spring Boot + PostgresSQL)](https://github.com/maurogarzia/BackEndTodoFood)

## Tecnologías utilizadas

- ⚡ TypeScript  
- ⚛️ Next.js 
- 🗂 Zustand (manejo de estado)  
- 🔑 JWT (jwt-decode)  
- 💬 SweetAlert2  

---
## 🧩Estructura del proyecto

```bash
├── assets # Imágenes estáticas
├── app # Rutas del proyecto
├── components # Componentes de React
├── routes # Rutas de navegación
├── services # Cruds de las diferentes entidades
├── store # Estado global con Zustand
├── types # Tipos TypeScript de entidades
├── urls # Rutas para endpoints de entidades
├── utils # Funciones reutilizables
```
---
▶️ Cómo correr el proyecto
1. Cloná el repositorio:
```bash
git clone https://github.com/maurogarzia/FrontEndTodoFoodWithNext.js
cd frontEndTodoFood
```
2. Instalá dependencias:
```bash
pnpm install
```
3. Corré la aplicación en modo de desarrollo: 
```bash
pnpm dev 
```
4.Abrí en el navegador el link que aparece en la terminal (ej: http://localhost:3000)

AUTOR: Desarrollado por maurogarzia


