// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.oaklandcouplestherapy.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.oaklandcouplestherapy.com/","title_tag":"Oakland Couples Therapy & Counseling | Esther Lerman","meta_description":"Oakland Couples Therapy for communication problems, infidelity, same-sex, interfaith and long-term relationship support. Relationship counseling in Oakland."},{"page_url":"https://www.oaklandcouplestherapy.com/about-me","title_tag":"Relationship Counseling Oakland | About Esther Lerman","meta_description":"Learn about Esther Lerman, LMFT in Oakland. Providing relationship counseling, marital therapy, cross-cultural and interfaith couples counseling."},{"page_url":"https://www.oaklandcouplestherapy.com/article","title_tag":"Parenting Stress & Couples Counseling Oakland | Blog","meta_description":"Relationship counseling in Oakland for parenting stress, new baby challenges, communication problems and long-term relationship support."},{"page_url":"https://www.oaklandcouplestherapy.com/contact-me","title_tag":"Oakland Couples Therapy Contact | Esther Lerman","meta_description":"Contact Oakland Couples Therapy for relationship counseling, marital therapy and communication problems therapy in Oakland."},{"page_url":"https://www.oaklandcouplestherapy.com/services","title_tag":"Couples Counseling Oakland Services | Esther Lerman","meta_description":"Couples counseling in Oakland, including marital therapy, same-sex couples therapy, interfaith and cross-cultural relationships support."},{"page_url":"https://www.oaklandcouplestherapy.com/hours-and-fees","title_tag":"Couples Counseling Oakland Fees | Esther Lerman","meta_description":"Hours and fees for Oakland Couples Therapy. Learn session rates for couples counseling, marital therapy and relationship counseling in Oakland."}],"keywords":["Oakland Couples Therapy","Relationship Counseling Oakland","Couples Counseling Oakland","Marital Therapy Oakland","Infidelity Therapy Oakland","Parenting Stress Counseling","Same-Sex Couples Therapy","Interfaith Couples Counseling","Communication Problems Therapy","Long-Term Relationship Support","Cross-cultural relationships"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.oaklandcouplestherapy.com/#localbusiness",
  "name": "Oakland Couples Therapy - Esther Lerman, LMFT",
  "url": "https://www.oaklandcouplestherapy.com/",
  "image": [
    "https://static.wixstatic.com/media/bdd247_1cb5de71a41c4ea7bf6499428543b4e5~mv2.jpg/v1/fill/w_198,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7202_300_edited.jpg"
  ],
  "description": "Couples counseling and individual therapy in Oakland, CA with Esther Lerman, LMFT. Specializing in relationship issues, marital therapy, same-sex couples, interfaith and interracial couples, premarital counseling, and relationship stress.",
  "telephone": "+1-510-759-4135",
  "email": "mailto:estherlermanmft@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6239 College Ave., Suite #303",
    "addressLocality": "Oakland",
    "addressRegion": "CA",
    "postalCode": "94618",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.848",
    "longitude": "-122.252"
  },
  "areaServed": {
    "@type": "City",
    "name": "Oakland"
  },
  "sameAs": [],
  "priceRange": "$$$",
  "founder": {
    "@type": "Person",
    "name": "Esther Lerman",
    "jobTitle": "Licensed Marriage and Family Therapist",
    "email": "mailto:estherlermanmft@gmail.com"
  },
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6239 College Ave., Suite #303",
      "addressLocality": "Oakland",
      "addressRegion": "CA",
      "postalCode": "94618",
      "addressCountry": "US"
    }
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "10:00",
      "closes": "18:30"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "price": "195",
      "priceCurrency": "USD",
      "category": "Therapy session",
      "description": "Standard therapy session fee; sliding scale available as needed, determined after first session."
    }
  ],
  "serviceOffer": [
    {
      "@type": "Service",
      "name": "Couples counseling",
      "description": "Couples counseling to address communication problems, conflict, distance, infidelity, parenting transitions, and intimacy issues.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    },
    {
      "@type": "Service",
      "name": "Individual counseling",
      "description": "Individual therapy for relationship concerns, co-dependency, grief, self-esteem, identity issues, LGBT concerns, and issues of aging.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    },
    {
      "@type": "Service",
      "name": "Premarital counseling",
      "description": "Premarital counseling for couples preparing for marriage or long-term commitment.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    },
    {
      "@type": "Service",
      "name": "Marital therapy",
      "description": "Marital therapy for married couples seeking to improve communication, connection, and intimacy.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    },
    {
      "@type": "Service",
      "name": "Cross-cultural and interfaith couples counseling",
      "description": "Counseling for interracial, interfaith, and cross-cultural couples and their adult children.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    },
    {
      "@type": "Service",
      "name": "Grief counseling",
      "description": "Therapy for grief and loss, including bereavement and life transitions.",
      "areaServed": {
        "@type": "City",
        "name": "Oakland"
      }
    }
  ],
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": "https://www.oaklandcouplestherapy.com/about-me",
      "url": "https://www.oaklandcouplestherapy.com/about-me",
      "name": "About Me - Esther Lerman, MFT",
      "description": "Background, education, training and professional experience of Esther Lerman, Marriage and Family Therapist in Oakland, CA."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.oaklandcouplestherapy.com/article",
      "url": "https://www.oaklandcouplestherapy.com/article",
      "name": "Blogposts - Relationship Articles",
      "description": "Relationship articles by Esther Lerman, LMFT on topics such as relationship stress with a new baby and family-of-origin dynamics in couples."
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.oaklandcouplestherapy.com/contact-me",
      "url": "https://www.oaklandcouplestherapy.com/contact-me",
      "name": "Contact Me",
      "description": "Contact information for Oakland Couples Therapy including office address, phone number, and email."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.oaklandcouplestherapy.com/services",
      "url": "https://www.oaklandcouplestherapy.com/services",
      "name": "Services",
      "description": "Overview of couples and individual counseling services provided by Esther Lerman, LMFT in Oakland, CA."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.oaklandcouplestherapy.com/hours-and-fees",
      "url": "https://www.oaklandcouplestherapy.com/hours-and-fees",
      "name": "Hours and Fees",
      "description": "Office hours and session fees for therapy with Esther Lerman, LMFT in Oakland, CA."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
