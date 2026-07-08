# 🏆 CRM de Camisas - Copa do Mundo 2026

Este projeto é um **CRM (Customer Relationship Management) e Inventário em tempo real** desenhado sob medida para um empreendimento de venda de camisas de seleções para a Copa do Mundo de 2026. 

O sistema permite coordenar as operações de uma equipe de 3 pessoas (o dono do negócio, o vendedor e o entregador) de forma 100% gratuita e sincronizada na nuvem.

---

## 🛠️ Arquitetura e Tecnologias
A aplicação foi projetada sob uma arquitetura ágil de **custo $0** e sem dependências de servidores ou de ferramentas de build complexas:

![Diagrama de Arquitetura](architecture_diagram.png)

*   **Frontend:** HTML5, CSS3 (com design escuro moderno e variáveis dinâmicas) e JavaScript puro (Vanilla JS).
*   **Banco de Dados:** Google Firebase Firestore, permitindo sincronização de dados em tempo real entre múltiplos dispositivos simultaneamente.
*   **Hospedagem:** GitHub Pages, hospedando o site publicamente e de forma gratuita.

---

## 📋 Principais Funcionalidades

### 1. 📅 Calendario Semanal de Entregas
Projetado para a logística do entregador. Mostra uma agenda de Segunda a Domingo da semana atual com controles para avançar ou retroceder semanas. 

![Calendário Semanal](calendar_view.png)

*   **Detalhes ao Instante:** Ao clicar em qualquer entrega, abre-se um modal com o nome do cliente, local de entrega, método de pagamento, valor a cobrar e a lista de camisas vendidas com sua personalização de tamanho, tipo e nome.
*   **Entrega Rápida:** Conta com um botão para marcar o pedido como "Entregue", atualizando seu status imediatamente no histórico.

---

### 2. 📋 Gestão de Pedidos (Compras e Estoque)
Criado para separar o estoque físico disponível das solicitações dos clientes. É dividido em duas colunas:
*   **Pendentes (Por conseguir):** Lista de camisas que foram vendidas, mas ainda não estão fisicamente disponíveis.
    *   *Edição rápida:* Permite inserir e atualizar o custo de compra das camisas diretamente no card, salvando o valor de forma automática no Firebase.
    *   *Checkbox verde:* Ao pressionar o checkbox, este muda para verde e transfere o pedido para a coluna de "Concluídos", **adicionando de forma automática +1** (ou a quantidade do pedido) ao estoque geral daquele país.
*   **Concluídos (Em mãos):** Lista de mercadorias prontas para empacotar. Os cards são interativos e permitem edição caso ocorra algum erro no pedido.

---

### 3. 👕 Controle de Estoque Inteligente
Uma grade com as 48 seleções da Copa do Mundo mais Cabo Verde.

![Controle de Estoque](inventory_view.png)

*   **Edição rápida:** Clique diretamente no número de estoque para digitar a quantidade exata sem ter que pressionar o botão `+` repetidamente.
*   **Adicionar Produto:** Botão para adicionar manualmente qualquer produto que não estivesse na lista inicial.
*   **Estoque Negativo:** Se você vender um item com estoque `0`, o inventário diminui automaticamente para `-1`, indicando claramente em vermelho quantas peças precisam ser adquiridas para aquele pedido.

---

### 4. 💰 Registro de Vendas Ágil
Formulário otimizado para telas móveis que permite registrar um pedido em menos de 10 segundos.

![Formulário de Nova Venda](new_sale_view.png)

*   **Busca Preditiva (Autocomplete):** Em vez de menus suspensos longos, uma barra de pesquisa inteligente mostra correspondências de países com seu estoque em tempo real conforme você digita.
*   **Botões Quadrados:** Seletores táteis rápidos para Canal de Venda (WhatsApp, Instagram, etc.) e Método de Pagamento.
*   **Personalização da Camisa:** Opções para selecionar Tamanho (S a XXL), Tipo (Mandante / Visitante) e uma caixa de **Personalizar Nome** (se ativada, permite digitar o número e o nome do jogador; caso contrário, registra por padrão `S/N`).

---

### 5. 📜 Histórico Completo
Uma tabela cronológica que lista todas as operações salvas, valores cobrados e status atuais (Pendente / Entregue) para fins de auditoria do administrador do negócio.

![Histórico de Vendas](history_view.png)

---

## 💻 Notas do Desenvolvedor (Como foi construído?)
O CRM foi desenvolvido por meio de programação em par com o **Antigravity** (o assistente de codificação de IA do Google DeepMind).

*   **Abordagem de Design:** Estética *Glassmorphism* escura de nível premium. Exibe uma barra lateral de navegação confortável no desktop e se transforma em uma barra de abas inferior otimizada para o polegar em dispositivos móveis.
*   **Sincronização:** Firebase Firestore gerencia as atualizações em tempo real. Quando um vendedor registra uma venda na rua, o estoque é atualizado no inventário do dono e a entrega aparece instantaneamente no calendário do entregador.
