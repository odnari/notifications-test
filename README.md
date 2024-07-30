# Notifications

## Getting started

```bash
npm i
npm run dev
```

## Task

Розробити блок із нотифікаціями з емуляцією отримання нотифікацій використовуючи React.



### Інтерфейс:

- пустий хедер
- справа у хедері розміщена іконка дзвіночка
- при натисканні на дзвіночок з'являється блок із нотифікаціями

### Нотифікації

Приклади нотифікацій:

```text
Success: "Data has been processed [2024-06-01 12:23]"
Info: "Device U01 is online [2024-06-01 14:15]"
Alert: "Device X01 is down [2024-06-01 17:45]"
```

- Дизайн: не принциповий, можна використовувати прості прямокутники для відображення нотифікацій.
- Звуковий сигнал: При отриманні нової нотифікації відтворюється звуковий сигнал.
- Закриття нотифікацій: можливість закриття нотифікації при натисканні на іконку хрестика.
- Передбачити можливість відображення великої кількості нотифікацій, які не вміщуються на екрані.
- Текст нотифікацій може бути довгим (від 10 до 100 символів).
- Нотифікації можуть містити посилання на інші сторінки застосунку. 
  - Продумати формат передачі посилань з бекенду.
  - Передбачити захист від потенційних фішинг-атак - додати перевірку на те, що лінки не ведуть кудись на інший сайт.