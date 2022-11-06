
async function main(): Promise<void> {}

main().catch((error): void => {
    process.exitCode = 1;
    console.error(error);
});
