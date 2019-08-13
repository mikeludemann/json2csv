# json2csv

JSON to CSV converter

## Example

```
var headers = {
  model: 'Phone Model'.replace(/,/g, ''),
  chargers: "Chargers",
  cases: "Cases",
  earphones: "Earphones"
};

items = [
  {
    model: 'Samsung Galaxy S10',
    chargers: '55',
    cases: '56',
    earphones: '57',
    scratched: '2'
  },
  {
    model: 'Google Pixel XL 3',
    chargers: '77',
    cases: '78',
    earphones: '79',
    scratched: '4'
  },
  {
    model: 'iPhone XR',
    chargers: '88',
    cases: '89',
    earphones: '90',
    scratched: '6'
  }
];

var newItems = [];

items.forEach((item) => {
  newItems.push({
    model: item.model.replace(/,/g, ''),
    chargers: item.chargers,
    cases: item.cases,
    earphones: item.earphones
  });
});

var fileTitle = 'orders';

json2csv(newItems);
```