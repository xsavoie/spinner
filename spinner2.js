const spin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

for (let i = 0; i < spin.length; i++) {
  let timer = 100 + (200 * i)
  setTimeout(() => {
    process.stdout.write(`\r${spin[i]}   `)
  }, timer);
}
