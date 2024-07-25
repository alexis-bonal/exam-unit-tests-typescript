export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  const requestStart = requestedRange.startDate.getTime();
  const requestEnd = requestedRange.endDate.getTime();
  const availableStart = availableRange.startDate.getTime();
  const availableEnd = availableRange.endDate.getTime();

  // Vérification de la plage demandée
  if (requestStart > requestEnd) {
    throw new Error("Les dates demandées sont erronées");
  }

  // Vérification de la plage disponible
  if (availableStart > availableEnd) {
    throw new Error("Les dates disponibles sont erronées");
  }

  // Vérification de l'égalité
  return (
    requestStart < availableStart &&
    requestEnd > availableStart &&
    requestStart > availableEnd &&
    requestEnd > availableEnd
  );
}
