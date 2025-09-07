function montarTabelaGenerica(
  data,
  divId = "resultadoDiv",
  headers = ["Nome", "Álcool", "Estilo", "Amargor"],
  props = ["name", "alcohol", "style", "ibu"],
) {
  const div = document.getElementById(divId);
  if (!data || data.length === 0) {
    div.innerHTML = "<p>Nada para mostrar</p>";
    return;
  }

  let tabela = "<table><thead><tr>";

  // Cabeçalhos
  headers.forEach((h) => {
    tabela += `<th>${h}</th>`;
  });
  tabela += "</tr></thead><tbody>";

  // Linhas
  data.forEach((item) => {
    tabela += "<tr>";
    props.forEach((p) => {
      let valor = item[p];

      // Se for array (ex: ingredients)
      if (Array.isArray(valor)) {
        valor = valor.join(", ");
      }

      // Se for imagem
      if (
        typeof valor === "string" &&
        valor.startsWith("http") &&
        (valor.includes("jpg") ||
          valor.includes("png") ||
          valor.includes("unsplash"))
      ) {
        valor = `<img src="${valor}" alt="img" class="tabela-img">`;
      }

      tabela += `<td>${valor ?? ""}</td>`;
    });
    tabela += "</tr>";
  });

  tabela += "</tbody></table>";

  div.innerHTML = tabela;
}
