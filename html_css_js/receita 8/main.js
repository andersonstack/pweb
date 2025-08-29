async function buscarDados(url) {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error("Erro na requisição: " + res.status)
    }
    return await res.json()
  } catch (err) {
    console.error("Erro ao buscar dados:", err)
    return null
  }
}

async function processarCafes() {
  const url = "https://api.sampleapis.com/coffee/hot"
  const cafes = await buscarDados(url)

  if (!cafes) {
    document.getElementById("cafesDiv").innerHTML = "Erro ao carregar cafés ☹️"
    return
  }

  const headers = ["Nome", "Descrição", "Ingredientes", "Imagem"]
  const props = ["title", "description", "ingredients", "image"]

  renderizarTabela(cafes, "cafesDiv", headers, props)
}

document.getElementById("botaoCarregar")
        .addEventListener("click", async () => {
          await processarCafes()
        })
