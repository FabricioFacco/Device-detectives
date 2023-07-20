# Device Detectives

[![npm version](https://img.shields.io/npm/v/device-detectives.svg)](https://www.npmjs.com/package/device-detectives)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/FabricioFacco/evice-detectives/blob/master/LICENSE)

**Device Detectives** é uma biblioteca JavaScript simples e leve para detectar o tipo de dispositivo com base no User Agent.

## Instalação

Para usar o **Device Detectives** em seu projeto, você precisa ter o Node.js e o npm instalados. Em seguida, basta executar o seguinte comando no terminal:

```bash
npm install device-detectives
```

## Como usar

```js
const detectarDispositivo = require('device-detectives');

const userAgentDesktop = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
const userAgentMobile = 'Mozilla/5.0 (Linux; Android 10; SM-G970U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Mobile Safari/537.36';
const userAgentTablet = 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';

console.log(detectarDispositivo(userAgentDesktop)); // Output: desktop
console.log(detectarDispositivo(userAgentMobile)); // Output: mobile
console.log(detectarDispositivo(userAgentTablet)); // Output: tablet
```
## Detalhes sobre a detecção

    desktop: Dispositivos de mesa (computadores).
    mobile: Dispositivos móveis, como smartphones.
    tablet: Tablets.