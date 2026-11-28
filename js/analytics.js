document.addEventListener('DOMContentLoaded', () => {
    window.dataLayer = window.dataLayer || [];

    // 1. Clics a WhatsApp
    document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            const ubicacion = enlace.closest('header, nav')
                ? 'header'
                : enlace.closest('footer')
                    ? 'footer'
                    : 'cuerpo_pagina';

            window.dataLayer.push({
                event: 'contacto_whatsapp',
                metodo_contacto: 'whatsapp',
                ubicacion_boton: ubicacion,
                texto_boton: enlace.textContent.trim()
            });
        });
    });

    // 2. Clics a llamadas telefónicas
    document.querySelectorAll('a[href^="tel:"]').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            window.dataLayer.push({
                event: 'llamada_telefonica',
                metodo_contacto: 'telefono',
                numero_destino: enlace.getAttribute('href').replace('tel:', '')
            });
        });
    });

    // 3. Clics en las maquetas del portafolio
    document.querySelectorAll('a[href*="demos/"]').forEach((demo) => {
        demo.addEventListener('click', () => {
            window.dataLayer.push({
                event: 'ver_maqueta',
                nombre_maqueta: demo.textContent.trim(),
                ruta_maqueta: demo.getAttribute('href')
            });
        });
    });

    // 4. Envío de formularios (listo para futuras landing pages)
    document.querySelectorAll('form').forEach((formulario) => {
        formulario.addEventListener('submit', () => {
            window.dataLayer.push({
                event: 'envio_formulario',
                id_formulario: formulario.id || 'formulario_contacto'
            });
        });
    });
});