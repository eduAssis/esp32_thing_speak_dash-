# Monitoramento de Temperatura e Umidade com ESP32

Monitorar temperatura e umidade utilizando o microcontrolador ESP32, sensor de temperatura e umidade DHT11 e a plataforma ThingSpeak para visualização em tempo real dos dados. 

O microcontrolador é capaz de acionar um relé automaticamente quando certas condições de temperatura ou umidade são atingidas.

Condições para teste do relé: 
- Temperatura > 31 °C 
- Umidade relativa do ar > 70%

Para a implementação, foi utilizada a IDE Thonny para a instalação do firmware e programação do ESP32, com a linguagem de programação Python.

---

## Pinagem do ESP32 com Expansion Board
"ESP32 ESP32S 30P Expansion Board"

Conexão do Sensor DHT11 (Pino D4)
- S (Signal) do DHT11 conectado ao D4 da Expansion Board ESP32.
- V (VCC) do DHT11 conectado ao 5V do ESP32.
- G (GND) do DHT11 conectado ao GND do ESP32.

Conexão do Relé (Pino D17)
- S (Signal) do relé conectado ao D17 da Expansion Board ESP32.
- V (VCC) do relé conectado ao 5V do ESP32.
- G (GND) do relé conectado ao GND do ESP32.

---

## Autoria

Este projeto foi desenvolvido por **Eduardo de Assis** e **Sara Bodnar** 

Disciplina de **Fundamentos de Internet das Coisas** 

Curso de **Análise e Desenvolvimento de Sistemas** 

**Pontifícia Universidade Católica do Paraná (PUCPR)**.

- **Eduardo de Assis**  
  [LinkedIn](https://www.linkedin.com/in/eduardo-de-assis-21b308153)

- **Sara Bodnar**  
  [LinkedIn](https://www.linkedin.com/in/sara-bodnar-965911202)

**Setembro de 2024**


