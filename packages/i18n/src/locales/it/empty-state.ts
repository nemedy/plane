/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  common_empty_state: {
    progress: {
      title: "Még nincsenek megjeleníthető előrehaladási metrikák.",
      description:
        "Kezdd el beállítani a tulajdonságok értékeit a munkatételekben, hogy itt megjelenjenek az előrehaladási metrikák.",
    },
    updates: {
      title: "Még nincsenek frissítések.",
      description: "Amint a projekt tagjai frissítéseket adnak hozzá, itt fognak megjelenni",
    },
    search: {
      title: "Nincs megfelelő találat.",
      description: "Nem található eredmény. Próbáld meg módosítani a keresési feltételeket.",
    },
    not_found: {
      title: "Hoppá! Úgy tűnik, valami hiba történt",
      description:
        "Jelenleg nem tudjuk lekérni a Plane fiókodat. Ez lehet hálózati hiba is.",
      cta_primary: "Próbáld újratölteni",
    },
    server_error: {
      title: "Szerverhiba",
      description:
        "Nem tudunk csatlakozni a szerverhez és adatokat lekérni. Ne aggódj, dolgozunk rajta.",
      cta_primary: "Próbáld újratölteni",
    },
  },
  project_empty_state: {
    no_access: {
      title: "Úgy tűnik, nincs hozzáférésed ehhez a projekthez",
      restricted_description: "Vedd fel a kapcsolatot az adminisztrátorral a hozzáférés kéréséhez.",
      join_description: "Kattints az alábbi gombra a csatlakozáshoz.",
      cta_primary: "Csatlakozás a projekthez",
      cta_loading: "Csatlakozás folyamatban",
    },
    invalid_project: {
      title: "Projekt nem található",
      description: "A keresett projekt nem létezik.",
    },
    work_items: {
      title: "Kezdd el az első munkatételeddel.",
      description:
        "A munkatételek a projekt alapjai — rendelj hozzá felelősöket, állíts prioritásokat és kövesd könnyedén a haladást.",
      cta_primary: "Első munkatétel létrehozása",
    },
    cycles: {
      title: "Csoportosítsd és időzítsd a munkát ciklusokba.",
      description:
        "Oszd fel a munkát időszakokra, tervezz visszafelé a határidőből, és érj el kézzelfogható eredményeket csapatként.",
      cta_primary: "Első ciklus beállítása",
    },
    cycle_work_items: {
      title: "Nincsenek megjeleníthető munkatételek ebben a ciklusban",
      description:
        "Hozz létre munkatételeket a csapat előrehaladásának követéséhez ebben a ciklusban.",
      cta_primary: "Munkatétel létrehozása",
      cta_secondary: "Meglévő munkatétel hozzáadása",
    },
    modules: {
      title: "Rendeld a projekt céljait modulokhoz, és kövesd könnyen.",
      description:
        "A modulok egymáshoz kapcsolódó munkatételekből állnak, és segítenek a projekt előrehaladásának nyomon követésében.",
      cta_primary: "Első modul beállítása",
    },
    module_work_items: {
      title: "Nincsenek megjeleníthető munkatételek ebben a modulban",
      description: "Hozz létre munkatételeket a modul követéséhez.",
      cta_primary: "Munkatétel létrehozása",
      cta_secondary: "Meglévő munkatétel hozzáadása",
    },
    views: {
      title: "Egyedi nézetek mentése a projekthez",
      description:
        "A nézetek mentett szűrők, amelyek segítenek gyorsan elérni a fontos információkat.",
      cta_primary: "Nézet létrehozása",
    },
    no_work_items_in_project: {
      title: "Még nincsenek munkatételek a projektben",
      description:
        "Adj hozzá munkatételeket, és bontsd fel a munkát követhető részekre.",
      cta_primary: "Munkatétel hozzáadása",
    },
    work_item_filter: {
      title: "Nem található munkatétel",
      description: "A jelenlegi szűrő nem adott eredményt.",
      cta_primary: "Munkatétel hozzáadása",
    },
    pages: {
      title: "Dokumentálj mindent — jegyzetektől a PRD-ig",
      description:
        "Az oldalak segítenek az információk rendszerezésében egy helyen.",
      cta_primary: "Első oldal létrehozása",
    },
    archive_pages: {
      title: "Még nincsenek archivált oldalak",
      description: "Az archivált oldalak itt lesznek elérhetők.",
    },
    intake_sidebar: {
      title: "Intake kérelmek rögzítése",
      description:
        "Küldj be új kérelmeket felülvizsgálatra és priorizálásra.",
      cta_primary: "Intake kérés létrehozása",
    },
    intake_main: {
      title: "Válassz ki egy intake munkatételt a részletek megtekintéséhez",
    },
  },
  workspace_empty_state: {
    archive_work_items: {
      title: "Még nincsenek archivált munkatételek",
      description:
        "Az archivált munkatételek itt lesznek elérhetők.",
      cta_primary: "Automatizálás beállítása",
    },
    archive_cycles: {
      title: "Még nincsenek archivált ciklusok",
      description: "Az archivált ciklusok itt lesznek elérhetők.",
    },
    archive_modules: {
      title: "Még nincsenek archivált modulok",
      description: "Az archivált modulok itt lesznek elérhetők.",
    },
    home_widget_quick_links: {
      title: "Tartsd kéznél a fontos hivatkozásokat és dokumentumokat",
    },
    inbox_sidebar_all: {
      title: "A követett munkatételek frissítései itt jelennek meg",
    },
    inbox_sidebar_mentions: {
      title: "Az említések itt jelennek meg",
    },
    your_work_by_priority: {
      title: "Még nincs hozzád rendelt munkatétel",
    },
    your_work_by_state: {
      title: "Még nincs hozzád rendelt munkatétel",
    },
    views: {
      title: "Még nincsenek nézetek",
      description:
        "Használj nézeteket a szűréshez és a haladás követéséhez.",
      cta_primary: "Munkatétel hozzáadása",
    },
    drafts: {
      title: "Félig elkészült munkatételek",
      description:
        "Kezdj el egy munkatételt és hagyd félbe, vagy hozz létre egy piszkozatot.",
      cta_primary: "Piszkozat létrehozása",
    },
    projects_archived: {
      title: "Nincsenek archivált projektek",
      description: "Minden projekted aktív.",
    },
    analytics_projects: {
      title: "Hozz létre projekteket a metrikák megjelenítéséhez.",
    },
    analytics_work_items: {
      title:
        "Hozz létre projekteket munkatételekkel a teljesítmény követéséhez.",
    },
    analytics_no_cycle: {
      title: "Hozz létre ciklusokat a munka szervezéséhez.",
    },
    analytics_no_module: {
      title: "Hozz létre modulokat a munka szervezéséhez.",
    },
    analytics_no_intake: {
      title: "Állítsd be az intake-et a kérelmek kezeléséhez",
    },
  },
  settings_empty_state: {
    estimates: {
      title: "Még nincsenek becslések",
      description:
        "Határozd meg, hogyan méri a csapat az erőfeszítést.",
      cta_primary: "Becslési rendszer hozzáadása",
    },
    labels: {
      title: "Még nincsenek címkék",
      description: "Hozz létre egyedi címkéket.",
      cta_primary: "Első címke létrehozása",
    },
    exports: {
      title: "Még nincsenek exportok",
      description:
        "Az exportált adatok itt jelennek meg.",
    },
    tokens: {
      title: "Még nincsenek személyes tokenek",
      description: "Hozz létre API tokeneket.",
      cta_primary: "API token hozzáadása",
    },
    webhooks: {
      title: "Még nincsenek webhookok",
      description: "Automatizáld az értesítéseket.",
      cta_primary: "Webhook hozzáadása",
    },
  },
} as const;
