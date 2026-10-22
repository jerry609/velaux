// splitLinks parts a row's links into those shown and those folded under
// More: the first few show, and a lone link left over shows in place of a
// More holding only it. Hidden links are dropped first.
export function splitLinks<T extends { hidden?: boolean }>(links: T[], visible: number): { shown: T[]; folded: T[] } {
  const kept = links.filter((l) => !l.hidden);
  if (kept.length <= visible + 1) {
    return { shown: kept, folded: [] };
  }
  return { shown: kept.slice(0, visible), folded: kept.slice(visible) };
}
