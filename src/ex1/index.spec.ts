import { DateRange, isRangeAvailable } from ".";

describe("isRangeAvailable", () => {
  describe("La plage de dates disponible est bien incluse dans la plage de dates demandées", () => {
    it("Retourne true", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2024, 11, 31),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 10, 31),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    });
  });

  describe("La date de début de la plage de dates disponible est avant la plage de dates demandées", () => {
    it("Retourne false", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 11, 31),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2024, 10, 31),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toBeFalsy();
    });
  });

  describe("La date de fin de la plage de dates disponible est après la plage de dates demandées", () => {
    it("Retourne false", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2024, 10, 31),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 11, 31),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toBeFalsy();
    });
  });

  describe("Les dates de début et de fin de la plage de dates disponible ne sont pas comprises dans la plage de dates demandées", () => {
    it("Retourne false", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 10, 31),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2024, 11, 31),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toBeFalsy();
    });
  });

  describe("Dans la plage de dates demandées, les dates ont été inversées", () => {
    it("Soulève une erreur", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 11, 31),
        endDate: new Date(2024, 0, 1),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 10, 31),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toThrow(
        "Les dates demandées sont erronées"
      );
    });
  });

  describe("Dans la plage de dates disponibles, les dates ont été inversées", () => {
    it("Soulève une erreur", () => {
      const requestedRange: DateRange = {
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2024, 11, 31),
      };
      const availableRange: DateRange = {
        startDate: new Date(2024, 10, 31),
        endDate: new Date(2024, 1, 1),
      };

      expect(isRangeAvailable(requestedRange, availableRange)).toThrow(
        "Les dates disponibles sont erronées"
      );
    });
  });
});
