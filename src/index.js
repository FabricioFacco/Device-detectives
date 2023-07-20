// Função para detectar o tipo de dispositivo com base no User Agent
function detectarDispositivo(userAgent) {
    if (!userAgent) {
      return "unknown"; // Caso o User Agent seja nulo ou indefinido, retornamos "unknown"
    }
  
    // Utilizamos expressões regulares mais precisas para a detecção
    const isMobile = /Mobile|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
  
    if (isMobile) {
      return "mobile";
    } else if (isTablet) {
      return "tablet";
    } else {
      return "desktop";
    }
  }
  
  // Exportar a função para que ela possa ser utilizada por outros módulos
  module.exports = detectarDispositivo;