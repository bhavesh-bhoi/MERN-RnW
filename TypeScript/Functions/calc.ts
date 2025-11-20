function cal(a: number, b: number, op: string): number | string {
  switch (op) {
    case "add":
      return a + b;

    case "sub":
      return a + b;

    case "mul":
      return a + b;

    case "div":
      if (b == 0) {
        return "cannot divide by 0"
      } else
        return a / b;

    default:
      return "Invalid Operation!"
  }
}

console.log(cal(3, 0, "div"))