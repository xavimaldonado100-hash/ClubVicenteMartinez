// =====================================================================
// CONFIGURACIÓN GENERAL  ·  Textos, contacto, precios y Firebase
// =====================================================================
export const CONFIG = {
  clubName: 'Club Deportivo Vicente Martínez',
  city: 'Villa Alemana · Valparaíso',

  // Dirección y contacto
  addressShort: 'Los Eucaliptos 1600, Villa Alemana',
  addressFull: 'Los Eucaliptos 1600, Villa Alemana, Valparaíso',
  addressRegion: 'Los Eucaliptos 1600, Villa Alemana, Región de Valparaíso.',
  email: 'xavi.maldonado100@gmail.com',

  // Cancha
  fieldPrice: 20000,            // valor por hora (CLP)
  fieldPriceLabel: '$20.000',   // cómo se muestra en pantalla
  fieldHours: '08:00 a 20:00 hrs',

  // Correo del ADMINISTRADOR (el mismo que creas en Firebase > Authentication).
  // Solo esta cuenta podrá editar fotos, arriendos, tesorería, etc.
  adminEmail: 'xavi.maldonado100@gmail.com',

  // Clave SOLO para el modo prueba sin Firebase. Déjala vacía ('') para no exponer ninguna clave.
  // Con Firebase activo no se usa: se entra con correo y contraseña de Authentication.
  defaultAdminPin: '',

  // Responsable inicial (se puede editar desde la app en modo admin)
  presidentName: 'Rodrigo Fernando Maldonado Pradenas',
  presidentRole: 'Presidente',

  // Clave del respaldo local (cámbiala si quieres "resetear" lo guardado en los navegadores)
  localBackupKey: 'vm_club_state_backup_v1',

  // -------------------------------------------------------------------
  // FIREBASE (opcional, para que los cambios se vean en TODOS los celulares)
  // Sin esto, lo que edites solo se guarda en TU navegador.
  // Pega aquí la config de tu proyecto Firebase (Configuración > Tus apps > Web).
  // Ver README.md, sección "Guardar cambios para todos".
  // -------------------------------------------------------------------
  firebaseConfig: {
    apiKey: "AIzaSyC68pGGw6I1a09xAkPiM09W3H9wwZJT39o",
    authDomain: "app-vicente-martinez.firebaseapp.com",
    projectId: "app-vicente-martinez",
    storageBucket: "app-vicente-martinez.firebasestorage.app",
    messagingSenderId: "597725835967",
    appId: "1:597725835967:web:50d6f73e070fcc04820c0a",
    measurementId: "G-NJDCYPWKT1"
  }
};
