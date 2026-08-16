function echo(input) {
  // we must print only string and value.
  // so object like null, Parameter is not suitable for printing.
  let type = typeof input;

  if (type === "number" || type === "string") {
    console.log(type);
    console.log(input);
  } else {
    console.log(type);
    console.log("Parameter is not suitable for printing");
  }
}

echo("Hello, JavaScript!");
echo(18);
echo(null);
