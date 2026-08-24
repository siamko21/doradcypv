// Jedno źródło prawdy dla sekcji dotacji PME2. Zasady programu jeszcze się zmieniają —
// aktualizacja ma być zmianą jednej wartości tutaj, nie przeszukiwaniem dziesięciu plików.
//
// Zweryfikowane 2026-08-24 na przydomowemagazyny.gov.pl (WebFetch, źródło rządowe) +
// gramwzielone.pl (dwa niezależne wyszukiwania, zgodne liczby). Rządowa strona programu
// (sekcja "O programie") NIE potwierdza konkretnej daty naboru — dosłowny cytat:
// "Nabór planowany jest na III kwartał 2026 r.", status "Wkrótce". Portale branżowe wciąż
// pokazują "4 września 2026", ale to data, którą NFOŚiGW wcześniej podał i wycofał — dlatego
// naborOd zostaje null, a naborPlanowany trzyma się wyłącznie sformułowania ze strony rządowej.
export const PME2 = {
  nazwa: "Przydomowe Magazyny Energii (część 2)",
  status: "przed naborem" as "przed naborem" | "nabor trwa" | "zamkniety",
  naborOd: null as string | null,
  naborPlanowany: "III kwartał 2026",
  budzet: 1_000_000_000,
  maxDotacja: 19_000,
  skladowe: {
    magazynEnergii: 16_000,
    premiaSprzetEuropejski: 2_000,
    magazynCiepla: 1_000,
  },
  stawkaMagazynEnergiiZaKWh: 800, // zł/kWh nominalnej pojemności, do limitu skladowe.magazynEnergii
  procentKosztow: 0.30,
  kosztyKwalifikowaneOd: "2025-11-01",
  minPojemnoscMagazynuKWh: 10,
  wspolczynnikPojemnosci: 2, // Wh magazynu na 1 Wp instalacji PV
  minPojemnoscMagazynuCieplaDm3: 100,
  zrodloUrl: "https://przydomowemagazyny.gov.pl/pme-czesc-2-z-fm/",
  ostatniaAktualizacja: "2026-08-24",
};
