//Exportar várias funçoes ao mesmo tempo em um EXPORT {}
function group() {
    console.log("Export nomeado não-inline (agrupado)");
}

//Exportar a função default no final do arquivo
function exportDefaul() {
    console.log("Export default não-inline");
}

//Pode exportar várias funcões - EX: export { add, remove, account,... }
export { group }

//Export default
export default exportDefaul

