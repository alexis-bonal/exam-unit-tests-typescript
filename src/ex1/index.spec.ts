describe("isRangeAvailable", () => {
  describe("La plage de dates disponible est bien incluse dans la plage de dates demandées", () => {
    it("Doit retourner true");
  });
  describe("La date de début de la plage de dates disponible est avant la plage de dates demandées", () => {
    it("Doit retourner false");
  });
  describe("La date de fin de la plage de dates disponible est après la plage de dates demandées", () => {
    it("Doit retourner false");
  });
  describe("Les dates de début et de fin de la plage de dates disponible ne sont pas comprises dans la plage de dates demandées", () => {
    it("Doit retourner false");
  });
  describe("Dans la plage de dates demandées, les dates ont été inversées", () => {
    it("Doit soulever une erreur");
  });
  describe("Dans la plage de dates disponibles, les dates ont été inversées", () => {
    it("Doit soulever une erreur");
  });
});
