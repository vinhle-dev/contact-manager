export class StringUtil {
  static safe(str: string | null | undefined) {
    return str ? str : ""
  }

  static join(strs: (string | null | undefined)[], w: string) {
    let result = ""
    strs.forEach(str => {
      const v = this.safe(str);
      if (v !== "") {
        result += (result !== "" ? w : "") + v;
      }
    })

    return result
  }
}
