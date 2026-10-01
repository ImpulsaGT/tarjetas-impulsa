(function () {
  "use strict";

  var app = document.getElementById("app");
  var slug = new URLSearchParams(location.search).get("p");

  // Solo acepta llaves propias de TARJETAS (evita ?p=__proto__, ?p=constructor, etc.)
  var contacto =
    slug && /^[a-z0-9]+$/.test(slug) && Object.prototype.hasOwnProperty.call(TARJETAS, slug)
      ? TARJETAS[slug]
      : null;

  function crear(tag, attrs, texto) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      el.setAttribute(k, attrs[k]);
    });
    if (texto) el.textContent = texto;
    return el;
  }

  function enlace(clase, href, etiqueta) {
    var a = crear("a", { "class": "link-area " + clase, "aria-label": etiqueta });
    if (href) a.href = href;
    if (href && href.indexOf("https://") === 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  }

  function soloDigitos(v) {
    return String(v || "").replace(/\D/g, "");
  }

  function urlSegura(v) {
    return typeof v === "string" && /^https:\/\/(www\.)?linkedin\.com\//.test(v) ? v : null;
  }

  if (!contacto) {
    document.title = "IMPULSA | Tarjeta digital";
    app.className = "no-encontrada";
    app.appendChild(crear("h1", {}, "Tarjeta no encontrada"));
    app.appendChild(crear("p", {}, "Revisa el enlace que te compartieron."));
    var ir = crear("a", { href: "https://impulsa.com.gt", rel: "noopener noreferrer" }, "Visitar IMPULSA");
    app.appendChild(ir);
    return;
  }

  var tel = soloDigitos(contacto.telefono);
  document.title = contacto.nombreCompleto + " | IMPULSA";

  app.appendChild(crear("img", {
    "class": "tarjeta",
    src: "img/" + String(contacto.imagen).replace(/[^a-z0-9._-]/gi, ""),
    alt: "Tarjeta digital de " + contacto.nombreCompleto + " - IMPULSA"
  }));
  app.appendChild(enlace("whatsapp", "https://wa.me/" + tel, "WhatsApp"));
  app.appendChild(enlace("instagram", "https://www.instagram.com/impulsa.gt/", "Instagram"));
  app.appendChild(enlace("facebook", "https://www.facebook.com/ImpulsaDesarrollos", "Facebook"));
  var li = urlSegura(contacto.linkedin);
  if (li) app.appendChild(enlace("linkedin", li, "LinkedIn"));
  app.appendChild(enlace("tiktok", "https://www.tiktok.com/@impulsa.gt", "TikTok"));
  app.appendChild(enlace("telefono", "tel:+" + tel, "Llamar"));

  var guardar = crear("button", {
    "class": "boton-real guardar-contacto",
    type: "button",
    "aria-label": "Guardar contacto"
  }, "GUARDAR CONTACTO");
  guardar.addEventListener("click", guardarContacto);
  app.appendChild(guardar);

  var visitar = crear("a", {
    "class": "boton-real visitar-impulsa",
    href: "https://impulsa.com.gt",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Visitar IMPULSA"
  }, "VISITAR IMPULSA");
  app.appendChild(visitar);

  var espacio = crear("div", { "class": "espacio-extra" });
  app.appendChild(espacio);

  // Ajustes de posicion por tarjeta (solo numeros)
  function pct(v) {
    return typeof v === "number" && isFinite(v) ? v + "%" : null;
  }
  function aplicar(el, prop, v) {
    var p = pct(v);
    if (el && p) el.style[prop] = p;
  }

  aplicar(espacio, "paddingBottom", contacto.extraBottomPercent);
  if (contacto.iconsTop) {
    ["whatsapp", "instagram", "facebook", "linkedin", "tiktok", "telefono"].forEach(function (cls) {
      aplicar(app.querySelector("." + cls), "top", contacto.iconsTop);
    });
  }
  if (contacto.iconOverrides) {
    Object.keys(contacto.iconOverrides).forEach(function (cls) {
      if (!/^[a-z]+$/.test(cls)) return;
      var el = app.querySelector(".link-area." + cls);
      var o = contacto.iconOverrides[cls];
      if (!el || !o) return;
      aplicar(el, "top", o.top);
      aplicar(el, "left", o.left);
      aplicar(el, "width", o.width);
      aplicar(el, "height", o.height);
    });
  }
  aplicar(guardar, "top", contacto.guardarTop);
  aplicar(guardar, "height", contacto.guardarHeight);
  aplicar(visitar, "top", contacto.visitarTop);
  aplicar(visitar, "height", contacto.visitarHeight);

  function limpiarVcard(v) {
    return String(v || "").replace(/[\r\n]/g, " ").replace(/([,;\\])/g, "\\$1");
  }

  function guardarContacto() {
    var nombrePila = contacto.nombre || contacto.nombreCompleto;
    var vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + limpiarVcard(contacto.apellido) + ";" + limpiarVcard(nombrePila) + ";;;",
      "FN:" + limpiarVcard(contacto.nombreCompleto),
      "ORG:IMPULSA",
      "TITLE:" + limpiarVcard(contacto.puesto),
      "TEL;TYPE=CELL:+" + tel,
      "EMAIL;TYPE=INTERNET:" + limpiarVcard(contacto.correo),
      "URL:https://impulsa.com.gt",
      "END:VCARD"
    ].join("\r\n");

    var archivo = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(archivo);
    a.download = (nombrePila + "-" + contacto.apellido).replace(/\s+/g, "-").replace(/[^\wÀ-ſ-]/g, "") + ".vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 1000);
  }
})();
