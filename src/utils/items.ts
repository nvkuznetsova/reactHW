interface IncludeNumericId {
  id: number;
}

export function findItemById<T extends IncludeNumericId>(items: ReadonlyArray<T>, id: number) {
  return items.find(item => item.id === id);
}

export function filterItemById<T extends IncludeNumericId>
  (items: ReadonlyArray<T>, id: number): ReadonlyArray<T> {
    return items.filter(item => item.id !== id);
}
  