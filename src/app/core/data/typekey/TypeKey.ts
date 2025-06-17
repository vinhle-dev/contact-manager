export abstract class TypeKey {
  static getAllTypes(): string[] {
    const types: string[] = [];
    Object.entries(this).forEach(([key, value]) => {
      types.push(value);
    });

    return types
  }
}
