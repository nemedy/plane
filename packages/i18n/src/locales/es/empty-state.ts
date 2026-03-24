/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  common_empty_state: {
    progress: {
      title: "Még nincsenek megjeleníthető előrehaladási mutatók.",
      description:
        "Kezdj el értékeket beállítani a munkatételek tulajdonságainál, hogy itt megjelenjenek az előrehaladási mutatók.",
    },
    updates: {
      title: "Még nincsenek frissítések.",
      description: "Amint a projekt tagjai frissítéseket adnak hozzá, itt fognak megjelenni",
    },
    search: {
      title: "Nincs találat.",
      description: "Nem található eredmény. Próbáld módosítani a keresési feltételeket.",
    },
    not_found: {
      title: "Hoppá! Valami nem stimmel",
      description: "Jelenleg nem tudjuk betölteni a Plane fiókodat. Ez hálózati hiba lehet.",
      cta_primary: "Újratöltés megkísérlése",
    },
    server_error: {
      title: "Szerverhiba",
      description:
        "Nem tudunk csatlakozni a szerverhez és adatokat lekérni. Ne aggódj, dolgozunk a megoldáson.",
      cta_primary: "Újratöltés megkísérlése",
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
      title: "A projekt nem található",
      description: "A keresett projekt nem létezik.",
    },
    work_items: {
      title: "Kezdd el az első munkatételeddel.",
      description:
        "A munkatételek a projekt alapjai — rendelj hozzá felelősöket, állíts be prioritásokat, és kövesd nyomon az előrehaladást egyszerűen.",
      cta_primary: "Első munkatétel létrehozása",
    },
    cycles: {
      title: "Szervezd a munkát ciklusokba.",
      description:
        "Oszd a munkát időhöz kötött szakaszokra, tervezz visszafelé a határidőkből, és érj el kézzelfogható haladást csapatként.",
      cta_primary: "Első ciklus létrehozása",
    },
    cycle_work_items: {
      title: "Nincsenek megjeleníthető munkatételek ebben a ciklusban",
      description:
        "Hozz létre munkatételeket, hogy nyomon követhesd a csapat előrehaladását ebben a ciklusban.",
      cta_primary: "Munkatétel létrehozása",
      cta_secondary: "Meglévő munkatétel hozzáadása",
    },
    modules: {
      title: "Rendeld a projektcélokat modulokhoz és kövesd nyomon.",
      description:
        "A modulok egymáshoz kapcsolódó munkatételekből állnak. Segítenek a projekt fázisainak követésében, határidőkkel és elemzésekkel.",
      cta_primary: "Első modul létrehozása",
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
      description: "Adj hozzá munkatételeket és bontsd fel a munkát követhető részekre.",
      cta_primary: "Munkatétel hozzáadása",
    },
    work_item_filter: {
      title: "Nincsenek találatok",
      description: "A jelenlegi szűrők nem adtak eredményt. Próbáld módosítani őket.",
      cta_primary: "Munkatétel hozzáadása",
    },
    pages: {
      title: "Dokumentálj mindent — jegyzetektől a specifikációkig",
      description:
        "Az oldalak lehetővé teszik az információk egy helyen történő rögzítését és rendszerezését.",
      cta_primary: "Első oldal létrehozása",
    },
    archive_pages: {
      title: "Még nincsenek archivált oldalak",
      description: "Archiváld a már nem szükséges oldalakat, és itt éred el őket.",
    },
    intake_sidebar: {
      title: "Kérelmek rögzítése",
      description:
        "Küldj be új kérelmeket, amelyeket felülvizsgálhatsz és nyomon követhetsz.",
      cta_primary: "Kérelem létrehozása",
    },
    intake_main: {
      title: "Válassz egy beérkező munkatételt a részletek megtekintéséhez",
    },
  },
  workspace_empty_state: {
    archive_work_items: {
      title: "Még nincsenek archivált munkatételek",
      description:
        "Archiválhatod a befejezett vagy törölt munkatételeket. Itt találod őket.",
      cta_primary: "Automatizálás beállítása",
    },
    archive_cycles: {
      title: "Még nincsenek archivált ciklusok",
      description: "Archiváld a befejezett ciklusokat a projekt rendszerezéséhez.",
    },
    archive_modules: {
      title: "Még nincsenek archivált modulok",
      description: "Archiváld a befejezett vagy törölt modulokat.",
    },
    home_widget_quick_links: {
      title: "Fontos hivatkozások és dokumentumok gyors elérése",
    },
    inbox_sidebar_all: {
      title: "Az értesítések itt jelennek meg",
    },
    inbox_sidebar_mentions: {
      title: "Az említések itt jelennek meg",
    },
    your_work_by_priority: {
      title: "Még nincsenek hozzárendelt munkatételek",
    },
    your_work_by_state: {
      title: "Még nincsenek hozzárendelt munkatételek",
    },
    views: {
      title: "Még nincsenek nézetek",
      description: "Használj nézeteket a munkatételek szűrésére és követésére.",
      cta_primary: "Munkatétel hozzáadása",
    },
    drafts: {
      title: "Félbehagyott munkatételek",
      description: "Kezdj el egy munkatételt, vagy hozz létre egy piszkozatot.",
      cta_primary: "Piszkozat létrehozása",
    },
    projects_archived: {
      title: "Nincsenek archivált projektek",
      description: "Minden projekt aktív — jó munka!",
    },
    analytics_projects: {
      title: "Hozz létre projekteket a metrikák megjelenítéséhez.",
    },
    analytics_work_items: {
      title: "Hozz létre projekteket munkatételekkel a teljesítmény követéséhez.",
    },
    analytics_no_cycle: {
      title: "Hozz létre ciklusokat a munkafázisok kezeléséhez.",
    },
    analytics_no_module: {
      title: "Hozz létre modulokat a munka szervezéséhez.",
    },
    analytics_no_intake: {
      title: "Állítsd be a kérelmek kezelését és nyomon követését.",
    },
  },
  settings_empty_state: {
    estimates: {
      title: "Még nincsenek becslések",
      description:
        "Határozd meg, hogyan méri a csapat a munkaráfordítást.",
      cta_primary: "Becslési rendszer hozzáadása",
    },
    labels: {
      title: "Még nincsenek címkék",
      description: "Hozz létre címkéket a munkatételek rendszerezéséhez.",
      cta_primary: "Címke létrehozása",
    },
    exports: {
      title: "Még nincsenek exportok",
      description: "Az exportált adatok itt jelennek meg.",
    },
    tokens: {
      title: "Még nincsenek személyes tokenek",
      description:
        "Hozz létre API tokeneket külső rendszerekhez.",
      cta_primary: "API token hozzáadása",
    },
    webhooks: {
      title: "Még nincsenek webhookok",
      description: "Automatizáld az események külső értesítését.",
      cta_primary: "Webhook hozzáadása",
    },
  },
} as const;
